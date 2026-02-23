
Config = {}

--[[ Commands and Settings ]]
Config.Commands = {
    --[[ You can trigger the menu with a command. ]]
    OpenMenu = {
        active = true,
        command = 'garbagejob',
    },
    --[[ Command the lobby leader can use to end the match ]]
    LeaveTask = {
        active = true,
        command = 'leavegarbagetask',
    },
    --[[ Accept Lobby Invite ]]
    AcceptInvite = {
        command = 'acceptgarbage',
    }
}

Config.JobOptions = {
    --[[ Ranks
        Determines the completion experience of each level.
        The more there are, the more levels there are.
        So in this value, 7 levels have been added.
    ]]
    ranks = { 0, 1800, 4000, 6000, 9000, 12000, 20000 },
    startPoints = {
        --[[ Start Point #1 ]]
        [1] = {
            active = true,
            --[[
                Restrict jobs that can do this job
                Value: nil or 'job_name' or {job_name_1 = 0, job_name_2 = 0}
            ]]
            job = nil,
            -- [[ Employer Options ]]
            employerPed = {
                -- [[ Employer will be here ]]
                spawnCoords = vector4(-318.9055, -1540.5082, 27.6605, 331.5302),
                model = '',
                blip = {
                    active = true, scale = 0.8, color = 16, sprite = 318, title = 'Garbage Job'
                },
            },
            -- [[ Vehicle Options ]]
            taskVehicleSpawnCoords = {
                vector4(-329.2752, -1519.9646, 27.5345, 176.9559),
                vector4(-326.0136, -1520.5620, 27.3902, 179.6123),
                vector4(-322.7132, -1519.8539, 27.5448, 182.3351),
                vector4(-319.6342, -1520.1406, 27.5520, 180.0946),
                vector4(-324.5850, -1527.2722, 27.5411, 3.5350),
                vector4(-327.5482, -1527.3190, 27.5360, 357.5855),
                vector4(-330.8102, -1526.9286, 27.5362, 1.3118),
                vector4(-333.7516, -1527.1063, 27.5485, 0.5280),
            },
            lastStep = {
                destroyCoords = vector(-329.1760, -1562.4731, 27.5355),
                count = 3,
            }
        },
    },
}

Config.Tasks = {
    -- Level 1
    [1] = {
        unique_id = 1,
        level = 1,
        title = 'Task #1',
        exp = 600,
        fee = 5000,
        goals = 3,
        max_client = 2,
    },
    [2] = {
        unique_id = 2,
        level = 1,
        title = 'Task #2',
        exp = 600,
        fee = 5000,
        goals = 3,
        max_client = 4,
    },
    -- Level 2
    [3] = {
        unique_id = 3,
        level = 2,
        title = 'Task #3',
        exp = 800,
        fee = 8000,
        goals = 5,
        max_client = 2,
    },
    [4] = {
        unique_id = 4,
        level = 2,
        title = 'Task #4',
        exp = 800,
        fee = 8000,
        goals = 5,
        max_client = 4,
    },
    -- Level 3
    [5] = {
        unique_id = 5,
        level = 3,
        title = 'Task #5',
        exp = 1000,
        fee = 10000,
        goals = 5,
        max_client = 2,
    },
    [6] = {
        unique_id = 6,
        level = 3,
        title = 'Task #6',
        exp = 1000,
        fee = 10000,
        goals = 5,
        max_client = 4,
    },
    -- Level 4
    [7] = {
        unique_id = 7,
        level = 4,
        title = 'Task #7',
        exp = 1000,
        fee = 12000,
        goals = 5,
        max_client = 2,
    },
    [8] = {
        unique_id = 8,
        level = 4,
        title = 'Task #8',
        exp = 1000,
        fee = 12000,
        goals = 5,
        max_client = 4,
    },
    -- Level 5
    [9] = {
        unique_id = 9,
        level = 5,
        title = 'Task #9',
        exp = 1000,
        fee = 15000,
        goals = 6,
        max_client = 2,
    },
    [10] = {
        unique_id = 10,
        level = 5,
        title = 'Task #10',
        exp = 1000,
        fee = 15000,
        goals = 6,
        max_client = 4,
    },
    -- Level 6
    [11] = {
        unique_id = 11,
        level = 6,
        title = 'Task #11',
        exp = 1200,
        fee = 18000,
        goals = 7,
        max_client = 2,
    },
    [12] = {
        unique_id = 12,
        level = 6,
        title = 'Task #12',
        exp = 1200,
        fee = 18000,
        goals = 10,
        max_client = 4,
    },
    -- Level 7
    [13] = {
        unique_id = 13,
        level = 7,
        title = 'Task #13',
        exp = 1200,
        fee = 25000,
        goals = 8,
        max_client = 2,
    },
    [14] = {
        unique_id = 14,
        level = 7,
        title = 'Task #14',
        exp = 1200,
        fee = 25000,
        goals = 8,
        max_client = 4,
    },
}

--[[
    Spawn coordinates of Dumpster objects.
    Players will be directed to these coordinates.
--]]
Config.DumpsterCoords = {
    vector4(-238.9105, -1467.7247, 30.5167, 24.8564),
    vector4(-165.3418, -1676.4504, 32.2536, 233.5978),
    vector4(-175.5567, -1370.8782, 30.2655, 305.4118),
    vector4(185.9617, -1456.6105, 28.1416, 51.0856),
    vector4(86.2347, -1241.5713, 28.2918, 6.9200),
    vector4(-344.4791, -1065.3862, 21.9977, 53.8850),
    vector4(-46.4278, -393.7891, 37.2164, 65.0053),
    vector4(-1186.3895, -719.7497, 20.1742, 304.5377),
    vector4(-1505.0138, -516.5974, 31.8068, 116.8423),
    vector4(-1989.7694, -483.8713, 10.6641, 318.4946),
    vector4(-917.9995, -1154.0863, 3.7514, 28.3749),
    vector4(-1077.9222, -1236.0480, 4.1149, 33.211),
    vector4(-1135.2126, -1254.6389, 6.1339, 302.3531),
    vector4(-1429.3136, -660.4733, 27.6734, 124.9428),
    vector4(-543.3163, 336.1325, 83.3726, 271.1164),
    vector4(546.1997, -146.8297, 57.43, 179.8648),
    vector4(-1371.7343, -642.4339, 27.65, 295.3497),
    vector4(313.5849, -1167.1862, 28.3, 181.4622),
    vector4(446.8390, -1908.2225, 23.75, 35.5),
    vector4(126.4941, -2202.7571, 5.05, 189.1631),
}

--[[ Garbage Models ]]
Config.Models = {
    dumpster = 218085040,
    bin_bag = 1138881502,
    small_box = -1305230175,
}

--[[ Thrown garbage bags can break and drop items ]]
Config.ThrowBinBag = {
    active = true,
    breakChance = 0.5, --[[ 0.1-1.0 ]]
    items = {
        { name = 'metalscrap', label = 'Metal Scrap', count = 1 },
        { name = 'copper',     label = 'Copper',      count = 1 },
        { name = 'plastic',    label = 'Plastic',     count = 1 },
        { name = 'aluminum',   label = 'aluminum',    count = 1 },
        { name = 'glass',      label = 'Glass',       count = 1 },
    },
}

--[[ You can set Commands.OpenMenu' command to use with item. ]]
Config.Tablet = {
    active = true,
    itemName = 'garbage_tablet',
}

-- [[ Uniform Options ]]
Config.JobUniforms = {
    active = true,
    --[[! Clothing models in ``modules/bridge/<framework>/client.lua`` !]]
}

--[[ Garbage Vehicle ]]
Config.TaskVehicles = {
    --[[ Vehicle for 1/2 person missions ]]
    model_1 = 'master2', -- !!! I don't recommend changing it.
    --[[ Vehicle for 3/4 person missions ]]
    model_2 = 'trash2',  -- !!! I don't recommend changing it.
    --[[ Vehicle Plate | max 8 character | for random to set nil ]]
    plate = nil,         -- 'GARBAGE'
}

Config.Bundle = {
    ['delivery'] = '0r-delivery',
    ['towtruck'] = '0r-towtruck'
}

--[[ DEBUG ]]
Config.debug = false
