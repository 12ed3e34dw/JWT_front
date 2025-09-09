'use client';
import "@/Styles/Navigate_style/Menu_2.css"
import { useTranslation } from "react-i18next";
export default function Menu_2() {
    const { t } = useTranslation();
    return (
        <div className="menu_wrapper">
            <div className="container_Adults">
                <div className="txt_Adults">{t("Adults")}</div>
            </div>
            <div className="container_Companies">
                <div className="txt_Companies">{t("Companies")}</div>
            </div>
            <div className="container_Immigrants">
                <div className="txt_Immigrants">{t("Immigrants")}</div>
            </div>
            <div className="container_Kids">
                <div className="txt_Kids">{t("Kids")}</div>
            </div>
        </div>
    );
}
