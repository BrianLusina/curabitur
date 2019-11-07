import React from "react";
import AppRouter from "./router/AppRouter";
import TranslationsProvider from "./components/translations/TranslationsProvider";
import "./App.css";

const App: React.FC = () => {
  return (
    <TranslationsProvider>
      <AppRouter />
    </TranslationsProvider>
  );
};

export default App;
