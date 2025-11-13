'use client';
import "@/Styles/Material_styles/Material.css";
import Menu from "@/navigate/Menu";
import {useRouter} from "next/navigation";



export default function Page()
{
    const router = useRouter();

    const goMaterial = () => {
        router.push("/Material");
    };

    const goStatistic = () => {
        router.push("/Statistic");
    };
    return (
        <>
            <Menu/>
            <div className="grid-section-button_Material">
                <div className="button_training_Material">
                    <div className="txt_button_training_Material">
                        Training
                    </div>
                </div>

                <div className="button_My_progress_Material" onClick={goStatistic}>
                    <div className="txt_button_my_progress_Material">
                        My progress
                    </div>
                </div>

                <div className="button_Material_Material"onClick={goMaterial}>
                    <div className="txt_button_Material_Material">
                        Material
                    </div>
                </div>
            </div>

             <div className="">
                 <div className="">
                     START DAY FROM
                 </div>
                 <div className="">
                     FACTS
                 </div>
                 <div className="">
                     Read,read and again read
                 </div>
             </div>

            <div className="">
                 Grammar
            </div>
            <div className="grid-section-cont_Material">
                <div className="cont_material_1">
                 <div className="">A,an and the</div>
                    <div className="">A1-A2</div>
                    <div className="">Read where you can use articles rightly.</div>
                    <div className="">
                        <div className="">
                            read
                        </div>
                    </div>
                </div>
                <div className="cont_material_2">
                    <div className="">Used to</div>
                    <div className="">C1-c2</div>
                    <div className="">Read where you can use articles rightly.</div>
                    <div className="">
                        <div className="">
                            read
                        </div>
                    </div>
                </div>


                <div className="cont_material_3">
                    <div className="">Conditionals</div>
                    <div className="">B1-B2</div>
                    <div className="">Learn how describe the result of something that might happen.</div>
                    <div className="">
                        <div className="">
                            read
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-section-cont_Material_2">
                <div className="cont_material_1_2">
                    <div className="">Wild animals</div>
                    <div className="">C1-C2</div>
                    <div className="">Find out more about animals in the wild nature. </div>
                    <div className="">
                        <div className="">
                            read
                        </div>
                    </div>
                </div>
                <div className="cont_material_2_2">
                    <div className="">Films</div>
                    <div className="">C1-C2</div>
                    <div className="">Top 10 films about language learning.</div>
                    <div className="">
                        <div className="">
                            read
                        </div>
                    </div>
                </div>
                <div className="cont_material_3_2">
                    <div className="">Sonnets</div>
                    <div className="">A1-A2</div>
                    <div className="">Let’s dive into poetry.</div>
                    <div className="">
                        <div className="">
                            read
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
