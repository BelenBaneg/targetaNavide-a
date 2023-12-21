
import { extendTheme } from '@chakra-ui/react';

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      code: {
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      },
      '.Box': {
        width: "100%",
      },
      '@media screen and (min-width: 30em)': {
        '.Box': {
          width: '50%',
        },
      },
      '@media screen and (min-width: 48em)': {
        '.Box': {
          width: '25%',
        },
      },
    },
  },
};

export default extendTheme(theme);
