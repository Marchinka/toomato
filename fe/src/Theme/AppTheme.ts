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
}