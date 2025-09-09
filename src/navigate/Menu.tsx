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
export default function Home() {
    const router = useRouter();

    const { t } = useTranslation();
    const [selected, setSelected] = useState("ENG");
    const [open, setOpen] = useState(false);

    const languages = ["ENG", "UA", "DEU"];

    const handleSelect = (lang: string) => {
        setSelected(lang);
        setOpen(false);
    };
    const goRegister = () => {
        router.push("/auth");
    };


    return (
        <div className="container">
            <Image src={Logo} alt="Logo" className="Logo_Img" />

            {/* Кнопка логина */}
            <div className="container_login" onClick={goRegister}>
                <div className="txt_login">{t("Log in")}</div>
            </div>

            {/* Бургер меню (только для мобилы) */}
            <div className="Img_Menu_Burger">
                <Image src={Burger_Menu} alt="Menu" className="Img" />
            </div>

            <div
                className={`language-selector ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
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

        </div>
    );
}
