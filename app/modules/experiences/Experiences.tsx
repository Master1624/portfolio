import { useTranslation } from "react-i18next";

export function Experiences() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <div className="fixed top-1/5">
        <h1 className="text-5xl font-semibold text-black dark:text-white">{t('common.experiences')}</h1>
      </div>
    </div>
  );
}
