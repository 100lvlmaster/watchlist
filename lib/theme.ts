import { extendTheme, ThemeConfig } from "@chakra-ui/react";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
///
const theme = extendTheme({
  config,
  fonts: {
    heading: "Comfortaa",
    body: "Comfortaa",
  },
});
export default theme;
