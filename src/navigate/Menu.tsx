"use client";
import Auth from "@/app/auth/page";

import Image from "next/image";
// @ts-ignore
import Burger_Menu from "@/assets/menu.svg";
// @ts-ignore
import Logo from "@/assets/Logo.svg";
import '@/Styles/Navigate_style/Menu.css';
import { useTranslation } from "react-i18next";
import {useState} from "react";
import { useRouter } from "next/navigation";
import Icon_i18n from "@/assets/icon_i18n.png";

export default function Home() {
    const router = useRouter();

    const { t } = useTranslation();
    const [selected, setSelected] = useState("ENG");
    const [open, setOpen] = useState(false);

    const languages = ["ENG", "UA","RU","DEU"];

    const handleSelect = (lang: string) => {
        setSelected(lang);
        setOpen(false);
    };


    //Page Auth
    const goRegister = () => {
        router.push("/auth");
    };
    //Page Contacts
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



    return (
        <div className="container">
            <Image src={Logo} alt="Logo" className="Logo_Img"  onClick={goUpdatePage}/>
            {/* Бургер меню (только для мобилы) */}
            <div className="Img_Menu_Burger" onClick={goUpdatePage}>
                <Image src={Burger_Menu} alt="Menu" className="Img" />
            </div>

            <div className="container_Contacts" onClick={goContacts}>
                Contacts
            </div>
            <div className="container_Practice" onClick={goPractice}>
                Practice
            </div>
            <div className="container_About" onClick={goAbout}>
                About
            </div>
            <div className="container_FAQ" onClick={goFaq}>
                FAQ
            </div>

            <div
                className={`language-selector ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <div className="language-selected">{selected}   <Image
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
