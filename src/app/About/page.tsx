'use client';
import "@/Styles/About_style/About_style.css";
import Menu from "@/navigate/Menu";
import Menu_3 from "@/navigate/Menu_3";
import Image from "next/image";
import Ico_Teachers from "@/assets/ico_teachers.png";
import {useTranslation} from "react-i18next";

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
<Menu/>
         <div className="container_Main">

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
                     <div className="txt_1">2023</div>
                     <div className="txt_2">{t("the best school of the")}</div>
                     <div className="txt_3">{t("year")}</div>
                     <div className="txt_4">50K+</div>
                     <div className="txt_5">{t("happy pupils")}</div>
                     <div className="txt_6">300+</div>
                     <div className="txt_7">{t("teachers in team")}</div>
                     <div className="txt_8">AI</div>
                     <div className="txt_9">{t("unique education")}</div>
                     <div className="txt_10">{t("programm")}</div>
                     <div className="txt_11">10</div>
                     <div className="txt_12">{t("years we shine in the")}</div>
                     <div className="txt_13">{t("world!")}</div>
                     <div className="hr_1"></div>
                     <div className="hr_2"></div>
                     <div className="hr_3"></div>
                     <div className="hr_4"></div>
                 </div>
             </div>
             <div className="container_12">
                 <div className="txt_87">{t("OUR")}</div>
                 <div className="txt_88">{t("TEAM")}</div>
                 <div className="txt_89">{t("We are open for cooperation")}</div>


                 <div className="cont_teachers">

                     <div className="cont_1">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Ico" className="Ico_teachers" />
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

                     <div className="cont_2">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Ico" className="Ico_teachers" />
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
                     <div className="cont_3">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Ico" className="Ico_teachers" />
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
                     <div className="cont_4">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Ico" className="Ico_teachers" />
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
                     <div className="cont_5">
                         <div className="Ico_teachers_cont">
                             <Image src={Ico_Teachers} alt="Ico" className="Ico_teachers" />
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
<Menu_3/>
        </>
    )
}
