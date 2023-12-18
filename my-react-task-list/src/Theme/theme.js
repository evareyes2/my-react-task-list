import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    light: {
      primary: '#3182CE',
      secondary: '#63B3ED',
    },
    dark: {
      primary: '#1A365D',
      secondary: '#2A4365',
    },
  },
});

export default theme;

