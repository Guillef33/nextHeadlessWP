"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enTranslaton from "../app/translations/en.json";
import Pokemon from "./components/pokemon/pokemon";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: enTranslaton,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="max-w-screen-xl mx-auto">
      <h1>{t("Bienvenida")}</h1>
      <h2>{t("Welcome to React")}</h2>
      <Pokemon />
    </main>
  );
}
