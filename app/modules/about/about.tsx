import { useTranslation } from "react-i18next";
import "./about.css";

export function About() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 items-center justify-center h-screen space-y-2 text-justify about-container">
      <div className="flex flex-col space-y-2 pl-4 pr-4">
        <h1>{t("about.title")}</h1>
        <p>{t("about.description")}</p>
      </div>
    </div>
  );
}
