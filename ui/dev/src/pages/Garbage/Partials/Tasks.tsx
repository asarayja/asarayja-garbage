import useData from "@/hooks/useData";
import { fetchNui } from "@/utils/fetchNui";
import { useTranslation } from "react-i18next";
import { FaUserFriends, FaUser, FaUsers } from "react-icons/fa";

const Tasks = () => {
  const { Tasks, userProfile } = useData();
  const { t } = useTranslation();

  const handleStartTask = async (taskId: number) => {
    await fetchNui("nui:startLobbyWithTask", taskId, true);
  };
  const calcTaskExp = (exp: number) => {
    if (
      !userProfile ||
      typeof userProfile?.exp != "number" ||
      !userProfile.nextLevelExp
    )
      return 0;

    const currentExp = userProfile.exp;
    const taskExp = exp;
    const nextLevelExp = userProfile.nextLevelExp;
    return currentExp + taskExp >= nextLevelExp
      ? 100
      : ((currentExp + taskExp) / nextLevelExp) * 100;
  };

  const TasksComponent = () => {
    return Tasks.map((v, i) => (
      <div key={i} className="flex items-center h-14 rounded bg-white/10">
        <div className="relative w-14 h-14 min-w-14 min-h-14 rounded-l overflow-hidden flex items-center justify-center">
          <img
            className="w-14 h-14"
            src="images/gta_atlas.png"
            alt="gta_atlas"
          />
        </div>
        <div className="flex items-center gap-2 ml-6 mr-3 min-w-44">
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis mr-1">
              {v.title}
            </h1>
            <h1 className="font-semibold text-FF4747 text-sm">[1-{v.max_client}]</h1>
            {v.max_client == 1 ? (
              <FaUser className="text-FF4747 w-5 h-5" />
            ) : v.max_client == 2 ? (
              <FaUserFriends className="text-FF4747 w-5 h-5" />
            ) : (
              <FaUsers className="text-FF4747 w-5 h-5" />
            )}
          </div>
        </div>
        <div className="mr-3 bg-[#FF4747]/10 border-2 border-[#FF4747] w-8 min-w-8 h-8 flex items-center justify-center">
          <h1 className="text-sm font-bold text-[#FF4747]">{v.level}</h1>
        </div>
        <div className="bg-[#FF4747]/10 border-2 border-[#FF4747] w-40 min-w-20 2xl:min-w-40 h-8 flex items-center justify-center">
          <h1 className="text-sm font-medium text-[#FF4747]">
            {t("money_type")}
            {v.fee.toLocaleString()}
          </h1>
        </div>
        <div className="w-full h-8 mx-3 bg-white/10 border border-[#7c7c7c] flex items-center justify-center px-3">
          <div className="relative w-full h-1.5 bg-white/20 rounded-3xl overflow-hidden">
            <div
              className="absolute h-full bg-white rounded-3xl"
              style={{ width: calcTaskExp(v.exp) + "%" }}
            ></div>
          </div>
        </div>
        <button
          onClick={() => handleStartTask(v.unique_id)}
          className="mr-3 min-h-8 min-w-11 flex items-center justify-center border-2 border-[#FF4747] bg-[#FF4747]/25"
        >
          <img
            src="images/icons/location.svg"
            alt="location"
            className="w-4 h-4"
          />
        </button>
      </div>
    ));
  };

  return (
    <>
      <div
        className="rounded-t-lg flex p-3 text-xs"
        style={{
          background:
            "linear-gradient(89.95deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%)",
        }}
      >
        <h1 className="mr-16 ml-3">{t("maps")}</h1>
        <h1 className="mr-32">{t("title")}</h1>
        <h1 className="ml-2 mr-16">{t("level")}</h1>
        <h1 className="ml-1 mr-20">{t("rewards")}</h1>
        <h1>{t("rep")}</h1>
        <h1 className="ml-auto mr-7">{t("gps")}</h1>
      </div>
      <div className="w-full h-full overflow-auto flex flex-col gap-3 p-3 bg-white/5 rounded-b-lg">
        <TasksComponent />
      </div>
    </>
  );
};
export { Tasks };
