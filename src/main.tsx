// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

// Tilpasset fargepalett
const colors = {
  darkGray: {
    50: "#f7fafc",
    100: "#e2e8f0",
    200: "#cbd5e0",
    300: "#a0aec0",
    400: "#718096",
    500: "#4a5568",
    600: "#2d3748",
    700: "#1a202c", // Brukt som bakgrunnsfarge i Dark Mode
    800: "#171923",
    900: "#0f1116", // Nesten svart farge
  },
};

const config = {
  initialColorMode: "dark", // Endret til 'dark' for å starte i Dark Mode
  useSystemColorMode: false, // Ignorerer systemets innstilling
};

const theme = extendTheme({ config, colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
