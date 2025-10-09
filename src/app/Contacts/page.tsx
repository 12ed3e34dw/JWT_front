'use client';
 import "@/Styles/Contacts_styles/Contacts_styles.css";
import Menu_3 from "@/navigate/Menu_3";
import Menu_Contacts from "@/navigate/Menu_Contacts";
import Menu from "@/navigate/Menu";
import {useTranslation} from "react-i18next";

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <Menu/>
            <div className="container_Main">
                <div className="txt_1">{t("ASK")}</div>
                <div className="txt_2">&</div>
                <div className="txt_3">{t("ENJOY")}</div>
                <div className="txt_4">{t("Contact us in any convenient way")}</div>

                <div className="container-grid">
                    <div className="container_1">
                        <div className="txt_5">{t("WE ARE IN TOUCH:")}</div>
                        <div className="txt_number_phone">+380941245509</div>
                        <div className="txt_6">{t("Mon-Fri:11:00 to 20:00")}</div>
                        <div className="txt_7">{t("Saturday,Sunday: weekends")}</div>
                    </div>

                    <div className="container_2">
                        <div className="txt_8">{t("ALL THE TIME:")}</div>
                        <div className="txt_9">{t("our e-mail")}</div>
                        <div className="txt_10">linguaStar@gmail.com</div>
                    </div>
                </div>
            </div>
            <Menu_Contacts/>
        </>
    )
}
