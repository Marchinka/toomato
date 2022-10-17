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

const TITLE_FONT = "'PT Serif', serif;";
const BODY_FONT = "'Lato', sans-serif;";

export const THEME = createTheme({
  typography: {
    fontFamily: BODY_FONT,
    h1: {
      color: NEUTRALS.B900,
      fontFamily: TITLE_FONT
    },
    h2: {
      color: NEUTRALS.B900,
      fontFamily: TITLE_FONT
    },
    h3: {
      color: NEUTRALS.B700,
      fontFamily: TITLE_FONT
    },
    h4: {
      color: NEUTRALS.B700,
      fontFamily: TITLE_FONT
    },
    h5: {
      color: NEUTRALS.B700,
      fontFamily: BODY_FONT
    },
    h6: {
      color: NEUTRALS.B600,
      fontFamily: BODY_FONT
    },
    body1: {
      color: NEUTRALS.B900,
      fontFamily: BODY_FONT
    },
    body2: {
      color: NEUTRALS.B600,
      fontFamily: BODY_FONT
    },
  },
  palette: {
    background: {
      default: NEUTRALS.B100
    },
    primary: {
      main: REDS.R300
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
  neutrals: {}
} as any);