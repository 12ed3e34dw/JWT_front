'use client';
import "@/Styles/Practice_styles/Practice_styles.css";

export default function Page() {

    return (
        <>
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
                <div className="button_Phrases">
                    <div className="button_Phrases_txt">Phrases</div>
                    </div>
            </div>


            <div className="container_Recent">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>

                <div className="">
                    <div className=""></div>
                </div>
            </div>


        </>
    )
}
