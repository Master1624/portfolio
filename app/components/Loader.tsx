import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Loader() {
  const { t } = useTranslation();
  return (
    <Card className="fixed inset-0 flex flex-col items-center justify-center z-20 gap-2 h-screen w-screen dark:bg-gray-950!">
      <div className="w-10 h-10 border-4 border-solid border-cyan-700 animate-spin rounded-xl" />
      <p className="dark:text-white">{t("common.loading")}...</p>
    </Card>
  );
}
