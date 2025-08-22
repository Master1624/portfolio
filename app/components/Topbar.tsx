import { Button, Card, CardContent } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router";
import { navbarLinks } from "~/constants/links";
import { useLoader } from "~/contexts/loaderContext";
import { useTheme } from "~/contexts/themeContext";

export function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();

  const { triggerLoading } = useLoader();

  const [homeButton, ...rest] = navbarLinks;

  const otherLanguage = Object.keys(i18n.options.resources || {}).find(
    (lng) => lng !== i18n.language
  );

  const handleLanguageChange = async () => {
    await navigate(pathname, {
      replace: true,
      state: { language: otherLanguage },
    });
    i18n.changeLanguage(otherLanguage);
  };

  return (
    <Card className="fixed top-0 w-full z-10 dark:bg-slate-900! bg-slate-50!">
      <CardContent className="flex w-full justify-between items-center">
        <Link to={homeButton.path}>
          <Button className=" dark:text-white!">
            <HomeIcon />
          </Button>
        </Link>
        <div className="flex flex-row w-screen justify-evenly">
          {rest.map((link) => (
            <Button key={link.name} className=" dark:text-white! font-bold!">
              <Link to={link.path}>{t(link.translationKey)}</Link>
            </Button>
          ))}
        </div>
        <div className="flex">
          <Button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-white!"
          >
            {theme === "light" ? <DarkModeTwoToneIcon /> : <LightModeTwoToneIcon />}
          </Button>
          <Button
            className=" dark:text-white! font-bold!"
            onClick={() => {
              triggerLoading();
              handleLanguageChange();
            }}
          >
            {otherLanguage}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
