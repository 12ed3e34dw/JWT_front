'use client';
import "@/Styles/Material_styles/Material.css";
import Menu from "@/navigate/Menu";
import {useRouter} from "next/navigation";
import Menu_Contacts from "@/navigate/Menu_Contacts";



export default function Page()
{
    const router = useRouter();

    const goTraining = () => {
        router.push("/Practice");
    };

    const goStatistic = () => {
        router.push("/Statistic");
    };
    return (
        <>
            <Menu/>
            <div className="grid-section-button_Material">
                <div className="button_training_Material" onClick={goTraining}>
                    <div className="txt_button_training_Material">
                        Training
                    </div>
                </div>

                <div className="button_My_progress_Material" onClick={goStatistic}>
                    <div className="txt_button_my_progress_Material">
                     Statistic
                    </div>
                </div>

                <div className="button_Material_Material">
                    <div className="txt_button_Material_Material">
                        Materials
                    </div>
                </div>
            </div>

             <div className="Main_container_Material">
                 <div className="Main_container_Material_txt_1">
                     START DAY FROM
                 </div>
                 <div className="Main_container_Material_txt_2">
                     FACTS
                 </div>
                 <div className="Main_container_Material_txt_3">
                     Read,read and again read
                 </div>
             </div>

            <div className="txt_Grammar">
                 Grammar
            </div>
            <div className="grid-section-cont_Material">
                <div className="cont_material_1">
                 <div className="cont_material_1_txt1">A,an and the</div>
                    <div className="cont_material_1_txt2">A1-A2</div>
                    <div className="cont_material_1_txt3">Read where you can use articles rightly.</div>
                    <div className="button_Url_Material">
                        <div className="button_Url_Material_txt">
                            read
                        </div>
                    </div>
                </div>
                <div className="cont_material_2">
                    <div className="cont_material_2_txt1">Used to</div>
                    <div className="cont_material_2_txt2">C1-c2</div>
                    <div className="cont_material_2_txt3">Read where you can use articles rightly.</div>
                    <div className="button_Url_Material">
                        <div className="button_Url_Material_txt">
                            read
                        </div>
                    </div>
                </div>


                <div className="cont_material_3">
                    <div className="cont_material_3_txt1">Conditionals</div>
                    <div className="cont_material_3_txt2">B1-B2</div>
                    <div className="cont_material_3_txt3">Learn how describe the result of something that might happen.</div>
                    <div className="button_Url_Material">
                        <div className="button_Url_Material_txt">
                            read
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-section-cont_Material_2">
                <div className="cont_material_1_2">
                    <div className="cont_material_1_2_txt1">Wild animals</div>
                    <div className="cont_material_1_2_txt2">C1-C2</div>
                    <div className="cont_material_1_2_txt3">Find out more about animals in the wild nature. </div>
                    <div className="button_Url_Material">
                        <div className="button_Url_Material_txt">
                            read
                        </div>
                    </div>
                </div>
                <div className="cont_material_2_2">
                    <div className="cont_material_2_2_txt1">Films</div>
                    <div className="cont_material_2_2_txt2">C1-C2</div>
                    <div className="cont_material_2_2_txt3">Top 10 films about language learning.</div>
                    <div className="button_Url_Material">
                        <div className="button_Url_Material_txt">
                            read
                        </div>
                    </div>
                </div>
                <div className="cont_material_3_2">
                    <div className="cont_material_3_2_txt1">Sonnets</div>
                    <div className="cont_material_3_2_txt2">A1-A2</div>
                    <div className="cont_material_3_2_txt3">Let’s dive into poetry.</div>
                    <div className="button_Url_Material">
                        <div className="button_Url_Material_txt">
                            read
                        </div>
                    </div>
                </div>
            </div>
            <Menu_Contacts/>
        </>
    )
}
