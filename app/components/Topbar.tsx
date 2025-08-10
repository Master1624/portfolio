import { Button, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Topbar() {
  const { i18n } = useTranslation();

  const otherLanguage = Object.keys(i18n.options.resources || {}).find(
    (lng) => lng !== i18n.language
  );

  const handleLanguageChange = () => {
    i18n.changeLanguage(otherLanguage);
  };

  return (
    <Card className="fixed top-0 w-full z-10">
      <CardContent className="flex w-full justify-between items-center">
        <p>Topbar</p>
        <Button onClick={handleLanguageChange}>{otherLanguage}</Button>
      </CardContent>
    </Card>
  );
}
