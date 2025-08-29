import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CustomTextField } from "~/components/CustomTextField";
import { useTheme } from "~/contexts/themeContext";

export function ContactForm() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const NewTextField = CustomTextField(theme || "light");
  return (
    <div className="flex flex-col justify-items-center justify-center items-center w-full gap-4 p-8 shadow-xl/50 not-dark:shadow-slate-800/50 dark:inset-ring dark:inset-ring-slate-300/30 dark:shadow-slate-300 rounded-xl">
      <Typography variant="h5" className="font-bold!">
        {t("contact.title")}
      </Typography>
      <form action="" className="flex flex-col justify-center gap-4 w-full">
        <NewTextField label={t("contact.form.name")} />
        <NewTextField label={t("contact.form.email")} />
        <NewTextField label={t("contact.form.message")} rows={5} multiline />
        <Button
          variant="outlined"
          className="dark:text-slate-400! dark:border-slate-600! dark:hover:text-slate-100! dark:hover:border-slate-100!"
          type="submit"
        >
          {t("common.send")}
        </Button>
      </form>
    </div>
  );
}
