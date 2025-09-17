'use client';

import Image from "next/image";
import Logo_2 from "@/assets/Logo.svg";
import ico_inst from "@/assets/ico_inst.png";
import ico_tg from "@/assets/ico_tg.png";
import ico_tt from "@/assets/ico_tt.png";
import ico_in from "@/assets/ico_in.png";
import "@/Styles/Navigate_style/Menu_3.css";
export default function Menu_3() {
    return (
        <>
            <div className="container_social_networks">
                <Image src={Logo_2} alt="Ico" className="Logo_2" />

                <hr className="hr_11" />
                <div className="cont_inst">
                    <Image src={ico_inst} alt="Ico" className="Ico_inst" />
                </div>
                <div className="cont_tg">
                    <Image src={ico_tg} alt="Ico" className="Ico_tg" />
                </div>
                <div className="cont_tt">
                    <Image src={ico_tt} alt="Ico" className="Ico_tt" />
                </div>
                <div className="cont_in">
                    <Image src={ico_in} alt="Ico" className="Ico_in" />
                </div>
            </div>

            <div className="txt_99">© 2025 LinguaStar</div>
            <div className="txt_100">
                Offer agreement | Privacy Policy | Use of cookies
            </div>
            <div className="br_1"></div>
        </>
    )
}

