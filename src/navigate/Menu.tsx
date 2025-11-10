// "use client";
// import Auth from "@/app/auth/page";
// import Burger_Menu from "@/assets/menu.svg";
// // @ts-ignore
// import '@/Styles/Menu_2/Menu_styles.css';
// import { useTranslation } from "react-i18next";
// import {useEffect, useState} from "react";
// import { useRouter } from "next/navigation";
// import Ico_site from "@/assets/1024+/Ico_Web-site_Menu_Contacts.png"
// import { changeLanguage } from "@/i18n/Logics";
// import Icon_i18n from "@/assets/1024+/icon_i18n.png";
// import Ico_site_320 from "@/assets/320/Ico_Web-Site.png"
// // @ts-ignore
// import Image from "next/image";
// import Menu_Burger from "@/assets/768/Menu_Main.png";
// export default function Home() {
//     const router = useRouter();
//     const [isOpen, setIsOpen] = useState(false);
//     const { t, i18n } = useTranslation();
//     const [selected, setSelected] = useState("ENG");
//     const [open, setOpen] = useState(false);
//
//     const languages = ["ENG", "UA","RU","DEU"];
//
//     useEffect(() => {
//         const map: Record<string, string> = { en: "ENG", ua: "UA", ru: "RU", deu: "DEU" };
//         const current = map[i18n.language] || "ENG";
//         setSelected(current);
//     }, [i18n.language]);
//
//     const handleSelect = (lang: string) => {
//         setSelected(lang);
//         setOpen(false);
//         const map: Record<string, string> = { ENG: "en", UA: "ua", RU: "ru", DEU: "deu" };
//         const code = map[lang] || "en";
//         changeLanguage(code);
//     };
//
//
//     //Page Auth
//     const goRegister = () => {
//         router.push("/auth");
//     };
//     //Page Contacts_style
//     const goContacts = () => {
//         router.push("/Contacts");
//     }
//
//     //Page About
//     const goAbout = () => {
//         router.push("/About");
//     }
//
//     const goFaq = () => {
//         router.push("/FAQ");
//     }
//
//     const goPractice = () => {
//         router.push("/Practice");
//     }
//
//     //Update Page
//     const goUpdatePage=()=>{
//         router.push("/Adults");
//     }
//
//     //Navigate_styles to localhost:3003
//     const goToLocalhost = () => {
//         window.location.href = "http://localhost:3003";
//     }
//
//
//
//     // @ts-ignore
//     return (
//         <div className="container">
//
//             <Image src={Ico_site} alt="Ico" className="Img_Logo" />
//             <Image src={Ico_site_320} alt="Ico" className="Img_Logo_1" />
//             <div className="navbar">
//                 {/* Бургер меню (только для мобилы) */}
//                 <div
//                     className="Img_Menu_Burger"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     <Image src={Menu_Burger} alt="Ico" className="Menu_Burger" />
//                 </div>
//
//                 <ul id="menu" hidden={!isOpen}>
//                     <li onClick={goUpdatePage}>{t("Adults")}</li>
//                     <li onClick={goContacts}>{t("Contacts")}</li>
//                     <li onClick={goPractice}>{t("Practice")}</li>
//                     <li onClick={goAbout}>{t("About")}</li>
//                     <li onClick={goFaq}>{t("FAQ")}</li>
//                 </ul>
//             </div>
//
//
//
//
//
//
//             <div className="container_Contacts" onClick={goContacts}>
//                 <div className="container_Contacts_txt">
//                 {t("    Contacts ")}
//                 </div>
//             </div>
//             <div className="container_Practice" onClick={goPractice}>
//                 <div className="container_Practice_txt">
//                 {t("  Practice ")}
//             </div>
//             </div>
//             <div className="container_About" onClick={goAbout}>
//                 <div className="container_About_txt">
//                 {t("  About ")}
//                 </div>
//             </div>
//             <div className="container_FAQ" onClick={goFaq}>
//                 <div className="container_FAQ_txt">
//                 {t("FAQ ")}
//                 </div>
//             </div>
//
//             <div
//                 className={`language-selector ${open ? "open" : ""}`}
//                 onClick={() => setOpen(!open)}
//             >
//                 <div className="language-selected">{selected}
//                     <Image
//                         src={Icon_i18n}
//                         className="Icon_i18n"
//                         width={20}
//                         height={20}
//                         alt="icon"
//                     /></div>
//                 <ul className="language-dropdown">
//                     {languages
//                         .filter((lang) => lang !== selected)
//                         .map((lang) => (
//                             <li key={lang} onClick={() => handleSelect(lang)}>
//                                 {lang}
//                             </li>
//                         ))}
//                 </ul>
//             </div>
//
//
//             {/* Кнопка логина */}
//             <div className="container_login" onClick={goRegister}>
//                 <div className="txt_login">{t("Log in")}</div>
//             </div>
//
//
//
//         </div>
//     );
// }




















































// "use client";
// import "@/Styles/Menu_2/Menu_styles.css";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState, useContext } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { changeLanguage } from "@/i18n/Logics";
// import { AuthContext } from "@/contexts/AuthContext"; // ✅ убедись, что путь правильный
//
// // Иконки / изображения
// import Ico_site from "@/assets/1024+/Ico_Web-site_Menu_Contacts.png";
// import Ico_site_320 from "@/assets/320/Ico_Web-Site.png";
// import Icon_i18n from "@/assets/1024+/icon_i18n.png";
// import Menu_Burger from "@/assets/768/Menu_Main.png";
//
//
//
// import Ico_users from "@/assets/320/user_ico_default.png";
//
// export default function Home() {
//     const router = useRouter();
//     const { t, i18n } = useTranslation();
//     const { user, logout, loading } = useContext(AuthContext); // ✅ доступ к состоянию авторизации
//
//     const [isOpen, setIsOpen] = useState(false);
//     const [selected, setSelected] = useState("ENG");
//     const [open, setOpen] = useState(false);
//
//     const languages = ["ENG", "UA", "RU", "DEU"];
//
//     useEffect(() => {
//         const map: Record<string, string> = {
//             en: "ENG",
//             ua: "UA",
//             ru: "RU",
//             deu: "DEU",
//         };
//         setSelected(map[i18n.language] || "ENG");
//     }, [i18n.language]);
//
//     const handleSelect = (lang: string) => {
//         setSelected(lang);
//         setOpen(false);
//         const map: Record<string, string> = {
//             ENG: "en",
//             UA: "ua",
//             RU: "ru",
//             DEU: "deu",
//         };
//         changeLanguage(map[lang] || "en");
//     };
//
//     // Навигация
//     const goPage = (path: string) => router.push(path);
//     const goRegister = () => router.push("/auth");
//
//     return (
//         <div className="container">
//             {/* Логотипы */}
//             <Image src={Ico_site} alt="Ico" className="Img_Logo" />
//             <Image src={Ico_site_320} alt="Ico" className="Img_Logo_1" />
//
//             {/* Навигация */}
//             <div className="navbar">
//                 <div className="Img_Menu_Burger" onClick={() => setIsOpen(!isOpen)}>
//                     <Image src={Menu_Burger} alt="menu" className="Menu_Burger" />
//
//
//
//                     {/*test menu burger*/}
//                     <label form="menu-toggle">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </label>
//
//
//                     <div className="slide-menu">
//                         <ul>
//                             <li>Adults</li>
//                             <li>Contacts</li>
//                             <li>Practice</li>
//                             <li>About</li>
//                             <li>FAQ</li>
//                         </ul>
//                     </div>
//
//
//
//                     <div className="overlay"></div>
//
//
//
//
//
//
//
//
//                 </div>
//
//                 <ul id="menu" hidden={!isOpen}>
//                     <li onClick={() => goPage("/Adults")}>{t("Adults")}</li>
//                     <li onClick={() => goPage("/Contacts")}>{t("Contacts")}</li>
//                     <li onClick={() => goPage("/Practice")}>{t("Practice")}</li>
//                     <li onClick={() => goPage("/About")}>{t("About")}</li>
//                     <li onClick={() => goPage("/FAQ")}>{t("FAQ")}</li>
//                 </ul>
//             </div>
//
//             {/* Языковое меню */}
//             <div
//                 className={`language-selector ${open ? "open" : ""}`}
//                 onClick={() => setOpen(!open)}
//             >
//                 <div className="language-selected">
//                     {selected}
//                     <Image
//                         src={Icon_i18n}
//                         className="Icon_i18n"
//                         width={20}
//                         height={20}
//                         alt="lang"
//                     />
//                 </div>
//                 <ul className="language-dropdown">
//                     {languages
//                         .filter((lang) => lang !== selected)
//                         .map((lang) => (
//                             <li key={lang} onClick={() => handleSelect(lang)}>
//                                 {lang}
//                             </li>
//                         ))}
//                 </ul>
//             </div>
//
//             {!loading && (
//                 <>
//                     {!user ? (
//                         // Если не авторизован
//                         <div className="container_login" onClick={goRegister}>
//                             <div className="txt_login">{t("Log in")}</div>
//                         </div>
//                     ) : (
//                         <div className="user-menu">
//                             <Image
//                                 src={user.avatar || Ico_users}
//                                 alt="user"
//                                 width={45}
//                                 height={45}
//                                 className="user-avatar"
//                             />
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// }












"use client";
//Test Styles Menu_styles Burgers
import "@/Styles/Copy_Menu/About_Menu_styles.css";
//
// import "@/Styles/Copy_Menu/Main_Menu.css";
//Main styles
// import "@/Styles/Menu_2/Menu_styles.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { changeLanguage } from "@/i18n/Logics";
import { AuthContext } from "@/contexts/AuthContext";
import Modal from "react-modal";
import Auth from "@/app/auth/page";
import Ico_site from "@/assets/1024+/Ico_Web-site_Menu_Contacts.png";
import Ico_site_320 from "@/assets/320/Ico_Web-Site.png";
import Icon_i18n from "@/assets/1024+/icon_i18n.png";
import Ico_users from "@/assets/320/user_ico_default.png";

const MenuBurger: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const { user, logout, loading } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState("ENG");
    const [langOpen, setLangOpen] = useState(false);
    const languages = ["ENG", "UA", "RU", "DEU"];



    useEffect(() => {
        const map: Record<string, string> = {
            en: "ENG",
            ua: "UA",
            ru: "RU",
            deu: "DEU",
        };
        setSelected(map[i18n.language] || "ENG");
    }, [i18n.language]);

    const handleSelect = (lang: string) => {
        setSelected(lang);
        setLangOpen(false);
        const map: Record<string, string> = {
            ENG: "en",
            UA: "ua",
            RU: "ru",
            DEU: "deu",
        };
        changeLanguage(map[lang] || "en");
    };

    const goPage = (path: string) => {
        router.push(path);
        setMenuOpen(false);
    };

    const goRegister = () => router.push("/auth");

    return (
        <header className="container">
            {/* Логотипы */}
            <Image src={Ico_site} alt="Logo" className="logo-desktop" />
            <Image src={Ico_site_320} alt="Logo" className="logo-mobile" />

            {/* --- Бургер --- */}
            <div
                className={`burger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Затемнение фона */}
            <div
                className={`overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Меню Burger */}
            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <div className="grid-button">
                <ul>
                    <li className="button_Adults_Menu" onClick={() => goPage("/Adults")}>{t("Adults")}</li>
                    <li className="button_Contacts_Menu" onClick={() => goPage("/Contacts")}>{t("Contacts")}</li>
                    <li  className="button_Practice_Menu" onClick={() => goPage("/Practice")}>{t("Practice")}</li>
                    <li  className="button_About_Menu" onClick={() => goPage("/About")}>{t("About")}</li>
                    <li  className="button_FAQ_Menu" onClick={() => goPage("/FAQ")}>{t("FAQ")}</li>
                </ul>
                </div>
            </nav>
            {/*Menu Main*/}
            <div className="grid-section_Menu">
                <div className="container_Contacts">
                                   <div className="container_Contacts_txt">
                                    {t("    Contacts ")}
                                  </div>
                               </div>
                            <div className="container_Practice">
                               <div className="container_Practice_txt">
                                {t("  Practice ")}
                          </div>
                           </div>
                         <div className="container_About">
                              <div className="container_About_txt">
                                 {t("  About ")}
                                </div>
                           </div>
                             <div className="container_FAQ">
                                <div className="container_FAQ_txt">
                               {t("FAQ ")}
                                </div>
                           </div>
            </div>
            <div
                className={`language-selector ${langOpen ? "open" : ""}`}
                onClick={() => setLangOpen(!langOpen)}
            >
                <div className="language-selected">
                    {selected}
                    <Image
                        src={Icon_i18n}
                        className="Icon_i18n"
                        width={20}
                        height={20}
                        alt="lang"
                    />
                </div>
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
            {/* Авторизация */}
            {!loading && (
                <>
                    {!user ? (
                        <div className="container_login" onClick={openModal}>
                            <div className="txt_login">{t("Log in")}</div>

                            <Auth  isOpen={isModalOpen} onClose={closeModal} >
                                <h2>Это модальное окно!</h2>
                                <p>Здесь может быть любой контент.</p>
                                <button onClick={closeModal}>Закрыть</button>
                            </Auth>
                        </div>
                    ) : (
                        <div className="user-menu">
                            <Image
                                src={user.avatar || Ico_users}
                                alt="user"
                                className="user-avatar"
                            />
                        </div>
                    )}
                </>
            )}
        </header>
    );
}


export default MenuBurger;






