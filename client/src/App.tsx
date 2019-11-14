import React from "react";
import AppRouter from "./router/AppRouter";
import TranslationsProvider from "Providers/translations/TranslationsProvider";
import ThemeProvider from "Providers/theme/ThemeProvider";
import "./App.css";

const App: React.FC = () => {
  return (
    <TranslationsProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </TranslationsProvider>
  );
};

export default App;
