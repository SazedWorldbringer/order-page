import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Roboto, ${base.fonts?.heading}`,
    body: `Space Mono, ${base.fonts?.body}`,
  },
});

export default theme;
