import { useTranslation } from "react-i18next";
import "./about.css";

export function About() {
  const { t } = useTranslation();
  return (
    <div
      transition-style="in:custom:circle"
      className="flex flex-col items-center justify-center h-screen space-y-2 text-justify about-container"
    >
      <p>{t("about.title")}</p>
      <p>{t("about.description")}</p>
    </div>
  );
}
