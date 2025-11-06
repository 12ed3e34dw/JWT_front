"use client";

import "@/Styles/About_styles/About_styles.css";



import Menu_3 from "@/navigate/Menu_3";
import { useTranslation } from "react-i18next";
import Ico_Teachers from "@/assets/320/Ico_teachers.png";
import Image from "next/image";
import Menu_1 from "@/navigate/Menu";


export default function Page() {
    const { t } = useTranslation();


    const goRegister = () => {
        // твоя логика для кнопки
    };



    return (
        <>
            <Menu_1/>
            <div className="container_Main">
                <div className="grid-section_1">
                    <div className="container_sing_in">
                        <div className="cont_sing_in_txt">SING UP FOR A </div>
                        <div className="cont_sing_in_txt_1">FREE</div>
                        <div className="cont_sing_in_txt_2">SESSION</div>
                        <div className="cont_sing_in_txt_3">
                            Take a short test of your preferences and get the lesson for free
                        </div>
                        <div className="cont_sing_in_button" onClick={goRegister}>
                            <div className="txt_button_sing_in">Get the lesson</div>
                        </div>
                    </div>
                </div>

<div className="why-section">
                 <div className="txt_WHY">{t("WHY")}</div>
                 <div className="txt_CHOOSE">{t("CHOOSE")}</div>
                 <div className="txt_US">{t("US?")}</div>
                 <div className="txt">{t("We are comfortable")}</div>
                 <div className="reasons">
                     <div className="block_teachnologies">
                         <div className="txt_14">01</div>
                         <div className="txt_15">{t("MODERN TECHNOLOGIES")}</div>
                         <div className="txt_16">{t("tasks")}</div>
                         <div className="txt_17">{t("lessons")}</div>
                         <div className="txt_18">{t("sweeties")}</div>
                         <br/>
                     </div>
                     <div className="block_program">
                         <div className="txt_19">02</div>
                         <div className="txt_20">{t("INDIVIDUAL PROGRAM")}</div>
                         <div className="txt_21">{t("Learn English anywhere and anytime -you will")}</div>
                         <div className="txt_22">{t("recieve a comfortable teacher and usefull")}</div>
                         <div className="txt_23">{t("materials for every lesson.")}</div>
                         <br/>
                     </div>
                     <div className="block_perfect">
                         <div className="txt_24">03</div>
                         <div className="txt_25">{t("PERFECT ATMOSPHERE")}</div>
                         <div className="txt_26">{t("Interactive lessons won`t let you get bored,and")}</div>
                         <div className="txt_27">{t("teachers conduct lessons both in a business or in a")}</div>
                         <div className="txt_28">{t("playful way.")}</div>
                         <br/>
                     </div>
                 </div>
             </div>

             {/* Третий экран - Statistics */}
             <div className="content-section">
                 <div className="Statistics">
                     <div className="cont_statistics_1">
                         <div className="txt_st_1">2023</div>
                         <div className="txt_st_2">the best school of the year</div>
                     </div>
                     <div className="cont_statistics_2">
                         <div className="txt_st_3">50K+</div>
                         <div className="txt_st_4">happy pupils</div>
                     </div>
                     <div className="cont_statistics_3">
                         <div className="txt_st_5">300+</div>
                         <div className="txt_st_6">teachers in team</div>
                     </div>
                     <div className="cont_statistics_4">
                         <div className="txt_st_7">AI</div>
                         <div className="txt_st_8">unique education programm</div>
                     </div>
                     <div className="cont_statistics_5">
                         <div className="txt_st_9">10</div>
                         <div className="txt_st_10">years we shine in the world!</div>
                     </div>
                 </div>
             </div>
             <div className="container_12">
                 <div className="txt_87">{t("OUR")}</div>
                 <div className="txt_88">{t("TEAM")}</div>
                 <div className="txt_89">{t("We are open for cooperation")}</div>

                 <div className="grid-section_teachers">
                 <div className="cont_teachers">

                     <div className="item">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Adults" className="Ico_teachers_img"/>
                         </div>
                         <div className="main_txt_cont_1">
                             {t(" Leon Kennedy ")}
                         </div>
                         <div className="txt_1_cont">.</div>
                         <div className="txt_cont_1">
                             {t(" Education: ")}
                         </div>
                         <div className="txt_1_cont_1">
                             {t(" Philologist,teacher ")}
                         </div>
                         <div className="txt_2_cont">.</div>
                         <div className="txt_2_cont_1">
                             {t(" Work XP: ")}
                         </div>
                         <div className="txt_3_cont_1">
                             {t(" 5 yrs ")}
                         </div>
                         <br/>
                     </div>

                     <div className="item">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Adults" className="Ico_teachers_img"/>
                         </div>
                         <div className="main_txt_cont_1">
                             {t(" Leon Kennedy ")}
                         </div>
                         <div className="txt_1_cont">.</div>
                         <div className="txt_cont_1">
                             {t(" Education: ")}
                         </div>
                         <div className="txt_1_cont_1">
                             {t(" Philologist,teacher ")}
                         </div>
                         <div className="txt_2_cont">.</div>
                         <div className="txt_2_cont_1">
                             {t(" Work XP: ")}
                         </div>
                         <div className="txt_3_cont_1">
                             {t(" 5 yrs ")}
                         </div>
                         <br/>
                     </div>
                     <div className="item">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Adults" className="Ico_teachers_img"/>
                         </div>
                         <div className="main_txt_cont_1">
                             {t(" Leon Kennedy ")}
                         </div>
                         <div className="txt_1_cont">.</div>
                         <div className="txt_cont_1">
                             {t(" Education: ")}
                         </div>
                         <div className="txt_1_cont_1">
                             {t(" Philologist,teacher ")}
                         </div>
                         <div className="txt_2_cont">.</div>
                         <div className="txt_2_cont_1">
                             {t(" Work XP: ")}
                         </div>
                         <div className="txt_3_cont_1">
                             {t(" 5 yrs ")}
                         </div>
                         <br/>
                     </div>
                     <div className="item">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Adults" className="Ico_teachers_img"/>
                         </div>
                         <div className="main_txt_cont_1">
                             {t(" Leon Kennedy ")}
                         </div>
                         <div className="txt_1_cont">.</div>
                         <div className="txt_cont_1">
                             {t(" Education: ")}
                         </div>
                         <div className="txt_1_cont_1">
                             {t(" Philologist,teacher ")}
                         </div>
                         <div className="txt_2_cont">.</div>
                         <div className="txt_2_cont_1">
                             {t(" Work XP: ")}
                         </div>
                         <div className="txt_3_cont_1">
                             {t(" 5 yrs ")}
                         </div>
                         <br/>
                     </div>
                     <div className="item">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Adults" className="Ico_teachers_img"/>
                         </div>
                         <div className="main_txt_cont_1">
                             {t(" Leon Kennedy ")}
                         </div>
                         <div className="txt_1_cont">.</div>
                         <div className="txt_cont_1">
                             {t(" Education: ")}
                         </div>
                         <div className="txt_1_cont_1">
                             {t(" Philologist,teacher ")}
                         </div>
                         <div className="txt_2_cont">.</div>
                         <div className="txt_2_cont_1">
                             {t(" Work XP: ")}
                         </div>
                         <div className="txt_3_cont_1">
                             {t(" 5 yrs ")}
                         </div>
                         <br/>
                     </div>
                 </div>
             </div>
             </div>
         </div>
{/*<Menu_3/>*/}
        </>
    )
}
