import { Button, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router";
import { navbarLinks } from "~/constants/links";

export function Topbar() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();

  const otherLanguage = Object.keys(i18n.options.resources || {}).find(
    (lng) => lng !== i18n.language
  );

  const handleLanguageChange = async () => {
    await navigate(pathname, { replace: true });
    i18n.changeLanguage(otherLanguage);
  };

  return (
    <Card className="fixed top-0 w-full z-20 bg-slate-950!">
      <CardContent className="flex w-full justify-between items-center">
        {navbarLinks.map((link) => (
          <Button
            key={link.name}
            className=" text-white!"
          >
            <Link to={link.path}>{t(link.translationKey)}</Link>
          </Button>
        ))}
        <>
          <Button onClick={handleLanguageChange}>{otherLanguage}</Button>
        </>
      </CardContent>
    </Card>
  );
}
