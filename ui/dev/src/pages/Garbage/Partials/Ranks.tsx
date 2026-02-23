import useData from "@/hooks/useData";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

const Ranks = () => {
  const { Ranks } = useData();
  const { t } = useTranslation();

  const RanksComponent = () => {
    return Ranks.map((v, i) => (
      <div key={i} className="flex items-center h-14 rounded bg-white/10">
        <div className="relative w-14 h-14 min-w-14 min-h-14 rounded-l overflow-hidden flex items-center justify-center">
          <FaStar className="text-FFA944" />
        </div>
        <div className="flex items-center gap-2 ml-6 mr-2 w-48 relative">
          <div className="bg-white/10 relative w-9 h-9 flex items-center justify-center overflow-hidden rounded">
            <img
              src={`images/profiles/${v.photo}.png`}
              alt="profile"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {v.characterName}
          </h1>
        </div>
        <div className="mr-8 bg-[#FF4747]/10 border-2 border-[#FF4747] w-8 min-w-8 h-8 flex items-center justify-center">
          <h1 className="text-sm font-bold text-[#FF4747]">{v.level}</h1>
        </div>
        <div className="bg-[#FF4747]/10 border-2 border-[#FF4747] flex items-center justify-center min-h-8 h-8 px-2">
          <h1 className="text-sm font-medium text-[#FF4747]">{v.exp}</h1>
        </div>
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
        <h1 className="mr-9 ml-4">Rank</h1>
        <h1 className="mr-36 ml-3.5">{t("name")}</h1>
        <h1 className="ml-2 mr-10">{t("level")}</h1>
        <h1>{t("rep")}</h1>
      </div>
      <div className="w-full h-full overflow-auto flex flex-col gap-3 p-3 bg-white/5 rounded-b-lg">
        <RanksComponent />
      </div>
    </>
  );
};
export { Ranks };
