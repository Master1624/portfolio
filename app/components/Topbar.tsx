import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router";
import { navbarLinks } from "~/constants/links";
import { useLoader } from "~/contexts/loaderContext";
import { useTheme } from "~/contexts/themeContext";
import { useState } from "react";

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

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const TempNavbar = () => {
    const drawer = (
      <Box
        className="h-screen dark:bg-slate-900"
        sx={{ textAlign: "center", width: 250 }}
        onClick={handleDrawerToggle}
      >
        <Typography variant="h5" sx={{ my: 2 }} className="dark:text-white font-bold!">
          Personal Portfolio
        </Typography>
        <Divider />
        <List>
          <ListItem sx={{ justifyContent: "center" }}>
            <Link to={homeButton.path}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={t(homeButton.translationKey)}
                  className="dark:text-white"
                />
              </ListItemButton>
            </Link>
          </ListItem>
          {rest.map((link) => (
            <ListItem sx={{ justifyContent: "center" }} key={link.name}>
              <Link to={link.path}>
                <ListItemButton className="text-center">
                  <ListItemText
                    primary={t(link.translationKey)}
                    className="dark:text-white"
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <Drawer
        anchor="left"
        open={mobileOpen}
        ModalProps={{ keepMounted: true }}
        className="lg:hidden max-lg:block"
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    );
  };

  return (
    <Box className="flex">
      <AppBar component="nav">
        <Toolbar className="flex justify-between items-center dark:bg-slate-900! bg-slate-50!">
          <Button
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className="dark:text-white! lg:hidden!"
          >
            <MenuIcon />
          </Button>
          <Link to={homeButton.path} className="max-lg:hidden lg:block">
            <Button className=" dark:text-white!">
              <HomeIcon />
            </Button>
          </Link>
          <div className="flex flex-row w-screen justify-evenly max-lg:hidden">
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
              {theme === "light" ? (
                <DarkModeTwoToneIcon />
              ) : (
                <LightModeTwoToneIcon />
              )}
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
        </Toolbar>
      </AppBar>
      <nav>
        <TempNavbar />
      </nav>
    </Box>
  );
}
