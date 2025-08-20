import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export function Welcome() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <div>
        <h1>{t("welcome.title")}</h1>
        <p>{t("welcome.description")}</p>
      </div>
      <div>
        <Button>
          <Link to="/about">{t('common.about')}</Link>
        </Button>
      </div>
    </div>
  );
}
