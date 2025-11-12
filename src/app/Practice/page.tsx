'use client';
import "@/Styles/Practice_styles/Practice_styles.css";
import Menu_Contacts from "@/navigate/Menu_Contacts";
import Menu from "@/navigate/Menu";
import Image from "next/image";
import Birds from "@/assets/1024+/Birds.png";
import Food from "@/assets/1024+/Food.png";
import Weather from "@/assets/1024+/Weather.png";
import Wild_animals from "@/assets/1024+/Wild_animals.png";
import {router} from "next/client";
export default function Page() {

    const goPhrases = () => {
        router.push("/Phrases");
    };

    const goProgress = () => {
        router.push("");
    };

    const goCourses = () => {
        router.push("");
    };

    const goMaterial = () => {
        router.push("");
    };

    const goStatistic = () => {
        router.push("/Statistics_user");
    };

    return (
        <>
            <Menu/>
            <div className="grid-section-button">
        <div className="button_training">
            <div className="txt_button_training">
                Training
            </div>
        </div>

             <div className="button_My_progress">
                 <div className="txt_button_my_progress">
                     My progress
                 </div>
             </div>

                <div className="button_self_study_courses">
                    <div className="txt_button_self_study_courses">
                     Self-study courses
                    </div>
                </div>

                <div className="button_Material">
                    <div className="txt_button_Material">
                     Material
                    </div>
                </div>
            </div>

            <div className="container_Train">
    <div className="section_txt">
        <div className="section_txt_1">Train</div>
        <div className="section_txt_2">on your own</div>
    </div>
                <div className="section_txt_3">Focus on vocabulary and grammar with special exercises.</div>
            </div>

            <div className="grid-section-button-2">
                <div className="button_tests">
                    <div className="button_tests_txt">Tests</div>
                    </div>
                <div className="button_Phrases" onClick={goPhrases}>
                    <div className="button_Phrases_txt">Phrases</div>
                    </div>
            </div>


            <div className="container_Recent">
                <div className="container_Recent_txt_1">Recent tests:</div>
                <div className="container_Recent_txt_2">Wild animals</div>
                <div className="container_Recent_txt_3">100 words</div>
                <div className="container_Recent_txt_4">Number of repeats:</div>

                <div className="container_Recent_button">
                    <div className="container_Recent_button_txt">Start</div>
                </div>
            </div>

          <div className="button_Categories">

          </div>

            <div className="grid-section-button-lvl">
                <div className="button_lvl_a1_a2">
                    <div className="button_lvl_a1_a2_txt">A1-A2</div>
                </div>
                <div className="button_lvl_b1_b2">
                    <div className="button_lvl_b1_b2_lvl">B1-B2</div>
                </div>
                <div className="button_lvl_c1_c2">
                    <div className="button_lvl_c1_c2_txt">C1-C2</div>
                </div>
            </div>

            <div className="search">

            </div>


            <div className="grid-section-cont-practice">
                <div className="cont_practice_1">
                <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_2">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_3">
                    <div className="cont_practice_1_txt">10 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Birds} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Birds</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_4">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_5">
                    <div className="cont_practice_1_txt">18 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Weather} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Weather</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_6">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
            </div>

            <div className="grid-section-cont-practice-2">
                <div className="cont_practice_7">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_8">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_9">
                    <div className="cont_practice_1_txt">55 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Food} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Food</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_10">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_11">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_12">
                    <div className="cont_practice_1_txt">100 words</div>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
            </div>
            <div className="button_More_curses">
                <div className="button_More_curses_txt">More</div>
            </div>
            <Menu_Contacts/>
        </>
    )
}
