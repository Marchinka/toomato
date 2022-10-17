import { Theme } from "theme-ui";
import { NEUTRALS, GREENS } from "./Colors";

export const THEME: Theme = {
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#000',
      background: NEUTRALS.B100,
      primary: GREENS.G500,
      white: NEUTRALS.WHITE
    },
    buttons: {
      '&:hover': {
        cursor: 'pointer'
      },
      primary: {
        '&:hover': {
          cursor: 'pointer'
        }
      },
      secondary: {
        '&:hover': {
          cursor: 'pointer'
        }
      }, 
      transparent: {
        background: "transparent",
        borderRadius: "50%",
        color: NEUTRALS.B700,
        '&:hover': {
          cursor: 'pointer'
        }
      }
    }
}