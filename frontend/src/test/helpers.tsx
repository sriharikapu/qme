import React from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {},
    de: {}
  }
});

export const LanguageProvider: React.FC = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
