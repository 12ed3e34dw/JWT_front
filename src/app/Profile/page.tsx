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
export default function Page() {
    // @ts-ignore
    const { user, logout, loading } = useContext(AuthContext);
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
                    <div className="button_edit_information">

                    </div>
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


                    <div className="button_start">

                    </div>

                </div>

                <div className="container_change_password">

                    <div className="txt_Change_password">  Change password</div>


                </div>

                <div className="container_history">

                    <div className="txt_history">
                        History
                    </div>
                </div>

                <div className="container_courses">
<div className="txt_7">

</div>
                </div>
                <Menu_2/>
            </div>
        </>
    );
}
