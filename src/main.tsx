import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/outfit";

//extends the theme with Font Outfit from Google Fonts
const theme = extendTheme({
  fonts: {
    headings: `'Outfit Variable', sans-serif`,
    body: `'Outfit Variable', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
