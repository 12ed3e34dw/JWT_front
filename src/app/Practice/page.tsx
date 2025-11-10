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

            </div>
        </>
    )
}
