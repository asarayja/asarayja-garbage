import Popup from "@/components/Popup";
import useData from "@/hooks/useData";
import { fetchNui } from "@/utils/fetchNui";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSolidNotepad } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import classNames from "classnames";
import { Ranks, Tasks } from "./Partials";
import { IoMdHome } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";

const Garbage: React.FC = () => {
  const { t } = useTranslation();
  const { userProfile, currentLobby } = useData();
  const [openedPopup, setOpenedPopup] = useState<
    "profile-photo" | "invite" | undefined
  >();
  const [popError, setPopError] = useState<string | undefined>(undefined);
  const [selectedNewPhoto, setSelectedNewPhoto] = useState<number>(
    userProfile.photo
  );
  const [invitedTarget, setInvitedTarget] = useState<number>();
  const [activeTab, setActiveTab] = useState<"tasks" | "ranks">("tasks");

  const handleSavePhoto = async () => {
    await fetchNui("nui:updateProfilePhoto", selectedNewPhoto, true);
  };

  const calcReputationWidth = () => {
    if (!userProfile || !userProfile.exp || !userProfile.nextLevelExp) return 0;
    return (userProfile.exp / userProfile.nextLevelExp) * 100;
  };

  const handleOpenProfilePhotoPopup = () => {
    setPopError(undefined);
    setOpenedPopup("profile-photo");
  };
  const handleOpenInvitePopup = () => {
    setPopError(undefined);
    setOpenedPopup("invite");
  };
  const handleSendInvite = async () => {
    const response = await fetchNui("nui:sendInviteToPlayer", invitedTarget, {
      error: undefined,
    });
    setInvitedTarget(undefined);
    if (response.error) {
      setPopError(response.error);
    } else {
      setPopError(undefined);
      setOpenedPopup(undefined);
    }
  };

  const ReputationBar = () => (
    <div
      className="px-3 pt-3 pb-4 flex flex-col gap-1 rounded-b-lg"
      style={{ background: "rgba(16,16,16,.45)" }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-11 font-semibold">{t("reputation")}</h1>
        <h1 className="text-11 font-semibold">
          {userProfile.exp}/{userProfile.nextLevelExp}
        </h1>
      </div>
      <div className="h-1 bg-43 rounded relative overflow-hidden">
        <div
          className="absolute h-full bg-white rounded-r"
          style={{ width: `${calcReputationWidth()}%` }}
        ></div>
      </div>
    </div>
  );

  const UserProfile: React.FC<{ isLeader: boolean }> = ({ isLeader }) => (
    <button
      onClick={handleOpenProfilePhotoPopup}
      className="relative w-11 h-11 bg-white/10 rounded"
    >
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden rounded">
        <img
          src={`images/profiles/${userProfile.photo}.png`}
          alt="profile"
          className="w-full h-full"
        />
      </div>
      {isLeader && (
        <FaCrown className="absolute -top-1.5 -left-1.5 text-FFA944 z-10" />
      )}
    </button>
  );

  const InviteComponent: React.FC = () => (
    <div className="flex gap-1.5">
      {!currentLobby.id && <UserProfile isLeader={true} />}
      {Array(currentLobby.id ? 4 : 3)
        .fill(undefined)
        .map((_, i) => (
          <div key={i} className="relative w-11 h-11 bg-white/10 rounded">
            {currentLobby.id && currentLobby.members[i] ? (
              <>
                <button
                  onClick={
                    currentLobby.members[i]?.source == userProfile.source
                      ? handleOpenProfilePhotoPopup
                      : () => {}
                  }
                  className={classNames(
                    "relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg",
                    {
                      "cursor-default":
                        currentLobby.members[i]?.source != userProfile.source,
                    }
                  )}
                >
                  <img
                    src={`images/profiles/${currentLobby.members[i]?.photo}.png`}
                    alt="profile"
                    className="w-full h-full"
                  />
                </button>
                {currentLobby.members[i].source == currentLobby.leaderId && (
                  <FaCrown className="absolute -top-1.5 -left-1.5 text-FFA944 z-10" />
                )}
              </>
            ) : (
              <button
                onClick={handleOpenInvitePopup}
                className="relative w-full h-full flex items-center justify-center group"
              >
                <BsEnvelopeFill className="w-6 h-6 text-white brightness-50 group-hover:brightness-100 transition" />
              </button>
            )}
          </div>
        ))}
    </div>
  );

  const ProfileSection = () => (
    <>
      <div className="flex flex-col">
        <ProfileHeader />
        <ReputationBar />
      </div>
    </>
  );

  const ProfileHeader = () => (
    <div
      className="rounded-t-lg flex flex-col justify-center py-3 pl-3 pr-2"
      style={{
        background:
          "linear-gradient(89deg, rgba(255, 255, 255, 0.12) 0%, rgba(40, 40, 40, 0.12) 100%)",
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-semibold leading-4">
              {t("total_reputation")}
            </h1>
            <BiSolidNotepad className="w-5 h-5 min-w-5 min-h-5" />
          </div>
          <h1 className="font-semibold text-11">
            {t("level")} {userProfile.level}
          </h1>
        </div>
        <InviteComponent />
      </div>
    </div>
  );

  const GarbageInfo = () => (
    <div
      className="p-3 rounded-lg flex flex-col gap-3 h-full"
      style={{
        background:
          "linear-gradient(88.63deg, rgba(255, 255, 255, 0.12) 0%, rgba(40, 40, 40, 0.12) 100%)",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-semibold text-sm">{t("garbage_about")}</h1>
          <h1 className="text-xs font-semibold">{t("victor_goods")}</h1>
        </div>
        <FaAward className="w-6 h-6" />
      </div>
      <h1 className="text-11">{t("desc_garbage_about")}</h1>
      <div
        className="grayscale rounded-lg bg-cover bg-bottom h-40"
        style={{ backgroundImage: "url(images/info-bg.png)" }}
      ></div>
    </div>
  );

  const PopupContent = () =>
    openedPopup === "profile-photo" ? (
      <>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[1, 2, 3, 4, 5, 6, 7].map((v) => (
            <button
              key={v}
              onClick={() => setSelectedNewPhoto(v)}
              className={`w-16 h-16 border border-transparent rounded bg-white/15 overflow-hidden ${
                selectedNewPhoto === v ? "border-white" : ""
              }`}
            >
              <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <img src={`images/profiles/${v}.png`} alt="profile-photo" />
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSavePhoto}
            className="px-8 py-2 text-white rounded bg-green-600"
          >
            <h1 className="font-bold text-sm">{t("save")}</h1>
          </button>
        </div>
      </>
    ) : (
      <div className="flex flex-col gap-3">
        <input
          autoFocus
          className="rounded bg-transparent ring-0 outline-none p-1.5 border border-white/50 focus:border-white text-center text-sm font-semibold"
          placeholder={t("player_id") + "..."}
          type="number"
          value={invitedTarget}
          onChange={(e) => setInvitedTarget(parseInt(e.currentTarget.value))}
        />
        <button
          onClick={handleSendInvite}
          className="font-semibold text-sm text-FF4747 bg-FF4747/25 hover:bg-FF4747/30 transition p-1.5 rounded border border-FF4747"
        >
          {t("invite")}
        </button>
      </div>
    );

  const Header = () => (
    <div
      className="min-h-48 rounded-t-xl bg-cover relative"
      style={{
        backgroundImage: "url(images/app_delivery_bg.png)",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <div className="absolute bottom-1 right-4 flex items-center gap-2">
        <button
          onClick={() => setActiveTab("tasks")}
          className={classNames(
            "border-2 p-1 rounded bg-FF4747/40 shadow-lg hover:border-FF4747",
            {
              "border-FF4747": activeTab == "tasks",
              "border-FF4747/40": activeTab == "ranks",
            }
          )}
        >
          <IoMdHome className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveTab("ranks")}
          className={classNames(
            "border-2 p-1 rounded bg-FFA944/40 shadow-lg hover:border-FFA944",
            {
              "border-FFA944": activeTab == "ranks",
              "border-FFA944/40": activeTab == "tasks",
            }
          )}
        >
          <FaRankingStar className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const Graph = () => (
    <div className="rounded min-h-[81px] max-h-[81px] w-full overflow-hidden">
      <div
        className="w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url(images/graph.png)",
        }}
      ></div>
    </div>
  );

  return (
    <div className="relative flex flex-col gap-3 p-6 w-full h-full overflow-auto">
      <Header />
      <div className="flex gap-3 w-full h-full overflow-auto scrollbar-hide">
        <div className="w-2/5 h-full flex flex-col gap-3">
          <ProfileSection />
          <GarbageInfo />
          <Graph />
        </div>
        <div className="w-full h-full flex flex-col overflow-auto">
          {activeTab == "tasks" && <Tasks />}
          {activeTab == "ranks" && <Ranks />}
        </div>
      </div>
      <Popup
        isOpen={!!openedPopup}
        onClose={() => setOpenedPopup(undefined)}
        title={
          openedPopup &&
          (openedPopup === "invite" ? t("invite") : t("update_photo"))
        }
        error={popError}
      >
        <PopupContent />
      </Popup>
    </div>
  );
};

export default Garbage;
