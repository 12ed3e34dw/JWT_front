'use client';
import Image from "next/image";
// @ts-ignore
import "../../Styles/Adults_styles/Adults_styles.css";
import { useTranslation } from "react-i18next";
import {useRouter} from "next/navigation";
import Menu_3 from "@/navigate/Menu_Contacts";
import Font_Adults from "@/assets/320/font_Adults.png";
import Menu_2 from "@/navigate/Menu_2";
import Ico_1 from "@/assets/320/Ico_Adults.png";
import Red_flag from "@/assets/320/Red_flag.png";
import Ico_teachers from "@/assets/320/Ico_teachers.png";
import Font_Faq from "../../assets/320/font_Faq.png";
import Ico_Freedbacks from "@/assets/320/Ico_Freedbacks.png";
import Menu from "@/navigate/Menu";
import {toast, Toaster} from "react-hot-toast";
export default function Page() {
    const { t } = useTranslation();
    const router = useRouter();
    const goRegister = () => {
        router.push("/auth");
    };

    const goTraining = () =>{
        router.push("/Training");
    }

    return (
        <div className="main">
            <Menu/>
            <Image src={Font_Adults} alt="Adults" className="Font_Adults"/>
            {/* Первый экран */}
            <div className="content-section">
                <div className="background"></div>
                <Image src={Ico_1} alt="Adults" className="Ico_1_1"/>
                <div className="txt_English">{t("ENGLISH")}</div>
                <div className="txt_For">{t("FOR")}</div>
                <div className="txt_Everyone">{t("EVERYONE!")}</div>
                  <Image src={Ico_1} alt="Adults" className="Ico_1"/>
                <div className="buttonGroup">
                    <button className="button">
                        <div className="txt_button" onClick={()=>toast.success("Поздравляем! Вы получили новое достижение!")}>
                            {t("Get a free lesson")}
                        </div>
                    </button>
                    <Toaster position="top-right" />
                    <div className="txt_credit_card">
                        {t("No credit card needed")}
                    </div>
                </div>
            </div>
            <Menu_2 />
            {/* Второй экран - Why Choose Us */}
            <div className="why-section">
                <Image src={Red_flag} alt="" className="Ico_Flag"/>
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

            {/*Для phone */}
            <div className="container_Answers_to_questions">

                <div className="cont_phone_1">{t("WHAT")}</div>
                <div className="cont_phone_2">{t("WE")}</div>
                <div className="cont_phone_2_1">{t("SOLVE?")}</div>
                <div className="cont_phone_3">{t("We give results")}</div>
                <div className="cont_phone_4">{t("EMIGRATION PROBLEM")}</div>
                <div className="cont_phone_5">{t("We will help you adapt to new reality")}</div>
                <div className="cont_phone_6">{t("without pain and tears")}</div>
                <Image src={Ico_1} alt="Adults" className="Ico_2"/>
                <div className="cont_phone_7">{t("TRAVEL AND ENJOY")}</div>
                <div className="cont_phone_8">{t("Basic vocabulary and phrases for")}</div>
                <div className="cont_phone_9">{t("communication in travel -feel confident")}</div>
                <div className="cont_phone_10">{t("in any place.")}</div>
                <Image src={Ico_1} alt="Adults" className="Ico_2"/>
                <div className="cont_phone_11">{t("WE CAN DO IT")}</div>
                <div className="cont_phone_12">{t("Preparation for interviews in a foreign")}</div>
                <div className="cont_phone_13">{t("language, writing business letters etc.")}</div>
                <Image src={Ico_1} alt="Adults" className="Ico_2"/>
            </div>


            {/* Третий экран - Statistics */}
            <div className="content-section">
                <div className="Statistics">
                    <div className="cont_statistics_1">


                        {/* Phone */}
                        <div className="statistics_1">{t("ABOUT")}</div>
                        <div className="statistics_2">{t("US")}</div>
                        <div className="statistics_3">{t("A few little numbers")}</div>

                        <div className="cont_stattistics1">
                        <div className="cont_statistics_1_txt">2023</div>
                        <div className="cont_statistics_1_txt_1">the best school of the year</div>
                        </div>
                    <div className="cont_statistics_2">
                        <div className="cont_statistics_2_txt">50K+</div>
                        <div className="cont_statistics_2_txt_2">happy pupils</div>
                    </div>
                    <div className="cont_statistics_3">
                        <div className="cont_statistics_3_txt">300+</div>
                        <div className="cont_statistics_3_txt_3">teachers in team</div>
                    </div>
                    <div className="cont_statistics_4">
                        <div className="cont_statistics_4_txt">AI</div>
                        <div className="cont_statistics_4_txt_4">unique education programm</div>
                    </div>
                    <div className="cont_statistics_5">
                        <div className="cont_statistics_5_txt">10</div>
                        <div className="cont_statistics_5_txt_5">years we shine in the world!</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container_2">
                <div className="txt_29">{t("SIGN UP")}</div>
                <div className="txt_30">{t("FOR A")}</div>
                <div className="txt_31">{t("FREE SESSION")}</div>
                <div className="txt_32">{t("Log in our platform,take a short test of your preferences and get the lesson")}</div>
                <div className="txt_33">{t("for free")}</div>
                <button className="button_2"  onClick={goRegister}>
                    <div className="txt_button_2">
                        {t("Let`s go!")}
                    </div>
                </button>
            </div>

            <div className="content_3">
                <div className="txt_34">{t("OUR")}</div>
                <div className="txt_35">{t("COURSES")}</div>
                <div className="txt_36">{t("The most popular")}</div>
            </div>
            <div className="course_sections">
                <div className="container_4">
                    <div className="txt_37">
                        {t("TOURIST ASSISTANT")}
                    </div>
                    <div className="txt_38">
                        {t("Extra course for new, which give basic phrases for unexpected situations")}
                    </div>
                    <div className="txt_39">
                        {t("-give preparation for the culture specifieces")}
                    </div>
                    <div className="txt_40">
                        {t("-make more confident")}
                    </div>
                    <div className="txt_41">
                        {t("-for B1-B2")}
                    </div>
                    <div className="txt_42">
                        {t("15 SEPTEMBER")}
                    </div>
                </div>
                <div className="container_5">
                    <div className="txt_43">
                        {t("TOURIST ASSISTANT")}
                    </div>
                    <div className="txt_44">
                        {t(" Extra course for new tourists, which give basic ")}
                    </div>
                    <div className="txt_45">
                        {t(" phrases for unexpected situations")}
                    </div>

                    <div className="txt_46">
                        {t("-give preparation for the culture specifieces")}
                    </div>
                    <div className="txt_47">
                        {t("-make more confident")}
                    </div>
                    <div className="txt_48">
                        {t("-for B1-B2")}
                    </div>
                    <div className="txt_49">
                        {t("15 SEPTEMBER")}
                    </div>
                </div>
                <div className="container_6">
                    <div className="txt_50">
                        {t("TOURIST ASSISTANT")}
                    </div>
                    <div className="txt_51">
                        {t("Extra course for new tourists, which give basic")}
                    </div>
                    <div className="txt_52">
                        {t("phrases for unexpected situations")}
                    </div>
                    <div className="txt_53">
                        {t("-give preparation for the culture specifieces")}
                    </div>
                    <div className="txt_54">
                        {t("-for B1-B2")}
                    </div>
                    <div className="txt_55">
                        {t("15 SEPTEMBER")}
                    </div>
                </div>
                <div className="container_7">
                    <div className="txt_57">{t("TOURIST ASSISTANT")}</div>
                    <div className="txt_58">{t("Extra course for new tourists, which give basic")}</div>
                    <div className="txt_59">{t("phrases for unexpected situations")}</div>
                    <div className="txt_60">{t("-give preparation for the culture specifieces")}</div>
                    <div className="txt_61">{t("-make more confident")}</div>
                    <div className="txt_62">{t("-for B1-B2")}</div>
                    <div className="txt_63">{t("15 SEPTEMBER")}</div>
                </div>

                <div className="container_8">
                    <div className="txt_64">{t("TOURIST ASSISTANT")}</div>
                    <div className="txt_65">{t("Extra course for new tourists, which give basic phrases for")}</div>
                    <div className="txt_66">{t("unexpected situations")}</div>
                    <div className="txt_67">{t("-give preparation for culture specifieces")}</div>
                    <div className="txt_68">{t("-make more confident")}</div>
                    <div className="txt_69">{t("-for B1-B2")}</div>
                    <div className="txt_70">{t("15 SEPTEMBER")}</div>
                </div>
                <div className="container_9">
                    <div className="txt_71">{t("TOURIST ASSISTANT")}</div>
                    <div className="txt_72">{t("Extra course for new, which give basic phrases")}</div>
                    <div className="txt_73">{t("-give preparation for the culture specifieces")}</div>
                    <div className="txt_74">{t("-make more confident")}</div>
                    <div className="txt_75">{t("-for B1-B2")}</div>
                    <div className="txt_76">{t("15 SEPTEMBER")}</div>
                </div>
                <div className="container_10">
                    <div className="txt_77">{t("TOURIST ASSISTANT")}</div>
                    <div className="txt_78">{t("Extra course for new tourists, which give basic")}</div>
                    <div className="txt_79">{t("phrases for unexpected situations")}</div>
                    <div className="txt_80">{t("-give preparation for the culture specifieces")}</div>
                    <div className="txt_81">{t("-make more confident")}</div>
                    <div className="txt_82">{t("-for B1-B2")}</div>
                    <div className="txt_83">{t("15 SEPTEMBER")}</div>
                </div>

                <button className="button_3" onClick={goTraining}>
                    <div className="txt_button_3 ">
                        {t("More courses")}
                    </div>
                </button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>







                <div className="container_11">
                    <div className="txt_84">{t("TEST")}</div>
                    <div className="txt_85">{t("YOUR")}</div>
                    <div className="txt_85_1">{t("KNOWLEDGE")}</div>
                    <div className="txt_86">{t("Take a quick online English level language test - and recieve list of the teachers!")} </div>
                    <div className="Ico_cont">
                        <Image src={Ico_1} alt="Adults" className="Ico_2"/>
                    </div>
                    <button className="button_4">
                        <div className="txt_button_4 ">
                            {t("Take the test")}
                        </div>
                    </button>
                </div>
            </div>

            <div className="container_copy_2">
                <div className="txt_29">{t("SIGN UP")}</div>
                <div className="txt_30">{t("FOR A")}</div>
                <div className="txt_31">{t("FREE SESSION")}</div>
                <div className="txt_32">{t("Log in our platform,take a short test of your preferences and get the lesson")}</div>
                <div className="txt_33">{t("for free")}</div>
                <button className="button_2"  onClick={goRegister}>
                    <div className="txt_button_2">
                        {t("Let`s go!")}
                    </div>
                </button>
            </div>

            {/* Пятый экран */}

            <div className="container_12">
                <Image src={Red_flag} alt="" className="Ico_Flag"/>
                <div className="txt_87">{t("OUR")}</div>
                <div className="txt_88">{t("TEACHERS")}</div>
                <div className="txt_89">{t("They came to us from all over the world to find you")}</div>


                <div className="cont_teachers">

                    <div className="cont_1">
                        <div className="Ico_teachers_cont">
                            <Image src={Ico_teachers} alt="Adults" className="Ico_teachers_1"/>
                        </div>
                        <div className="main_txt_cont_1">
                            {t(" Leon Kennedy ")}
                        </div>
                        <div className="txt_1_cont">.</div>
                        <div className="txt_cont_1">
                            {t("  Education: ")}
                        </div>
                        <div className="txt_1_cont_1">
                            {t(" Philologist,teacher ")}
                        </div>
                        <div className="txt_2_cont">.</div>
                        <div className="txt_2_cont_1">
                            {t("  Work XP: ")}
                        </div>
                        <div className="txt_3_cont_1">
                            {t("   5 yrs ")}
                        </div>
                        <br/>
                    </div>

                    <div className="cont_2">
                        <div className="Ico_teachers_cont">
                            <Image src={Ico_teachers} alt="Adults" className="Ico_teachers_1"/>
                        </div>
                        <div className="main_txt_cont_1">
                            {t(" Leon Kennedy ")}
                        </div>
                        <div className="txt_1_cont">.</div>
                        <div className="txt_cont_1">
                            {t("  Education: ")}
                        </div>
                        <div className="txt_1_cont_1">
                            {t(" Philologist,teacher ")}
                        </div>
                        <div className="txt_2_cont">.</div>
                        <div className="txt_2_cont_1">
                            {t("  Work XP: ")}
                        </div>
                        <div className="txt_3_cont_1">
                            {t("   5 yrs ")}
                        </div>
                        <br/>
                    </div>
                    <div className="cont_3">
                        <div className="Ico_teachers_cont">
                            <Image src={Ico_teachers} alt="Adults" className="Ico_teachers_1"/>
                        </div>
                        <div className="main_txt_cont_1">
                            {t(" Leon Kennedy ")}
                        </div>
                        <div className="txt_1_cont">.</div>
                        <div className="txt_cont_1">
                            {t("  Education: ")}
                        </div>
                        <div className="txt_1_cont_1">
                            {t(" Philologist,teacher ")}
                        </div>
                        <div className="txt_2_cont">.</div>
                        <div className="txt_2_cont_1">
                            {t("  Work XP: ")}
                        </div>
                        <div className="txt_3_cont_1">
                            {t("   5 yrs ")}
                        </div>
                        <br/>
                    </div>
                    <div className="cont_4">
                        <div className="Ico_teachers_cont">
                            <Image src={Ico_teachers} alt="Adults" className="Ico_teachers_1"/>
                        </div>
                        <div className="main_txt_cont_1">
                            {t(" Leon Kennedy ")}
                        </div>
                        <div className="txt_1_cont">.</div>
                        <div className="txt_cont_1">
                            {t("  Education: ")}
                        </div>
                        <div className="txt_1_cont_1">
                            {t(" Philologist,teacher ")}
                        </div>
                        <div className="txt_2_cont">.</div>
                        <div className="txt_2_cont_1">
                            {t("  Work XP: ")}
                        </div>
                        <div className="txt_3_cont_1">
                            {t("   5 yrs ")}
                        </div>
                        <br/>
                    </div>
                    <div className="cont_5">
                        <div className="Ico_teachers_cont">
                            <Image src={Ico_teachers} alt="Adults" className="Ico_teachers_1"/>
                        </div>
                        <div className="main_txt_cont_1">
                            {t(" Leon Kennedy ")}
                        </div>
                        <div className="txt_1_cont">.</div>
                        <div className="txt_cont_1">
                            {t("  Education: ")}
                        </div>
                        <div className="txt_1_cont_1">
                            {t(" Philologist,teacher ")}
                        </div>
                        <div className="txt_2_cont">.</div>
                        <div className="txt_2_cont_1">
                            {t("  Work XP: ")}
                        </div>
                        <div className="txt_3_cont_1">
                            {t("   5 yrs ")}
                        </div>
                        <br/>
                    </div>
                </div>
            </div>

<div className="container_txt">
    <div className="txt_90">{t("FAQ")}</div>
    <div className="txt_91">{t("Frequently asked questions")}</div>
</div>
            <Image src={Font_Faq} alt="" className="Font_Faq"/>
            <div className="container_13">
                <div className="container_lesson_1">
                    <div className="txt_lesson_1">
                        {t("HOW LONG IS THE LESSON?")}
                    </div>

                </div>
                <div className="container_lesson_2">

                    <div className="txt_lesson_2_copy">{t("WHAT WILL I GET AFTER TAKING THE COURSE?")}</div>

                    <div className="txt_lesson_2">
                        {t("HOW LONG IS THE LESSON?")}
                    </div>

                </div>
                <div className="container_lesson_3">
                    <div className="txt_lesson_3">
                        {t("HOW LONG IS THE LESSON?")}
                    </div>

                </div>
                <div className="container_lesson_4">
                    <div className="txt_lesson_4">
                        {t("HOW LONG IS THE LESSON?")}
                    </div>

                </div>
                <div className="container_lesson_5">
                    <div className="txt_lesson_5">
                        {t("HOW LONG IS THE LESSON?")}
                    </div>

                </div>
            </div>

            {/* 6 экран */}
            <div className="container_14">
             <div className="txt_92">
                 {t("   REAL ")}
             </div>
                <div className="txt_93">
                    {t("   FEEDBACKS ")}
                </div>
                <div className="txt_94">
                    {t("   Real comments from real students ")}
                </div>


                <div className="grid-section_dude">
                <div className="cont_6">
                    <Image src={Ico_Freedbacks} alt="Adults" className="Ico_Freedbacks"/>
                    <div className="txt_95">
                        {t("  DUDE2003 ")}
                    </div>
                    <div className="txt_96">
                        {t("  I learned everything in a week! Wow! I give ")}
                    </div>
                    <div className="txt_97">
                        {t("  these organisation 10 cats on guns of 10! ")}
                    </div>
                    <div className="txt_98">
                          23.08.2025
                    </div>
                </div>
                <div className="cont_7">
                    <Image src={Ico_Freedbacks} alt="Adults" className="Ico_Freedbacks"/>
                    <div className="txt_95">
                        {t("   DUDE2003 ")}
                    </div>
                    <div className="txt_96">
                        {t("    I learned everything in a week! Wow! I give ")}
                    </div>
                    <div className="txt_97">
                        {t("   these organisation 10 cats on guns of 10! ")}
                    </div>
                    <div className="txt_98">
                        23.08.2025
                    </div>
                </div>
                <div className="cont_8">
                    <Image src={Ico_Freedbacks} alt="Adults" className="Ico_Freedbacks"/>
                    <div className="txt_95">
                        {t("   DUDE2003 ")}
                    </div>
                    <div className="txt_96">
                        {t("    I learned everything in a week! Wow! I give ")}
                    </div>
                    <div className="txt_97">
                        {t("   these organisation 10 cats on guns of 10! ")}
                    </div>
                    <div className="txt_98">
                        23.08.2025
                    </div>
                </div>
                <div className="cont_9">
                    <Image src={Ico_Freedbacks} alt="Adults" className="Ico_Freedbacks"/>
                    <div className="txt_95">
                        {t("   DUDE2003 ")}
                    </div>
                    <div className="txt_96">
                        {t("    I learned everything in a week! Wow! I give ")}
                    </div>
                    <div className="txt_97">
                        {t("   these organisation 10 cats on guns of 10! ")}
                    </div>
                    <div className="txt_98">
                        23.08.2025
                    </div>
                </div>
                <div className="cont_10">
                    <Image src={Ico_Freedbacks} alt="Adults" className="Ico_Freedbacks"/>
                    <div className="txt_95">
                        {t("   DUDE2003 ")}
                    </div>
                    <div className="txt_96">
                        {t("    I learned everything in a week! Wow! I give ")}
                    </div>
                    <div className="txt_97">
                        {t("   these organisation 10 cats on guns of 10! ")}
                    </div>
                    <div className="txt_98">
                        23.08.2025
                    </div>
                </div>
                </div>
<Menu_3/>
            </div>

        </div>
    );
}
