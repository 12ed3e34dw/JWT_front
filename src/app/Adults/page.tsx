'use client';
import Image from "next/image";
// @ts-ignore
import Logo from "@/assets/Logo_About.png";
import "@/Styles/Adults_style/Adults.css";
import { useTranslation } from "react-i18next";
import {useRouter} from "next/navigation";
import Ico2 from "@/assets/ico_2.png";
import Ico_Teachers from "@/assets/ico_teachers.png";
export default function Page() {
    const { t } = useTranslation();
    const router = useRouter();
    const goRegister = () => {
        router.push("/auth");
    };


    return (
        <div className="main">
            {/* Первый экран */}
            <div className="content-section">
                <div className="background"></div>
                <div className="txt_English">{t("ENGLISH")}</div>
                <div className="txt_For">{t("FOR")}</div>
                <div className="txt_Everyone">{t("EVERYONE!")}</div>
                <Image src={Logo} alt="Logo About" className="Logo_About"/>
                <div className="buttonGroup">
                    <button className="button">
                        <div className="txt_button" onClick={goRegister}>
                            {t("Get a free lesson")}
                        </div>
                    </button>
                    <div className="txt_credit_card">
                        {t("No credit card needed")}
                    </div>
                </div>
            </div>

            {/* Второй экран - Why Choose Us */}
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
                    </div>
                    <div className="block_program">
                        <div className="txt_19">02</div>
                        <div className="txt_20">{t("INDIVIDUAL PROGRAM")}</div>
                        <div className="txt_21">{t("Learn English anywhere and anytime -you will")}</div>
                        <div className="txt_22">{t("recieve a comfortable teacher and usefull")}</div>
                        <div className="txt_23">{t("materials for every lesson.")}</div>
                    </div>
                    <div className="block_perfect">
                        <div className="txt_24">03</div>
                        <div className="txt_25">{t("PERFECT ATMOSPHERE")}</div>
                        <div className="txt_26">{t("Interactive lessons won`t let you get bored,and")}</div>
                        <div className="txt_27">{t("teachers conduct lessons both in a business or in a")}</div>
                        <div className="txt_28">{t("playful way.")}</div>
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
                        {t("Extra course for new, which give basic phrases")}
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

                <button className="button_3">
                    <div className="txt_button_3 ">
                        {t("More courses")}
                    </div>
                </button>

                {/* Четвертый экран */}

                <div className="container_11">
                    <div className="txt_84">{t("TEST")}</div>
                    <div className="txt_85">{t("YOUR")}</div>
                    <div className="txt_85_1">{t("KNOWLEDGE")}</div>
                    <div className="txt_86">{t("Take a quick online English level language test - and recieve list of the teachers!")} </div>
                    <div className="Ico_cont">
                    <Image src={Ico2} alt="Ico" className="ICO_2" />
                    </div>
                    <button className="button_4">
                        <div className="txt_button_4 ">
                            {t("Take the test")}
                        </div>
                    </button>
                </div>
            </div>

            {/* Пятый экран */}

            <div className="container_12">
                <div className="txt_87">{t("OUR")}</div>
                <div className="txt_88">{t("TEACHERS")}</div>
                <div className="txt_89">{t("They came to us from all over the world to find you")}</div>


                <div className="cont_teachers">

                    <div className="cont_1">
                        <div className="Ico_teachers_cont">
                            <Image src={Ico_Teachers} alt="Ico" className="Ico_teachers" />
                        </div>
                        <div className="main_txt_cont_1">
                            Leon Kennedy
                        </div>
                        <div className="txt_1_cont">.</div>
                        <div className="txt_cont_1">
                            Education:
                        </div>
                        <div className="txt_1_cont_1">
                         Philologist,teacher
                        </div>
                        <div className="txt_2_cont">.</div>
                        <div className="txt_2_cont_1">
                            Work XP:
                        </div>
                        <div className="txt_3_cont_1">
                            5 yrs
                        </div>
                    </div>

                    <div className="cont_2">

                    </div>
                    <div className="cont_3">

                    </div>
                    <div className="cont_4">

                    </div>
                    <div className="cont_5">

                    </div>
                </div>
            </div>



            <div className="container_13">
                <div className="txt_90">{t("FAQ")}</div>
                <div className="txt_91">{t("Frequently asked questions")}</div>

                <div className="container_lesson_1">
                    <div className="txt_lesson_1">
                        {t("HOW LONG IS THE LESSON?")}
                    </div>
                </div>
                <div className="container_lesson_2">
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
                 REAL
             </div>
                <div className="txt_93">
                    FEEDBACKS
                </div>
                <div className="txt_94">
                    Real comments from real students
                </div>
            </div>

        </div>
    );
}
