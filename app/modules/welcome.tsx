import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Welcome() {
  const { t } = useTranslation();
  return (
    <div
      transition-style="in:circle:bottom-right"
      className="flex flex-col items-center justify-center h-screen space-y-2"
    >
      <div>
        <h1>{t("welcome.title")}</h1>
        <p>{t("welcome.description")}</p>
      </div>
      <div>
        <Button>Botón 1</Button>
        <Button>Botón 2</Button>
      </div>
    </div>
  );
}
