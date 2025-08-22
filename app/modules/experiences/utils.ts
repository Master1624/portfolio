import { useTranslation } from "react-i18next";

export function formatStartEndDate(startDate: string, endDate: string) {
  const { i18n } = useTranslation();
  const newStartDate = new Date(startDate).toLocaleDateString(
    i18n.language === "en" ? "en-US" : "es-CO",
    {
      year: "numeric",
      month: "long",
    }
  );
  const newEndDate = new Date(endDate).toLocaleDateString(
    i18n.language === "en" ? "en-US" : "es-CO",
    {
      year: "numeric",
      month: "long",
    }
  );

  return `${newStartDate.charAt(0).toUpperCase() + newStartDate.slice(1)} - ${
    newEndDate.charAt(0).toUpperCase() + newEndDate.slice(1)
  }`;
}
