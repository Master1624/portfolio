import { Button, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router";
import { navbarLinks } from "~/constants/links";
import { useTheme } from "~/contexts/themeContext";

export function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();

  const [homeButton, ...rest] = navbarLinks;

  const otherLanguage = Object.keys(i18n.options.resources || {}).find(
    (lng) => lng !== i18n.language
  );

  const handleLanguageChange = async () => {
    await navigate(pathname, { replace: true });
    i18n.changeLanguage(otherLanguage);
  };

  return (
    <Card className="fixed top-0 w-full z-10 dark:bg-slate-950! bg-slate-50!">
      <CardContent className="flex w-full justify-between items-center">
        <Button className=" dark:text-white!">
          <Link to={homeButton.path}>{t(homeButton.translationKey)}</Link>
        </Button>
        <div className="flex flex-row">
          {rest.map((link) => (
            <Button key={link.name} className=" dark:text-white!">
              <Link to={link.path}>{t(link.translationKey)}</Link>
            </Button>
          ))}
        </div>
        <div className="flex">
          <Button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-white"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
          <Button className=" dark:text-white!" onClick={handleLanguageChange}>
            {otherLanguage}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
