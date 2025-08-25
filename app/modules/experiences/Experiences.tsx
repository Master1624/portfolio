import { experiences } from "~/constants/experiences";
import { Experience } from "./components/Experience";
import { useTranslation } from "react-i18next";

export function Experiences() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center justify-items-center md:h-screen space-y-2 @container/main">
      <div className="@max-[796px]/main:h-screen">
        <div className="sm:fixed sm:top-1/7 @max-[796px]/main:hidden @[796px]/main:left-0 @[796px]/main:w-screen">
          <h1 className="text-5xl font-bold text-black dark:text-white text-center">
            {t("common.experiences")}
          </h1>
        </div>
        <div className="flex flex-row flex-wrap content-center justify-center gap-7 overflow-y-auto @max-[796px]:mt-20 h-screen w-screen">
          {experiences.map((experience) => (
            <Experience key={experience.company} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
