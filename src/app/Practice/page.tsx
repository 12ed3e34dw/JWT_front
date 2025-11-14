'use client';
import "@/Styles/Practice_styles/Practice_styles.css";
import Menu_Contacts from "@/navigate/Menu_Contacts";
import Menu from "@/navigate/Menu";
import Image from "next/image";
import Birds from "@/assets/1024+/Birds.png";
import Food from "@/assets/1024+/Food.png";
import Weather from "@/assets/1024+/Weather.png";
import Wild_animals from "@/assets/1024+/Wild_animals.png";
import {useRouter} from "next/navigation";
import Material from "@/app/Material/page";
import Red_Flag from "@/assets/1024+/red_Flag.png";
import Yellow_Flag from "@/assets/1024+/yellow_Flag.png";
import Green_Flag from "@/assets/1024+/green_Flag.png";
import Icon_i18n from "@/assets/1024+/icon_i18n.png";
import Search_Ico from "@/assets/1024+/Search_Ico.png";
import {useState} from "react";
export default function Page() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const options = ["Vegetables", "Weather", "Fruits", "Animals"];
    const goPhrases = () => {
        router.push("/Phrases");
    };

    const goMaterial = () => {
        router.push("/Material");
    };

    const goStatistic = () => {
        router.push("/Statistic");
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

             <div className="button_My_progress" onClick={goStatistic}>
                 <div className="txt_button_my_progress">
                    Statistic
                 </div>
             </div>

                <div className="button_Material"onClick={goMaterial}>
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

                <div className="container_Recent1">
                <div className="container_Recent_txt_1">Recent tests:</div>
                <div className="container_Recent_txt_2">Wild animals</div>
                    <Image
                        src={Icon_i18n}
                        className="Icon_i18n_Practice1"
                        width={20}
                        height={20}
                        alt="cat"
                    />
                </div>


                <div className="container_Recent_txt_3">100 words</div>
                <div className="container_Recent_txt_4">Number of repeats:</div>

                <div className="container_Recent_button">
                    <div className="container_Recent_button_txt">Start</div>
                </div>
            </div>

            <div className="categories-wrapper">
                <div
                    className="button_Categories"
                    onClick={() => setOpen(!open)}
                >
                    <div className="button_Categories_txt">Categories</div>
                    <Image
                        src={Icon_i18n}
                        className="Icon_i18n_Practice"
                        width={20}
                        height={20}
                        alt="cat"
                    />
                </div>

                {/* Выпадающее меню */}
                <ul className={`categories-dropdown ${open ? "open" : ""}`}>
                    {options.map((opt) => (
                        <li className="button_Categories_txt" key = {opt}>{opt}</li>
                    ))}
                </ul>
            </div>

            <div className="grid-section-button-lvl">
                <div className="button_lvl_a1_a2">
                    <Image src={Green_Flag} alt="Practice" className="Ico_Green_Flag"/>
                    <div className="button_lvl_a1_a2_txt">A1-A2</div>
                </div>
                <div className="button_lvl_b1_b2">
                    <Image src={Yellow_Flag} alt="Practice" className="Ico_Yellow_Flag"/>
                    <div className="button_lvl_b1_b2_lvl">B1-B2</div>
                </div>
                <div className="button_lvl_c1_c2">
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="button_lvl_c1_c2_txt">C1-C2</div>
                </div>
            </div>


                <div className="search">
                    <input
                        type="text"
                        className="search_input"
                        placeholder="Find topic"
                    />
                    <Image
                        src={Search_Ico}
                        alt="search"
                        className="Search_Ico"
                    />
                </div>


            <div className="grid-section-cont-practice">
                <div className="cont_practice_1">
                <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_2">
                    <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_3">
                    <div className="cont_practice_1_txt">10 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Birds} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Birds</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_4">
                    <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_5">
                    <div className="cont_practice_1_txt">18 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Weather} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Weather</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_6">
                    <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
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
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_8">
                    <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_9">
                    <div className="cont_practice_1_txt">55 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Food} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Food</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_10">
                    <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_11">
                    <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
                    <div className="cont_practice_1_txt_2">C1-C2</div>
                    <Image src={Wild_animals} alt="Adults" className="Ico"/>
                    <div className="cont_practice_1_txt_3">Wild animals</div>
                    <div className="cont_practice_1_button">
                        <div className="cont_practice_1_button_txt">Practice</div>
                    </div>
                </div>
                <div className="cont_practice_12">
                    <div className="cont_practice_1_txt">100 words</div>
                    <Image src={Red_Flag} alt="Practice" className="Ico_Red_Flag"/>
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
