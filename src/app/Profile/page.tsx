"use client";

import {useContext, useState} from "react";
import {AuthContext} from "@/contexts/AuthContext";
import "@/Styles/Profile_style/profile.css";
import Auth from "@/app/auth/page";
//Navigate
import Menu_Main from "@/navigate/Menu";
import Menu_2 from "@/navigate/Menu_3";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";
import Image from "next/image";
import def_foto from "@/assets/def_foto.png"
import ico_nation from "@/assets/ico_nation.png"
import ico_email from "@/assets/ico_email.png"
import ico_level from "@/assets/ico_level.png"
import Icon_i18n from "@/assets/icon_i18n.png";
import CheckoutButton from '@/app/Payment/page';

export default function Page() {
    const router = useRouter();
    // @ts-ignore
    const { user, logout, loading } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const [selected, setSelected] = useState("Beginner");
    const languages=["Beginner","Elementary","Pre-Intermediate","Intermediate","Upper-Intermediate","Advanced"]

    const handleSelect = (lang: string) => {
        setSelected(lang);
        setOpen(false);
    };



    return (
        <>
            <Menu_Main />
            <div style={{backgroundColor: '#121419', minHeight: '100vh', width: '100%', margin: 0, padding: 0,}}>

                <div className="container_1">
                    <div className="txt_1">SIGN UP  FOR A</div>
                    <div className="txt_2">FREE</div>
                    <div className="txt_3">SESSION</div>
                    <div className="txt_4">
                        Take a short test of your preferences and get the lesson for free
                    </div>
                    <div className="button_1"></div>
                </div>

                <div className="container_user_info">
                    <div className="Img_user">
                        <Image src={def_foto} alt="Logo" className="ico_user"/>
                    </div>
                    <div className="txt_user_name">{user?.name ?? 'Имя не загружено'}</div>
                    <div className="cont_user_email">
                        <Image src={ico_email} alt="Logo" className="ico_email"/>
                    </div>
                    <div className="txt_user_email">{user?.email ?? 'Email не загружен'}</div>
                    <div className="cont_user_nation">
                        <Image src={ico_nation} alt="Logo" className="ico_user"/>
                    </div>
                    <div className="txt_user_nation">UK</div>

                    <button className="button_edit_information">
                        <div className="txt_edit">Edit personal information</div>
                    </button>
                </div>

                <div className="container_level">
                    <div className="Img_level">
                        <Image src={ico_level} alt="Logo" className="ico_level"/>
                    </div>

                    <div className="txt_level">Level</div>

                    <div className="txt_5">
                        Changing the level affects the complexity of
                    </div>
                    <div className="txt_6">
                        tasks
                    </div>

                    <div
                        className={`language-selector ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <div className="language-selected_1">
                            <div className="txt_Level_1">
                                {selected}
                            </div>
                            <Image
                                src={Icon_i18n}
                                className="Icon_i18n_1"
                                width={20}
                                height={20}
                                alt="icon"
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

                    <button className="button_start">
                        <div className="txt_start">Start</div>
                    </button>
                </div>

                <div className="container_change_password">
                    <div className="txt_Change_password">Change password</div>
                </div>

                <div className="container_history">
                    <div className="txt_history">
                        History
                    </div>
                </div>

                <div className="container_courses">
                    <div className="txt_7">
                        KNOWLEDGE
                    </div>
                    <div className="txt_8">
                        IS THE BEST GIFT
                    </div>
                    <div className="txt_9">
                        Don`t wait for a reason to please someone dear
                    </div>
                    <div className="txt_10">
                        Number of lessons
                    </div>

                    <div className="section_button"></div>
                    <div className="txt_11">
                        Lessons
                    </div>

                    <div className="section_button_2"></div>

                    <div className="txt_12">
                        Certificate will come here
                    </div>

                    <div className="txt_13">Price:</div>

                    <button className="button_curse">
                        <div className="txt_button_curse">Choose gift</div>
                    </button>
                </div>
                <Menu_2/>
            </div>
        </>
    );
}
