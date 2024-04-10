import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

// Define black-green color values
const blackGreen = {
  primary: "#96D500", // Black
  secondary: "#233A00", // Green
  fontDark: "#96D500",
  fontLight: "#f0f0f0",
  green: "#24ff4830",
  red: "#ff3131",
  orange: "#ff9318",
};

const commonComponentProps: Theme["components"] = {
  MuiTooltip: {
    defaultProps: {
      disableInteractive: true,
      style: {
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      },
    },
  },
  MuiButton: {
    defaultProps: {
      sx: {
        p: "12px 24px",
        borderRadius: "14px",
        color: blackGreen.fontLight, // White font color
        background: `linear-gradient(135deg, ${blackGreen.primary}, ${blackGreen.secondary})`, // Black-green gradient
        "&:hover": {
          background: `linear-gradient(135deg, ${blackGreen.secondary}, ${blackGreen.primary})`, // Reverse gradient on hover
        },
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      style: {
        borderRadius: "18px",
      },
    },
  },
  MuiDialog: {
    defaultProps: {
      PaperProps: {
        style: {
          padding: "12px",
          borderRadius: "24px",
          background: blackGreen.secondary, // Green background color
        },
      },
    },
  },
  MuiAvatar: {
    defaultProps: {
      style: {
        fontWeight: 500,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiInputBase-root": {
          borderRadius: "16px",
        },
      },
    },
  },
};

export const createCustomTheme = (primaryColor: string, backgroundColor = "#232e58"): Theme => {
  return createTheme({
    components: {
      ...commonComponentProps,
    },
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: backgroundColor,
      },
      warning: {
        main: blackGreen.orange,
      },
      error: {
        main: blackGreen.red,
      },
    },
  });
};

export type AppTheme = string;

type ThemeConfig = {
  [key: AppTheme]: {
    primaryColor: string;
    secondaryColor?: string;
  };
};

const themeConfig: ThemeConfig = {
  BlackGreen: {
    primaryColor: blackGreen.primary,
    secondaryColor: blackGreen.secondary,
  },
  Purple: {
    primaryColor: blackGreen.green,
  },
  // Add other themes here
};

export const Themes: { name: AppTheme; MuiTheme: Theme }[] = Object.entries(themeConfig).map(
  ([name, config]) => ({
    name: name as AppTheme,
    MuiTheme: createCustomTheme(config.primaryColor, config.secondaryColor),
  })
);
