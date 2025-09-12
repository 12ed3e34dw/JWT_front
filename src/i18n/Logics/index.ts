"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { languages } from "../Logics"; // твой объект с переводами

const config = {
    SUPPORTED_LANGUAGES: Object.keys(languages),
    DEFAULT_LANGUAGE: "en",
    APP_LANGUAGE: "APP_LANGUAGE",
};

// Получаем язык устройства (браузера)
const getDeviceLanguage = (): string => {
    if (typeof navigator !== "undefined" && navigator.language) {
        return navigator.language.split("-")[0]; // например "en-US" → "en"
    }
    return config.DEFAULT_LANGUAGE;
};

const initialLang = config.SUPPORTED_LANGUAGES.includes(getDeviceLanguage())
    ? getDeviceLanguage()
    : config.DEFAULT_LANGUAGE;

// Инициализация i18next
i18next.use(initReactI18next).init({
    resources: languages,
    lng: initialLang,
    fallbackLng: config.DEFAULT_LANGUAGE,
    interpolation: {
        escapeValue: false,
    },
});

/**
 * Меняет язык приложения и сохраняет его в localStorage
 */
export const changeLanguage = async (lang: string): Promise<void> => {
    try {
        const selectedLanguage = config.SUPPORTED_LANGUAGES.includes(lang)
            ? lang
            : config.DEFAULT_LANGUAGE;

        await i18next.changeLanguage(selectedLanguage);
        if (typeof window !== "undefined") {
            localStorage.setItem(config.APP_LANGUAGE, selectedLanguage);
        }

        if (process.env.NODE_ENV === "development") {
            console.log(`Language changed to: ${selectedLanguage}`);
        }
    } catch (error) {
        console.error("Failed to change language", error);
    }
};

/**
 * Загружает язык из localStorage или из браузера
 */
export const loadLanguage = async (): Promise<void> => {
    try {
        let savedLanguage: string | null = null;

        if (typeof window !== "undefined") {
            savedLanguage = localStorage.getItem(config.APP_LANGUAGE);
        }

        if (savedLanguage && config.SUPPORTED_LANGUAGES.includes(savedLanguage)) {
            await i18next.changeLanguage(savedLanguage);

            if (process.env.NODE_ENV === "development") {
                console.log(`Loaded saved language: ${savedLanguage}`);
            }
        } else {
            const deviceLang = getDeviceLanguage();
            const preferredLang = config.SUPPORTED_LANGUAGES.includes(deviceLang)
                ? deviceLang
                : config.DEFAULT_LANGUAGE;

            await i18next.changeLanguage(preferredLang);

            if (process.env.NODE_ENV === "development") {
                console.log(`Loaded default language: ${preferredLang}`);
            }
        }
    } catch (error) {
        console.error("Failed to load language:", error);
        await i18next.changeLanguage(config.DEFAULT_LANGUAGE);
    }
};

export default i18next;

