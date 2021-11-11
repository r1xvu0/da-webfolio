import { extendTheme } from "@chakra-ui/react";
import "@fontsource/antonio"
import "@fontsource/roboto-mono"
import "@fontsource/abel"

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    fonts: {
        heading: "Abel",
        body: "Abel"
    }
})

export default theme