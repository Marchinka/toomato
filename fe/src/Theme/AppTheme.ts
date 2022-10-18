import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { GREENS, NEUTRALS, REDS } from './Colors';

declare module '@mui/material/styles' {
  interface Theme {
    neutrals: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    neutrals?: {
      danger?: string;
    };
  }
}

const PT_SERIF_FONT = "'PT Serif', serif;";
const LATO_FONT = "'Lato', sans-serif;";

export const THEME = createTheme({
  typography: {
    fontFamily: LATO_FONT,
    h1: {
      color: NEUTRALS.B900,
      fontFamily: LATO_FONT
    },
    h2: {
      color: NEUTRALS.B900,
      fontFamily: LATO_FONT
    },
    h3: {
      color: NEUTRALS.B700,
      fontFamily: LATO_FONT
    },
    h4: {
      color: NEUTRALS.B700,
      fontFamily: LATO_FONT
    },
    h5: {
      color: NEUTRALS.B700,
      fontFamily: LATO_FONT
    },
    h6: {
      color: NEUTRALS.B600,
      fontFamily: LATO_FONT
    },
    body1: {
      color: NEUTRALS.B900,
      fontFamily: LATO_FONT
    },
    body2: {
      color: NEUTRALS.B600,
      fontFamily: LATO_FONT
    },
  },
  palette: {
    background: {
      default: NEUTRALS.B100
    },
    primary: {
      main: NEUTRALS.B900
    },
    secondary: {
      main: GREENS.G300,
    },
    error: {
      main: "#CD0E0E",
    },
    subtitle: {
      main: NEUTRALS.B600
    },
    text: {
      primary: NEUTRALS.B900,
      secondary: NEUTRALS.B600
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: "0px 4px 4px 0px #00000040"
        }
      }
    },
  },
} as any);