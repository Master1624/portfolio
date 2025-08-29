import { styled, TextField } from "@mui/material";

export const CustomTextField = (theme: string) => {
  const isDark = theme === "dark";
  return styled(TextField)({
    label: {
      color: isDark ? "#f1f5f9" : "#64748b",
    },
    "label.Mui-focused": {
      color: isDark ? "#f1f5f9" : "#64748b",
    },
    "& .MuiInputBase-input": {
      color: isDark ? "#f1f5f9" : "#64748b",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#64748b",
      },
      "&:hover fieldset": {
        borderColor: "#64748b",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#64748b",
      },
    },
  });
};
