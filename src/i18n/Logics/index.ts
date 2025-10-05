"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Импорт JSON переводов
import en from "@/i18n/languages/en.json";
import ru from "@/i18n/languages/ru.json";
import ua from "@/i18n/languages/ua.json";
import deu from "@/i18n/languages/deu.json";

export const resources = {
    en: { translation: en },
    ru: { translation: ru },
    ua: { translation: ua },
    deu: { translation: deu },
};

let initialized = false;

export function initI18n(defaultLng: string = "en") {
    if (initialized) return i18next;

    const savedLng = typeof window !== "undefined" ? localStorage.getItem("lng") : null;
    const lng = savedLng || defaultLng;

    i18next.use(initReactI18next).init({
        resources,
        lng,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });

    initialized = true;
    return i18next;
}

export function changeLanguage(lng: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("lng", lng);
    }
    return i18next.changeLanguage(lng);
}

export default i18next;
