import { experiences } from "~/constants/experiences";
import { Experience } from "./components/Experience";
import { useTranslation } from "react-i18next";

export function Experiences() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center justify-items-center h-screen space-y-2">
      <div className="fixed top-1/7">
        <h1 className="text-5xl font-bold text-black dark:text-white">{t('common.experiences')}</h1>
      </div>
      <div className="flex flex-row flex-wrap content-center justify-center gap-7 overflow-y-auto h-1/2 w-screen">
        {experiences.map((experience) => (
          <Experience key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
}
