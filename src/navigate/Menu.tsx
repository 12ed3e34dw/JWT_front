"use client";
import Auth from "@/app/auth/page";
import Burger_Menu from "@/assets/menu.svg";
// @ts-ignore
import '@/Styles/Menu_1/Menu.css';
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Ico_site from "@/assets/1024+/Ico_Web-site_Menu_Contacts.png"
import { changeLanguage } from "@/i18n/Logics";
import Icon_i18n from "@/assets/1024+/icon_i18n.png";
// @ts-ignore
import Image from "next/image";
import Menu_Burger from "@/assets/768/Menu_Main.png";
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



    // @ts-ignore
    return (
        <div className="container">

            <Image src={Ico_site} alt="Ico" className="Img_Logo" />
            <div className="navbar">
                {/* Бургер меню (только для мобилы) */}
                <div
                    className="Img_Menu_Burger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image src={Menu_Burger} alt="Ico" className="Menu_Burger" />
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
                <div className="container_Contacts_txt">
                {t("    Contacts ")}
                </div>
            </div>
            <div className="container_Practice" onClick={goPractice}>
                <div className="container_Practice_txt">
                {t("  Practice ")}
            </div>
            </div>
            <div className="container_About" onClick={goAbout}>
                <div className="container_About_txt">
                {t("  About ")}
                </div>
            </div>
            <div className="container_FAQ" onClick={goFaq}>
                <div className="container_FAQ_txt">
                {t("FAQ ")}
                </div>
            </div>

            <div
                className={`language-selector ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <div className="language-selected">{selected}
                    <Image
                        src={Icon_i18n}
                        className="Icon_i18n"
                        width={20}
                        height={20}
                        alt="icon"
                    /></div>
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
