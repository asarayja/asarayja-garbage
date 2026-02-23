
client = {
    framework = shared.GetFrameworkObject(),
    load = false,
    uiLoad = false,
    --[[ Script Global Vars]]
    onDuty = false,
    workingPoint = nil,
    inLobby = false,
    lobby = {
        id = nil,
        members = {}, --[[@type table<key, {source:number, photo: number}>]]
        leaderId = nil,
        isTaskStarted = false,
        isTaskFinished = false,
        taskId = nil,
        taskVehicleNetId = nil,
        taskProgress = 0,
        goals = 0,
        lastStepProgress = 0,
    },
    hands = {
        busy = false,
        held_object = nil,
    },
}

require 'modules.bridge.client'

local Utils = require 'modules.utils.client'
local Target = require 'modules.target.client'
local Lobby = require 'modules.lobby.client'

---@type table<number, entityId>
local createdPeds = {}
---@type table<number, {id: number, targetable: boolean}>
local createdObjects = {}
---@type table<number, {id: number, targetable: boolean}>
local taskObjects = {}

local startPointsCreated = false

local lastDumpster = {
    blip = nil, coords = nil, clean = 0, attached = false, entity = nil,
}

---Sends message to the ReactUI.
---@param action string
---@param data any
function client.SendReactMessage(action, data)
    SendNUIMessage({ action = action, data = data })
end

--- Calculates the user's level on experience
--- @param experience number Total experience of the user.
--- @return number level
local function getUserLevel(experience)
    for lvl, reqExp in pairs(Config.JobOptions.ranks) do
        if experience < reqExp then return math.max(0, lvl - 1) end
    end
    return 1
end

--- Returns the experience points needed for the next level.
--- @param exp number Current experience points of the user.
--- @return number
local function getNextLevelExp(exp)
    for _, reqExp in pairs(Config.JobOptions.ranks) do
        if exp < reqExp then return reqExp end
    end
    return 1
end

--- Adds a blip on the map for the given target (entity or coordinates).
--- @param target number|table Entity ID or vector3 coordinates.
--- @param blip table Table containing blip properties: sprite, color, scale, title.
--- @param route boolean Whether to set a waypoint for the blip.
--- @return number
local function addBlip(target, blip, route)
    local blipId = type(target) == 'number' and AddBlipForEntity(target) or AddBlipForCoord(vector3(target))
    SetBlipSprite(blipId, blip.sprite)
    SetBlipColour(blipId, blip.color)
    SetBlipScale(blipId, blip.scale)
    SetBlipAsShortRange(blipId, true)
    BeginTextCommandSetBlipName('STRING')
    AddTextComponentString(blip.title)
    EndTextCommandSetBlipName(blipId)
    SetBlipFlashes(blipId, true)
    SetBlipFlashTimer(blipId, 5000)

    if route then SetNewWaypoint(target.x, target.y) end
    return blipId
end

--- Sets the job uniform based on the current framework and state.
--- @param state boolean Whether to apply the job uniform or revert to the original skin.
local function setJobUniform(state)
    local framework = shared.framework

    if state then
        if framework == 'esx' then
            client.framework.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
                if skin then
                    local uniform = skin.sex == 0 and Config.JobUniforms.male or Config.JobUniforms.female
                    TriggerEvent('skinchanger:loadClothes', skin, uniform)
                end
            end)
        else
            local xPlayer = client.framework.Functions.GetPlayerData()
            if xPlayer and xPlayer.charinfo then
                local outfitData = xPlayer.charinfo.gender == 1 and Config.JobUniforms.female or Config.JobUniforms.male
                outfitData['hat'].texture = math.random(8)
                TriggerEvent('qb-clothing:client:loadOutfit', { outfitData = outfitData })
            end
        end
    else
        if framework == 'esx' then
            client.framework.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
                if skin then TriggerEvent('skinchanger:loadSkin', skin) end
            end)
        elseif framework == 'qb' then
            TriggerServerEvent('qb-clothes:loadPlayerSkin')
        else
            TriggerEvent('illenium-appearance:client:reloadSkin', true)
        end
    end
end

--- Creates information markers while a task is in progress.
local function createInformationMarkers()
    Citizen.CreateThread(function()
        while client.lobby?.isTaskStarted do
            local waitTime = 1000

            if client.hands.busy then
                if not client.lobby?.isTaskFinished then
                    local vehicle = NetToVeh(client.lobby.taskVehicleNetId)
                    if DoesEntityExist(vehicle) then
                        waitTime = 0
                        local doorCoords = Utils.GetVehicleDoorPosition(vehicle)
                        DrawMarker(2, doorCoords.x, doorCoords.y, doorCoords.z + 1.5, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 0.5,
                            0.5, 0.5, 168, 255, 202, 100, true, true, 2, false)
                    end
                else
                    waitTime = 0
                    local coords = Config.JobOptions.startPoints[client.workingPoint].lastStep.destroyCoords
                    DrawMarker(2, coords.x, coords.y, coords.z + 0.5, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 0.5, 0.5, 0.5, 168,
                        255, 202, 100, true, true, 2, false)
                end
            elseif not client.lobby.isTaskFinished then
                local dumpsterCoords = lastDumpster.coords and vector3(lastDumpster.coords)
                if dumpsterCoords then
                    if lastDumpster.attached then
                        dumpsterCoords = GetEntityCoords(lastDumpster.entity)
                    end

                    if #(GetEntityCoords(cache.ped) - dumpsterCoords) < 15.0 then
                        waitTime = 0
                        DrawMarker(2, dumpsterCoords.x, dumpsterCoords.y, dumpsterCoords.z + 2.0, 0.0, 0.0, 0.0, 0.0,
                            180.0, 0.0, 0.5, 0.5, 0.5, 168, 255, 202, 100, true, true, 2, false)
                    end
                end
            end

            Citizen.Wait(waitTime)
        end
    end)
end

-- Open menu.
local function openMenu()
    if not client.uiLoad then return end
    if not client.onDuty then
        client.onDuty = true
        client.workingPoint = client.onDuty and 1
    end
    local userProfile = lib.callback.await(_e('server:getPlayerProfile'), false)
    userProfile.source = cache.serverId
    userProfile.level = getUserLevel(userProfile.exp)
    userProfile.nextLevelExp = getNextLevelExp(userProfile.exp)
    client.SendReactMessage('ui:setUserProfile', userProfile)
    client.SendReactMessage('ui:setVisible', true)
    SetNuiFocus(true, true)
    lib.callback(_e('server:GetRanks'), false, function(data)
        if data then
            local function getUserLevel(experience)
                for lvl, requireRep in pairs(Config.JobOptions.ranks) do
                    if experience < requireRep then return math.max(0, lvl - 1) end
                end
                return 1
            end

            local filteredData = {}
            for key, value in pairs(data) do
                if value.exp > 0 then
                    value.level = getUserLevel(value.exp)
                    table.insert(filteredData, value)
                end
            end
            client.SendReactMessage('ui:setRanks', filteredData)
        end
    end)
end

--- Toggles the player's job duty status and handles related actions.
--- @param pointIndex integer The index of the working point.
--- @param openTablet boolean
local function toggleJobDuty(pointIndex, openTablet)
    client.onDuty = not client.onDuty

    if Config.JobUniforms.active then
        setJobUniform(client.onDuty)
    end

    client.workingPoint = client.onDuty and pointIndex or nil
    Utils.Notify(locale(client.onDuty and 'on_duty' or 'off_duty'), client.onDuty and 'success' or 'inform')

    if not client.onDuty and client.inLobby then
        Lobby.Leave()
    end

    if client.onDuty and openTablet then
        openMenu()
    end

end

RegisterNetEvent('0r-garbage:ToggleJobDuty', function(pointIndex)
    local points = Config.JobOptions.startPoints
    if not pointIndex or
        not points[pointIndex]
    then
        return Utils.Notify('Working point not found !', 'error')
    end
    toggleJobDuty(pointIndex)
end)

--- Creates start points and employer peds for the job.
local function createStartPoints()
    if startPointsCreated then return end
    local function createEmployerPed(model, coords)
        if not IsModelValid(model) then return false end

        lib.requestModel(model)
        local ped = CreatePed(4, model, coords.x, coords.y, coords.z - 1, coords.w, false, false)
        if not DoesEntityExist(ped) then return false end

        SetPedDefaultComponentVariation(ped)
        SetPedDiesWhenInjured(ped, false)
        SetEntityInvincible(ped, true)
        FreezeEntityPosition(ped, true)
        TaskSetBlockingOfNonTemporaryEvents(ped, true)
        SetBlockingOfNonTemporaryEvents(ped, true)
        SetModelAsNoLongerNeeded(model)

        createdPeds[#createdPeds + 1] = ped
        return ped
    end
    local points = Config.JobOptions.startPoints
    for index, point in pairs(Config.JobOptions.startPoints) do
        if not point.active then goto continue end

        local ped = createEmployerPed(point.employerPed.model, point.employerPed.spawnCoords)
        if ped and point.employerPed.blip.active then
            addBlip(ped, point.employerPed.blip)
        end

        Target.AddLocalEntity(ped, {
            {
                icon = 'fa-solid fa-recycle',
                label = locale('toggle_job_duty'),
                groups = point.job,
                onSelect = function() toggleJobDuty(index, true) end,
            },
        })

        ::continue::
    end
    startPointsCreated = true
end

--- Creates a task vehicle at a clear spawn location.
--- @param spawnCoords table List of potential spawn coordinates.
--- @param type string The type of the vehicle.
--- @return vehicleNetId, veh
local function createTaskVehicle(spawnCoords, type)
    local function findClearSpawnCoord(coords)
        for _, v in pairs(coords) do
            if not IsAnyVehicleNearPoint(v.x, v.y, v.z, 1.0) then
                return vector4(v.x, v.y, v.z, v.w)
            end
        end
        return nil
    end
    local model, plate = Config.TaskVehicles[type], Config.TaskVehicles.plate
    lib.requestModel(model)
    local spawnPoint = findClearSpawnCoord(spawnCoords)
    if not spawnPoint then return false end

    local veh = CreateVehicle(model, spawnPoint.x, spawnPoint.y, spawnPoint.z, spawnPoint.w, true, false)
    if not DoesEntityExist(veh) then return false end

    local vehicleNetId = VehToNet(veh)
    SetEntityCoords(veh, spawnPoint.x, spawnPoint.y, spawnPoint.z)
    SetVehicleHasBeenOwnedByPlayer(veh, true)
    SetVehicleOnGroundProperly(veh)
    SetVehicleNeedsToBeHotwired(veh, false)
    if plate then
        SetVehicleNumberPlateText(veh, plate)
    end
    SetVehicleFuelLevel(veh, 100.0)
    SetVehicleDirtLevel(veh, 0.0)
    SetVehicleDeformationFixed(veh)
    SetModelAsNoLongerNeeded(model)
    return vehicleNetId, veh
end

--- Sets up the task vehicle and assigns it to the player.
--- @param taskType string
local function SetupTask(taskType)
    if not client.workingPoint then
        return Utils.Notify(locale('start_point_not_found'), 'error')
    end

    if client.lobby?.leaderId == cache.serverId then
        local startPoint = Config.JobOptions.startPoints[client.workingPoint]
        local taskVehicleSpawnCoords = startPoint.taskVehicleSpawnCoords

        local vehNetId, vehEntity = createTaskVehicle(taskVehicleSpawnCoords, taskType)
        if not vehNetId then
            Utils.Notify(locale('no_slot_for_task_veh'), 'error')
            Citizen.Wait(3000)
            return SetupTask(taskType)
        end
        Citizen.Wait(777)
        TriggerServerEvent(_e('server:OnTaskVehicleCreated'), client.lobby?.id, vehNetId)
        TriggerServerEvent(_e('server:GiveDumpsterCoordToLobby'), client.lobby?.id)
    end
end

--- Sets the task information text on the UI.
--- @param text string
local function setTaskInfoText(text)
    client.SendReactMessage('ui:setTaskInfo', text)
end

function deleteTaskVehicle()
    if not client.lobby.taskVehicleNetId or
        not NetworkDoesEntityExistWithNetworkId(client.lobby.taskVehicleNetId) then
        return
    end

    local vehicle = NetToVeh(client.lobby.taskVehicleNetId)

    if DoesEntityExist(vehicle) then
        SetEntityAsMissionEntity(vehicle, true, true)
        DeleteVehicle(vehicle)
    end
end

function deleteCreatedObjects()
    for _, object in pairs(createdObjects) do
        if DoesEntityExist(object) then
            DeleteEntity(object)
        end
    end

    for _, object in pairs(taskObjects) do
        if object and DoesEntityExist(object.id) then
            if object.targetable then
                Target.RemoveLocalEntity(object.id)
            end
            DeleteEntity(object.id)
        end
    end

    createdObjects = {}
    taskObjects = {}
end

function deleteTaskObject(entity)
    for key, object in pairs(taskObjects) do
        if object and object.id == entity then
            if DoesEntityExist(object.id) then
                if object.targetable then
                    Target.RemoveLocalEntity(object.id)
                end
                DeleteEntity(object.id)
            end
            taskObjects[key] = false
            return key
        end
    end
    return nil
end

function deleteCreatedPeds()
    for key, ped in pairs(createdPeds) do
        SetEntityAsNoLongerNeeded(ped)
        if not DoesEntityExist(ped) then
            DeleteEntity(ped)
        end
    end
    createdPeds = {}
    startPointsCreated = false
end

function deletePedHands()
    if client.hands.busy then
        ClearPedTasksImmediately(cache.ped)
        if DoesEntityExist(client.hands.held_object) then
            DeleteEntity(client.hands.held_object)
        end
    end
    client.hands = { busy = false, held_object = nil, }
end

function deleteBlips()
    if lastDumpster and lastDumpster.blip and DoesBlipExist(lastDumpster.blip) then
        RemoveBlip(lastDumpster.blip)
        lastDumpster.blip = nil
    end
end

--[[ @ ]]

--- Prepare the frontend and send the data
function client.SetupUI()
    if client.uiLoad then return end
    local defaultLocale = GetConvar('ox:locale', 'en')
    client.SendReactMessage('ui:setupUI', {
        setLocale = lib.loadJson(('locales.%s'):format(defaultLocale)).ui,
        setTasks = Config.Tasks,
    })
end

function client.onPlayerLoad(isLoggedIn)
    client.load = isLoggedIn
    if isLoggedIn then
        createStartPoints()
    else
        TriggerServerEvent(_e('server:onPlayerLogout'))
        deleteCreatedPeds()
        deleteCreatedObjects()
        deleteTaskVehicle()
        deletePedHands()
        if client.onDuty then
            toggleJobDuty()
        end
    end
end

--- Starts the client resource.
function client.StartResource()
    if client.IsPlayerLoaded() then
        client.onPlayerLoad(true)
    end
end

RegisterNetEvent(_e('client:openMenu'), openMenu)

--[[ Commands ]]

if Config.Commands.OpenMenu.active then
    RegisterCommand(Config.Commands.OpenMenu.command, function()
        openMenu()
    end, false)
end

if Config.Commands.LeaveTask.active then
    RegisterCommand(Config.Commands.LeaveTask.command, function()
        if client.inLobby and client.lobby?.isTaskStarted then
            Lobby.Leave()
        else
            Utils.Notify(locale('not_on_task'))
        end
    end, false)
end

RegisterCommand(Config.Commands.AcceptInvite.command, function()
    if not client.inLobby then
        Lobby.AcceptLastInvite()
    end
end, false)

--[[ End Commands ]]

--[[ @ ]]

RegisterNUICallback('nui:loadUI', function(_, resultCallback)
    resultCallback(true)
    client.SetupUI()
end)

RegisterNUICallback('nui:onLoadUI', function(_, resultCallback)
    resultCallback(true)
    client.uiLoad = true
end)

RegisterNUICallback('nui:hideFrame', function(_, resultCallback)
    client.SendReactMessage('ui:setVisible', false)
    SetNuiFocus(false, false)
    resultCallback(true)
end)

AddEventHandler('onResourceStart', function(resource)
    if resource == shared.resource then
        Citizen.Wait(2000)
        client.StartResource()
    end
end)

AddEventHandler('onResourceStop', function(resource)
    if resource == shared.resource then
        client.onPlayerLoad(false)
        Utils.HideTextUI()
    end
end)

--[[ End @ ]]

---@param script 'delivery'|'towtruck'
---@param resultCallback function
RegisterNUICallback('nui:openBundleApp', function(script, resultCallback)
    local key = Config.Bundle[script]
    if key and shared.IsResourceStart(key) then
        client.SendReactMessage('ui:setVisible', false)
        SetNuiFocus(false, false)
        exports[key].OpenApp()
    end
    resultCallback(true)
end)

---@param photo number
---@param resultCallback function
RegisterNUICallback('nui:updateProfilePhoto', function(newPhoto, resultCallback)
    local response = lib.callback.await(_e('server:updateProfilePhoto'), false, newPhoto, client.lobby?.id)
    if response then
        client.SendReactMessage('ui:setProfilePhoto', newPhoto)
    end
    resultCallback(true)
end)

---@param targetSource number
---@param resultCallback function
RegisterNUICallback('nui:sendInviteToPlayer', function(targetSource, resultCallback)
    Lobby.Invite(targetSource)
    resultCallback(true)
end)

---@param task any
---@param resultCallback function
RegisterNUICallback('nui:startLobbyWithTask', function(taskId, resultCallback)
    if not client.workingPoint then
        return Utils.Notify(locale('need_to_on_duty'), 'error')
    end
    local point = Config.JobOptions.startPoints[ client.workingPoint --[[@as number]] ]
    if not point then return end
    local distance = #(vector3(point.employerPed.spawnCoords) - GetEntityCoords(cache.ped))
    if distance > 15.0 then
        return Utils.Notify(locale('far_from_point'), 'error')
    end
    Lobby.StartTask(taskId)
    resultCallback(true)
end)

RegisterNetEvent(_e('client:setPlayerLobby'), function(newLobby)
    Lobby.UpdateData(newLobby)
end)

RegisterNetEvent(_e('client:onTaskStart'), function(data)
    setTaskInfoText(nil)
    client.lobby.isTaskStarted = true
    client.lobby.taskId = data.taskId
    client.lobby.goals = data.goals
    client.lobby.taskProgress = 0
    client.SendReactMessage('ui:setCurrentLobby', client.lobby)
    --[[ Close UI ]]
    client.SendReactMessage('ui:setVisible', false)
    SetNuiFocus(false, false)
    --[[ End Close UI ]]
    SetupTask(data.taskType)
    createInformationMarkers()
end)

RegisterNetEvent(_e('client:OnTaskVehicleCreated'), function(netId, type)
    local plate = Config.TaskVehicles.plate
    client.lobby.taskVehicleNetId = netId
    Utils.Notify(locale('task_vehicle_created'), 'success')
    local vehicle = NetToVeh(netId)
    if not plate then
        plate = GetVehicleNumberPlateText(vehicle)
    end
    if cache.serverId == client.lobby.leaderId then
        SetPedIntoVehicle(cache.ped, vehicle, -1)
    else
        for seat = 0, GetVehicleMaxNumberOfPassengers(vehicle) - 1 do
            if GetPedInVehicleSeat(vehicle, seat) == 0 then
                SetPedIntoVehicle(cache.ped, vehicle, seat)
                break
            end
        end
    end

    Utils.GiveVehicleKey(plate, vehicle)
    addBlip(vehicle, {
        active = true,
        scale = 0.65,
        color = 2,
        sprite = 318,
        title = locale('task_vehicle')
    })
    --[[ Debug ]]
    Utils.debug('Vehicle Created|Entity:', vehicle)
end)

RegisterNetEvent(_e('client:updateTaskProgress'), function(newProgress)
    client.lobby.taskProgress = newProgress
    Utils.Notify(locale('task_progress_updated'), 'success')
    client.SendReactMessage('ui:setTaskProgress', newProgress)
end)

RegisterNetEvent(_e('client:DeleteTaskObject'), function(index)
    --[[ Debug ]]
    if index then
        Utils.debug("triggered client:DeleteTaskObject", 'index: ' .. index)
    end
    for key, object in pairs(taskObjects) do
        if key == index and object then
            Utils.debug('object deleted', index, object.id, DoesEntityExist(object.id))
            if DoesEntityExist(object.id) then
                DeleteObject(object.id)
            end
            taskObjects[key] = false
            return
        end
    end
end)

RegisterNetEvent(_e('client:TaskCompleted'), function()
    Utils.Notify(locale('task_completed'), 'success', 2500)
    deleteCreatedObjects()
    deleteBlips()
    lastDumpster = {}
    client.lobby.isTaskStarted = false
    client.lobby.isTaskFinished = false
    client.lobby.taskId = nil
    client.lobby.taskVehicleNetId = nil
    client.lobby.taskProgress = 0
    client.lobby.goals = 0
    client.SendReactMessage('ui:setCurrentLobby', client.lobby)
end)

local function GetDirectionFromRotation(rotation)
    local dm = (math.pi / 180)
    return vector3(-math.sin(dm * rotation.z) * math.abs(math.cos(dm * rotation.x)),
        math.cos(dm * rotation.z) * math.abs(math.cos(dm * rotation.x)), math.sin(dm * rotation.x))
end

local function addTargetToSmallBox(entity)
    Target.AddLocalEntity(entity, {
        {
            label = locale('pick_up'),
            icon = 'fa-solid fa-recycle',
            distance = 1.5,
            onSelect = function(data)
                if client.hands.busy then return end
                local entity = type(data) == 'table' and data.entity or data
                if DoesEntityExist(entity) then
                    DeleteEntity(entity)
                end
                TriggerServerEvent(_e('server:GiveRandomSmallBoxItem'))
            end
        },
    })
end

local function createTrashModelAndCheckInPedHand()
    if client.hands.busy then return end

    -- Load model and create trash object
    lib.requestModel(Config.Models.bin_bag)
    local objBinBag = CreateObject(Config.Models.bin_bag, 0, 0, 0, true, false, false)
    SetModelAsNoLongerNeeded(Config.Models.bin_bag)

    -- Attach object to hand and play animation
    local boneIndex = GetPedBoneIndex(cache.ped, 57005)
    AttachEntityToEntity(objBinBag, cache.ped, boneIndex, 0.12, 0.0, 0.0, 25.0, 270.0, 180.0, true, true, false, true, 1,
        true)
    local animDict = 'anim@heists@narcotics@trash'
    lib.requestAnimDict(animDict)
    TaskPlayAnim(cache.ped, animDict, 'walk', 1.0, -1.0, -1, 49, 0, 0, 0, 0)
    RemoveAnimDict(animDict)

    setTaskInfoText(locale('info_binbag_progress'))
    client.hands = { busy = true, held_object = objBinBag }

    Citizen.CreateThread(function()
        local taskVehicle = client.lobby and client.lobby.taskVehicleNetId and NetToVeh(client.lobby.taskVehicleNetId)
        local textUI = false

        if taskVehicle and DoesEntityExist(taskVehicle) then
            local taskVehModel = GetEntityModel(taskVehicle)
            local isModel1 = taskVehModel == joaat(Config.TaskVehicles.model_1)
            SetVehicleDoorOpen(taskVehicle, isModel1 and 4 or 5)

            while client.hands.busy do
                local playerPed, playerPos = cache.ped, GetEntityCoords(cache.ped)
                local targetPos = Utils.GetVehicleDoorPosition(taskVehicle)
                local distFromTarget = #(playerPos - targetPos)
                local nearTarget = distFromTarget <= (isModel1 and 7.5 or 3.0)

                if nearTarget and not textUI then
                    Utils.ShowTextUI('[E] ' .. locale('throw_it'))
                    textUI = true
                elseif not nearTarget and textUI then
                    Utils.HideTextUI()
                    textUI = false
                end

                if IsControlJustPressed(0, 38) then
                    -- Play throw animation
                    ClearPedTasksImmediately(playerPed)
                    TaskPlayAnim(playerPed, animDict, 'throw_b', 1.0, -1.0, -1, 2, 0, 0, 0, 0)
                    RemoveAnimDict(animDict)
                    Citizen.Wait(500)

                    -- Detach and handle trash behavior
                    DetachEntity(client.hands.held_object)
                    local bagBreaked = false
                    local throwPower = isModel1 and 15.0 or 5.0

                    if nearTarget then
                        local throwDirection = (targetPos - playerPos) / #(targetPos - playerPos)
                        SetEntityVelocity(client.hands.held_object, throwDirection.x * throwPower,
                            throwDirection.y * throwPower, (throwDirection.z + 0.33) * throwPower)
                        Citizen.Wait(450)
                        DeleteEntity(client.hands.held_object)
                    elseif Config.ThrowBinBag.active then
                        bagBreaked = true
                        local forwardVector = GetEntityForwardVector(playerPed)
                        SetEntityVelocity(client.hands.held_object, forwardVector.x * 20,
                            forwardVector.y * 20, forwardVector.z * 0.2 * 20)
                        Citizen.Wait(200)

                        -- Spawn particle effect
                        local landedPos = GetEntityCoords(client.hands.held_object)
                        lib.requestNamedPtfxAsset('core')
                        UseParticleFxAssetNextCall('core')
                        local effectName = 'ent_dst_rubbish'
                        StartParticleFxNonLoopedAtCoord(effectName, landedPos.x, landedPos.y, landedPos.z - 0.5, 0.0, 0.0,
                            0.0, 1.0, false, false, false)
                        RemoveNamedPtfxAsset('core')
                        DeleteEntity(client.hands.held_object)

                        -- Check for break and create small box
                        if math.random() <= Config.ThrowBinBag.breakChance then
                            lib.requestModel(Config.Models.small_box)
                            local smallBox = CreateObject(Config.Models.small_box, landedPos.x, landedPos.y, landedPos.z,
                                true, false, false)
                            SetModelAsNoLongerNeeded(Config.Models.small_box)
                            PlaceObjectOnGroundProperly(smallBox)
                            addTargetToSmallBox(smallBox)
                        end
                    end
                    ClearPedTasksImmediately(playerPed)
                    -- Cleanup and progress update
                    client.hands = { busy = false, held_object = nil }
                    Utils.HideTextUI()
                    TriggerServerEvent(_e('server:IncProgressGoal'), client.lobby.id,
                        { type = 'bin_bag', bagBreaked = bagBreaked })
                    break
                end
                Citizen.Wait(5)
            end
        end
    end)
end

local function createMovableDumpsterAndCheckInPedHand()
    if client.hands.busy then return end

    -- Load model and create trash object
    lib.requestModel(Config.Models.dumpster)
    local objDumpster = CreateObject(Config.Models.dumpster, 0, 0, 0, true, false, false)
    SetModelAsNoLongerNeeded(Config.Models.dumpster)
    -- Attach object to hand and play animation
    AttachEntityToEntity(objDumpster, cache.ped, -1,
        0.0, 1.05, -1.0,
        0.0, 0.0, 0.0,
        true, true, false, true, 1, true)

    local animDict = 'missfinale_c2ig_11'
    lib.requestAnimDict(animDict)
    TaskPlayAnim(cache.ped, animDict, 'pushcar_offcliff_f', 8.0, -8.0, -1, 49, 0, false, false, false)
    RemoveAnimDict(animDict)

    setTaskInfoText(locale('info_dumpster_progress'))
    client.hands = { busy = true, held_object = objDumpster }

    Citizen.CreateThread(function()
        local taskVehicle = client.lobby and client.lobby.taskVehicleNetId and NetToVeh(client.lobby.taskVehicleNetId)
        local textUI = false
        local createdNetDumpster = nil
        if taskVehicle and DoesEntityExist(taskVehicle) then
            SetVehicleDoorOpen(taskVehicle, 5)

            while client.hands.busy do
                local playerPed, playerPos = cache.ped, GetEntityCoords(cache.ped)
                local targetPos = Utils.GetVehicleDoorPosition(taskVehicle)
                local nearTarget = #(playerPos - targetPos) <= 3.0

                if nearTarget and not textUI then
                    Utils.ShowTextUI('[E] ' .. locale('put_it_on_vehicle'))
                    textUI = true
                elseif not nearTarget and textUI then
                    Utils.HideTextUI()
                    textUI = false
                end

                if IsControlJustPressed(0, 38) then
                    SetVehicleDoorShut(taskVehicle, 5, true)
                    ClearPedTasksImmediately(playerPed)
                    DetachEntity(client.hands.held_object)
                    createdNetDumpster = client.hands.held_object
                    local taskVehRot = GetEntityRotation(taskVehicle)
                    AttachEntityToEntity(createdNetDumpster, taskVehicle, GetEntityBoneIndexByName(taskVehicle, 'boot'),
                        0.0, -2.75, -1.2, 0.0, 0.0, 180.0, false, true, false, false, true, true)
                    Citizen.Wait(250)
                    SetVehicleDoorOpen(taskVehicle, 5)
                    Citizen.Wait(2000)
                    SetVehicleDoorShut(taskVehicle, 5)
                    Citizen.Wait(250)
                    DetachEntity(client.hands.held_object)
                    client.hands = { busy = false, held_object = nil }
                    Utils.HideTextUI()
                    TriggerServerEvent(_e('server:IncProgressGoal'), client.lobby.id, { type = 'dumpster' })
                    break
                end
                Citizen.Wait(5)
            end
            Citizen.Wait(2500)
            if DoesEntityExist(createdNetDumpster) then
                DeleteEntity(createdNetDumpster)
            end
        end
    end)
end

local function createDumpster(coords, targetable)
    local model = Config.Models.dumpster
    lib.requestModel(model)
    local object = CreateObject(model,
        coords.x, coords.y, coords.z,
        false, false, false)
    if not DoesEntityExist(object) then
        Utils.debug('Failed to create Dumpster. Will try again')
        Citizen.Wait(2000)
        return createDumpster(coords)
    end
    SetEntityCoords(object, coords.xyz)
    SetEntityHeading(object, coords.w)
    SetModelAsNoLongerNeeded(model)
    taskObjects[#taskObjects + 1] = { id = object, targetable = targetable, type = 'dumpster' }
    SetEntityCoords(object, coords.x, coords.y, coords.z)
    FreezeEntityPosition(object, true)
    return object
end

local function createBinBags(dumpster)
    local objects = {}
    local coords = GetEntityCoords(dumpster)
    local heading = GetEntityHeading(dumpster)
    local model = Config.Models.bin_bag

    lib.requestModel(model)

    local minDim, maxDim = GetModelDimensions(GetEntityModel(dumpster))
    local dumpsterDepth = maxDim.x - minDim.x

    local headingRad = math.rad(heading)
    local headingBackRad = math.rad(heading + 180)

    local frontOffset = dumpsterDepth / 2 + 0.3
    local backOffset = dumpsterDepth / 2 + 0.3

    local function createBag(xOffset, yOffset)
        local bag = CreateObject(model, xOffset, yOffset, coords.z, false, false, false)
        SetEntityHeading(bag, heading)
        table.insert(objects, bag)

        local objCoords = GetEntityCoords(bag)
        SetEntityCoords(bag, objCoords.x, objCoords.y, objCoords.z)
        FreezeEntityPosition(bag, true)

        taskObjects[#taskObjects + 1] = { id = bag, targetable = true }
    end

    for i = 1, 2 do
        createBag(coords.x + backOffset * math.cos(headingBackRad),
            coords.y + backOffset * math.sin(headingBackRad))
        backOffset = backOffset + 0.6
    end

    createBag(coords.x + frontOffset * math.cos(headingRad),
        coords.y + frontOffset * math.sin(headingRad))

    SetModelAsNoLongerNeeded(model)

    return objects
end

local function checkVehScoop()
    Citizen.CreateThread(function()
        local taskVehicle = client.lobby and client.lobby.taskVehicleNetId and NetToVeh(client.lobby.taskVehicleNetId)
        if not taskVehicle then return end
        if not DoesEntityExist(taskVehicle) then return end
        SetVehicleDoorShut(taskVehicle, 4)
        local scoopBoneIndex = GetEntityBoneIndexByName(taskVehicle, "scoop")
        local dumpsterCoords = vector3(lastDumpster.coords)
        local textUI = false
        local lastTextUpdate = 0
        local textUpdateInterval = 100
        local attachedDumpster = nil
        local particules = false
        while client.lobby?.isTaskStarted do
            local wait = 1000
            if cache.vehicle and cache.vehicle == taskVehicle and
                GetPedInVehicleSeat(taskVehicle, -1) == cache.ped
            then
                local scoopCoords = GetWorldPositionOfEntityBone(taskVehicle, scoopBoneIndex)
                local scoopRotation = GetEntityBoneRotation(taskVehicle, scoopBoneIndex)
                local distance = #(dumpsterCoords - scoopCoords)
                if not lastDumpster.attached then
                    if distance <= 6.0 and scoopRotation.x <= -75.0 then
                        wait = 5
                        if not textUI then
                            Utils.ShowTextUI('[E] ' .. locale('clean_dumpster'))
                            textUI = true
                        end
                        if IsControlJustPressed(0, 38) then
                            setTaskInfoText(locale('clean_dumpster'))
                            SetVehicleDoorOpen(taskVehicle, 4)
                            lastDumpster.attached = true
                            local findIndex = deleteTaskObject(lastDumpster.entity)
                            TriggerServerEvent(_e('server:DeleteTaskObject'), client.lobby.id, findIndex)
                            lib.requestModel(Config.Models.dumpster)
                            attachedDumpster = CreateObject(Config.Models.dumpster, 0, 0, 0, true, false, false)
                            lastDumpster.entity = attachedDumpster
                            SetModelAsNoLongerNeeded(Config.Models.dumpster)
                            AttachEntityToEntity(
                                attachedDumpster,
                                taskVehicle,
                                scoopBoneIndex,
                                0, 1.75, 3.25,
                                82.0, 0.0, 0.0,
                                true,
                                true,
                                false,
                                true,
                                1,
                                true
                            )
                            lib.requestNamedPtfxAsset('core')
                        end
                    elseif textUI then
                        textUI = false
                        Utils.HideTextUI()
                    end
                else
                    if GetGameTimer() - lastTextUpdate >= textUpdateInterval then
                        if not textUI then
                            textUI = true
                        end
                        Utils.ShowTextUI(locale('per_dumpster', lastDumpster.clean))
                        lastTextUpdate = GetGameTimer()
                    end
                    if scoopRotation.x > 2.0 then
                        if not particules then
                            UseParticleFxAssetNextCall('core')
                            local effectName = 'veh_exhaust_truck'
                            local coords = Utils.GetVehicleDoorPosition(taskVehicle)
                            particules = StartParticleFxLoopedAtCoord(effectName,
                                coords.x, coords.y, coords.z,
                                0.0, 0.0, 0.0,
                                2.5, false, false, false)
                        end
                        wait = 50
                        lastDumpster.clean = math.min(100, lastDumpster.clean + 1)
                        if lastDumpster.clean >= 100 then
                            lastDumpster.attached = false
                            DetachEntity(attachedDumpster)
                            FreezeEntityPosition(attachedDumpster, false)
                            TriggerServerEvent(_e('server:IncProgressGoal'), client.lobby.id,
                                { type = 'dumpster' })
                            setTaskInfoText(locale('info_binbag_progress'))
                            StopParticleFxLooped(particules, false)
                            RemoveNamedPtfxAsset('core')
                            Utils.HideTextUI()
                            break
                        end
                    end
                end
            elseif textUI then
                textUI = false
                Utils.HideTextUI()
            end
            Citizen.Wait(wait)
        end
        if textUI then
            Utils.HideTextUI()
        end
        Citizen.Wait(5000)
        if DoesEntityExist(attachedDumpster) then
            DeleteEntity(attachedDumpster)
        end
    end)
end

local function ejectAllPlayersFromVehicle()
    local vehicle = cache.vehicle
    if vehicle then
        local maxSeats = GetVehicleMaxNumberOfPassengers(vehicle)
        for seat = -1, maxSeats - 1 do
            local ped = GetPedInVehicleSeat(vehicle, seat)
            if ped ~= 0 and IsPedAPlayer(ped) then
                TaskLeaveVehicle(ped, vehicle, 0)
            end
        end
    end
end

local function lastStepThread()
    if client.hands.busy then return end

    lib.requestModel(Config.Models.bin_bag)
    local objBinBag = CreateObject(Config.Models.bin_bag, 0, 0, 0, true, false, false)
    SetModelAsNoLongerNeeded(Config.Models.bin_bag)

    local boneIndex = GetPedBoneIndex(cache.ped, 57005)
    AttachEntityToEntity(objBinBag, cache.ped, boneIndex, 0.12, 0.0, 0.0, 25.0, 270.0, 180.0, true, true, false, true, 1,
        true)
    local animDict = 'anim@heists@narcotics@trash'
    lib.requestAnimDict(animDict)
    TaskPlayAnim(cache.ped, animDict, 'walk', 1.0, -1.0, -1, 49, 0, 0, 0, 0)
    RemoveAnimDict(animDict)

    client.hands = { busy = true, held_object = objBinBag }

    Citizen.CreateThread(function()
        local textUI = false

        local targetPos = Config.JobOptions.startPoints[client.workingPoint]?.lastStep?.destroyCoords
        if not targetPos then return end

        while client.hands.busy do
            local wait = 500
            local playerPed, playerPos = cache.ped, GetEntityCoords(cache.ped)
            local distFromTarget = #(playerPos - targetPos)
            local nearTarget = distFromTarget <= 8.0

            if nearTarget and not textUI then
                Utils.ShowTextUI('[E] ' .. locale('throw_it'))
                textUI = true
            elseif not nearTarget and textUI then
                Utils.HideTextUI()
                textUI = false
            end
            if nearTarget then
                wait = 5
                if IsControlJustPressed(0, 38) then
                    ClearPedTasksImmediately(playerPed)
                    TaskPlayAnim(playerPed, animDict, 'throw_b', 1.0, -1.0, -1, 2, 0, 0, 0, 0)
                    RemoveAnimDict(animDict)
                    Citizen.Wait(500)

                    DetachEntity(client.hands.held_object)
                    local bagBreaked = false
                    local throwPower = 9.0

                    local throwDirection = (targetPos - playerPos) / #(targetPos - playerPos)
                    SetEntityVelocity(client.hands.held_object, throwDirection.x * throwPower,
                        throwDirection.y * throwPower, (throwDirection.z + 0.33) * throwPower)
                    Citizen.Wait(450)
                    DeleteEntity(client.hands.held_object)
                    ClearPedTasksImmediately(playerPed)
                    client.hands = { busy = false, held_object = nil }
                    Utils.HideTextUI()
                    TriggerServerEvent(_e('server:IncProgressLastStep'), client.lobby.id)
                    break
                end
            end
            Citizen.Wait(wait)
        end
    end)
end

---@param newDumpsterCoord vector4
---@param taskId number
RegisterNetEvent(_e('client:OnNewDumpsterCoordCreated'), function(newDumpsterCoord, taskType)
    lastDumpster.coords = newDumpsterCoord
    lastDumpster.clean = 0
    lastDumpster.attached = false
    local dumpsterObject = createDumpster(newDumpsterCoord, taskType == 'model_2')
    local binBagObjects = createBinBags(dumpsterObject)
    lastDumpster.entity = dumpsterObject
    Target.AddLocalEntity(binBagObjects, {
        {
            label = locale('pick_up'),
            icon = 'fa-solid fa-recycle',
            distance = 2.0,
            onSelect = function(data)
                if client.hands.busy then return end
                local entity = type(data) == 'table' and data.entity or data
                local findIndex = deleteTaskObject(entity)
                TriggerServerEvent(_e('server:DeleteTaskObject'), client.lobby.id, findIndex)
                createTrashModelAndCheckInPedHand()
            end
        },
    })
    if taskType == 'model_2' then
        Target.AddLocalEntity(dumpsterObject, {
            {
                label = locale('pick_up'),
                icon = 'fa-solid fa-recycle',
                distance = 1.5,
                onSelect = function(data)
                    if client.hands.busy then return end
                    local entity = type(data) == 'table' and data.entity or data
                    local findIndex = deleteTaskObject(entity)
                    TriggerServerEvent(_e('server:DeleteTaskObject'), client.lobby.id, findIndex)
                    createMovableDumpsterAndCheckInPedHand()
                end
            },
        })
    else
        checkVehScoop()
    end
    deleteBlips()
    lastDumpster.blip = addBlip(newDumpsterCoord, {
        scale = 0.7,
        color = 5,
        sprite = 728,
        title = locale('dumpster')
    }, true)
    setTaskInfoText(locale('go_marked_destination'))
end)

RegisterNetEvent(_e('client:StartLastStep'), function()
    client.lobby.lastStepProgress = 0
    local need = Config.JobOptions.startPoints[client.workingPoint].lastStep.count * #client.lobby.members
    setTaskInfoText(locale("destroy_garbage_with_team", client.lobby.lastStepProgress, need))
    deleteBlips()
    if client.hands.busy then
        if DoesEntityExist(client.hands.held_object) then
            DetachEntity(client.hands.held_object)
            DeleteEntity(client.hands.held_object)
            ClearPedTasksImmediately(cache.ped)
        end
        client.hands.busy = false
        client.hands.held_object = nil
    end
    if not client.workingPoint then return end
    local coords = Config.JobOptions.startPoints[client.workingPoint].lastStep.destroyCoords
    SetNewWaypoint(coords.x, coords.y)
    Citizen.CreateThread(function()
        local textUI = false
        local targetCoords = Config.JobOptions.startPoints[client.workingPoint].lastStep.destroyCoords
        while client.lobby.isTaskFinished do
            local wait = 1000
            if cache.vehicle then
                local taskVehicle = NetToVeh(client.lobby.taskVehicleNetId)
                if cache.vehicle == taskVehicle then
                    if GetPedInVehicleSeat(taskVehicle, -1) == cache.ped then
                        local vehCoords = GetEntityCoords(taskVehicle)
                        local distance = #(targetCoords - vehCoords)
                        if distance <= 50.0 then
                            wait = 0
                            DrawMarker(2,
                                targetCoords.x, targetCoords.y, targetCoords.z + .5,
                                0.0, 0.0, 0.0,
                                0.0, 180.0, 0.0,
                                .5, .5, .5,
                                168, 255, 202, 100,
                                true, true, 2, false
                            )
                        end
                        if distance < 15.0 then
                            if not textUI then
                                textUI = true
                                Utils.ShowTextUI('[E]' .. locale('hand_over_vehicle'))
                            end
                            if IsControlJustPressed(0, 38) then
                                SetVehicleDoorOpen(cache.vehicle, 5)
                                ejectAllPlayersFromVehicle()
                                TriggerServerEvent(_e('server:SpawnLobbyLastStepBags'), client.lobby.id)
                                break
                            end
                        elseif textUI then
                            textUI = false
                            Utils.HideTextUI()
                        end
                    elseif textUI then
                        textUI = false
                        Utils.HideTextUI()
                    end
                end
            end
            Citizen.Wait(wait)
        end
        if textUI then
            Utils.HideTextUI()
        end
    end)
end)

RegisterNetEvent(_e('client:SpawnLastStepBags'), function()
    local taskVehicle = NetToVeh(client.lobby.taskVehicleNetId)
    if DoesEntityExist(taskVehicle) then
        local backPos = Utils.GetVehicleBackPosition(taskVehicle)

        local distanceBehind = -1.0
        local sideOffset = 0.6

        local vehicleHeading = GetEntityHeading(taskVehicle)
        local backX = backPos.x - math.sin(math.rad(vehicleHeading)) * distanceBehind
        local backY = backPos.y + math.cos(math.rad(vehicleHeading)) * distanceBehind


        local localBags = {}

        local _count = Config.JobOptions.startPoints[client.workingPoint]?.lastStep?.count or 3

        for i = 1, _count do
            local binBagX = backX + i * sideOffset * math.cos(math.rad(vehicleHeading))
            local binBagY = backY + i * sideOffset * math.sin(math.rad(vehicleHeading))
            local binBagZ = backPos.z

            local binBag = CreateObject(Config.Models.bin_bag, binBagX, binBagY, binBagZ, false, false, false)
            SetEntityInvincible(binBag, true)
            PlaceObjectOnGroundProperly(binBag)
            localBags[#localBags + 1] = binBag
            createdObjects[#createdObjects + 1] = binBag
        end
        Target.AddLocalEntity(localBags, {
            {
                label = locale('pick_up'),
                icon = 'fa-solid fa-recycle',
                distance = 1.5,
                onSelect = function(data)
                    if client.hands.busy then return end
                    local entity = type(data) == 'table' and data.entity or data
                    DeleteEntity(entity)
                    lastStepThread()
                end
            },
        })
    end
end)

RegisterNetEvent(_e('client:updateLastStepProgress'), function(data, finish)
    client.lobby.lastStepProgress = data
    local need = Config.JobOptions.startPoints[client.workingPoint].lastStep.count * #client.lobby.members
    setTaskInfoText(locale("destroy_garbage_with_team", client.lobby.lastStepProgress, need))
    if cache.serverId == client.lobby.leaderId and finish then
        deleteTaskVehicle()
        TriggerServerEvent(_e('server:FinishTaskClearLobby'), client.lobby.id)
    end
end)


-- exports.interact:AddInteraction({
--     coords = vector3(-318.16, -1544.66, 27.71),
--     distance = 17.0, -- optional
--     interactDst = 1.0, -- optional
--     id = 'garbagejobX', -- needed for removing interactions
--     name = 'garbagejobX', -- optional
--     options = {
--         {
--             label = 'Garbage Manager',
--             action = function()
--                 -- Toggle job duty
--                 client.onDuty = not client.onDuty

--                 -- Notify the player
--                 Utils.Notify(locale(client.onDuty and 'on_duty' or 'off_duty'), client.onDuty and 'success' or 'inform')

--                 -- Set the job uniform if active
--                 if Config.JobUniforms.active then
--                     local xPlayer = client.framework.Functions.GetPlayerData()
--                     if xPlayer and xPlayer.charinfo then
--                         local outfitData = xPlayer.charinfo.gender == 1 and Config.JobUniforms.female or Config.JobUniforms.male
--                         outfitData['hat'].texture = math.random(8)
--                         TriggerEvent('qb-clothing:client:loadOutfit', { outfitData = outfitData })
--                     end
--                 end

--                 -- Set the working point
--                 client.workingPoint = client.onDuty and 1 or nil

--                 -- Open the menu if starting duty
--                 if client.onDuty then
--                     openMenu()
--                 end

--                 -- If going off duty and in a lobby, leave the lobby
--                 if not client.onDuty and client.inLobby then
--                     Lobby.Leave()
--                 end
--             end,
--         },
--     }
-- })


-- Command to manually sign in/out
-- RegisterCommand("signin", function()
--     TriggerEvent("mp-garbage:SignIn")
-- end, false)

-- Event for signing in to the garbage job
RegisterNetEvent('mp-garbage:SignIn', function()
    print("mp-garbage:SignIn event triggered!") -- Debug print

    -- Toggle job duty
    client.onDuty = not client.onDuty
    print("Job duty toggled. On Duty:", client.onDuty) -- Debug print

    -- Notify the player
    Utils.Notify(client.onDuty and 'You are now on duty!' or 'You are now off duty!', client.onDuty and 'success' or 'inform')
    print("Notification sent.") -- Debug print

    -- Set the job uniform if active
    if Config.JobUniforms.active then
        print("Setting job uniform...") -- Debug print
        local xPlayer = client.framework.Functions.GetPlayerData()
        if xPlayer and xPlayer.charinfo then
            local outfitData = xPlayer.charinfo.gender == 1 and Config.JobUniforms.female or Config.JobUniforms.male
            outfitData['hat'].texture = math.random(8)
            TriggerEvent('qb-clothing:client:loadOutfit', { outfitData = outfitData })
            print("Uniform set.") -- Debug print
        else
            print("Failed to set uniform: Player data not found.") -- Debug print
        end
    end

    -- Set the working point
    client.workingPoint = client.onDuty and 1 or nil
    print("Working point set:", client.workingPoint) -- Debug print

    -- Open the menu if starting duty
    -- if client.onDuty then
    --     print("Opening menu...") -- Debug print
    --     openMenu()
    -- end

    -- If going off duty and in a lobby, leave the lobby
    if not client.onDuty and client.inLobby then
        print("Leaving lobby...") -- Debug print
        Lobby.Leave()
    end
end)

RegisterNetEvent('mp-garbage:opentab', function()
    -- Open the menu if starting duty
    if client.onDuty then
        print("Opening menu...") -- Debug print
        openMenu()
    else
        TriggerEvent("pyh-tablet:Notify", "Garbage Management", "you need to be on duty!", 'assets/hq.png', 2000)
    end

    -- If going off duty and in a lobby, leave the lobby
    -- if not client.onDuty and client.inLobby then
    --     print("Leaving lobby...") -- Debug print
    --     Lobby.Leave()
    -- end
end)


-- Event for signing out of the garbage job
RegisterNetEvent('mp-garbage:SignOut', function()
    print("mp-garbage:SignOut event triggered!") -- Debug print

    -- Toggle job duty
    client.onDuty = false
    print("Job duty toggled. On Duty:", client.onDuty) -- Debug print

    -- Notify the player
    Utils.Notify('You are now off duty!', 'inform')
    print("Notification sent.") -- Debug print

    -- Revert to the original skin/uniform
    if Config.JobUniforms.active then
        print("Reverting to original skin...") -- Debug print
        if shared.framework == 'esx' then
            client.framework.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
                if skin then TriggerEvent('skinchanger:loadSkin', skin) end
            end)
        elseif shared.framework == 'qb' then
            TriggerServerEvent('qb-clothes:loadPlayerSkin')
        else
            TriggerEvent('illenium-appearance:client:reloadSkin', true)
        end
    end

    -- Reset the working point
    client.workingPoint = nil
    print("Working point reset.") -- Debug print

    -- If in a lobby, leave the lobby
    if client.inLobby then
        print("Leaving lobby...") -- Debug print
        Lobby.Leave()
    end
end)