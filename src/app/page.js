"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enTranslaton from "../app/translations/en.json";
import Pokemon from "./components/pokemon/pokemon";
import { Counter } from "./store/slices/counter/Counter";

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
    <main className="mx-auto">
      <section className="h-screen bg-black flex justify-center flex-col items-center">
        {" "}
        <h1 className="text-white text-[2rem]">{t("Bienvenida")}</h1>
        <h2 className="text-white">{t("Welcome to React")}</h2>
        <p className="text-white">
          En esta seccion estamos trabajando con i18next para las traducciones
        </p>
      </section>
      <section className="h-screen bg-amber-100 flex justify-center flex-col items-center">
        <p className="text-black text-[2rem]">
          En esta seccion estamos trabajando con REDUX para el manejo del estado
        </p>
        <Counter />
      </section>
    </main>
  );
}
