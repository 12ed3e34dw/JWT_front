"use client";
import Auth from "@/app/auth/page";

import Image from "next/image";
// @ts-ignore
import Burger_Menu from "@/assets/menu.svg";
// @ts-ignore
import '@/Styles/Menu_1/Menu.css';
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Icon_i18n from "@/assets/icon_i18n.png";
import { changeLanguage } from "@/i18n/Logics";

export default function Home() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [selected, setSelected] = useState("ENG");
    const [open, setOpen] = useState(false);

    const languages = ["ENG", "UA","RU","DEU"];

    useEffect(() => {
        const map: Record<string, string> = { en: "ENG", ua: "UA", ru: "RU", deu: "DEU" };
        const current = map[i18n.language] || "ENG";
        setSelected(current);
    }, [i18n.language]);

    const handleSelect = (lang: string) => {
        setSelected(lang);
        setOpen(false);
        const map: Record<string, string> = { ENG: "en", UA: "ua", RU: "ru", DEU: "deu" };
        const code = map[lang] || "en";
        changeLanguage(code);
    };


    //Page Auth
    const goRegister = () => {
        router.push("/auth");
    };
    //Page Contacts_style
    const goContacts = () => {
        router.push("/Contacts");
    }

    //Page About
    const goAbout = () => {
        router.push("/About");
    }

    const goFaq = () => {
        router.push("/FAQ");
    }

    const goPractice = () => {
        router.push("/Practice");
    }

    //Update Page
    const goUpdatePage=()=>{
        router.push("/Adults");
    }

    //Navigate to localhost:3003
    const goToLocalhost = () => {
        window.location.href = "http://localhost:3003";
    }



    return (
        <div className="container">



            <div className="navbar">
                {/* Бургер меню (только для мобилы) */}
                <div
                    className="Img_Menu_Burger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                </div>

                <ul id="menu" hidden={!isOpen}>
                    <li onClick={goUpdatePage}>{t("Adults")}</li>
                    <li onClick={goContacts}>{t("Contacts")}</li>
                    <li onClick={goPractice}>{t("Practice")}</li>
                    <li onClick={goAbout}>{t("About")}</li>
                    <li onClick={goFaq}>{t("FAQ")}</li>
                </ul>
            </div>






            <div className="container_Contacts" onClick={goContacts}>
                {t("    Contacts ")}
            </div>
            <div className="container_Practice" onClick={goPractice}>
                {t("  Practice ")}
            </div>
            <div className="container_About" onClick={goAbout}>
                {t("  About ")}
            </div>
            <div className="container_FAQ" onClick={goFaq}>
                {t("    FAQ ")}
            </div>

            <div
                className={`language-selector ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <div className="language-selected">{selected}</div>
                <ul className="language-dropdown">
                    {languages
                        .filter((lang) => lang !== selected)
                        .map((lang) => (
                            <li key={lang} onClick={() => handleSelect(lang)}>
                                {lang}
                            </li>
                        ))}
                </ul>
            </div>


            {/* Кнопка логина */}
            <div className="container_login" onClick={goRegister}>
                <div className="txt_login">{t("Log in")}</div>
            </div>



        </div>
    );
}
