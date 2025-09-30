'use client';

import Image from "next/image";
import Logo_2 from "@/assets/Logo.svg";
import ico_inst from "@/assets/ico_inst.png";
import ico_tg from "@/assets/ico_tg.png";
import ico_tt from "@/assets/ico_tt.png";
import ico_in from "@/assets/ico_in.png";
import "@/Styles/Navigate_style/Menu_3.css";
import {useRouter} from "next/navigation";
export default function Menu_3() {
    const router = useRouter();

    const goTikTok = () => {
        router.push("https://www.tiktok.com/ru-RU");
    };

    const goInst = () => {
        router.push("https://www.instagram.com");
    }

    const goTg = () => {
        router.push("https://web.telegram.org/k");
    }

    const goIn = () => {
        router.push("https://ua.linkedin.com");
    }



    return (
        <>
            <div className="container_social_networks">
                <Image src={Logo_2} alt="Ico" className="Logo_2" />

                <hr className="hr_11" />
                <div className="cont_inst" onClick={goInst}>
                    <Image src={ico_inst} alt="Ico" className="Ico_inst" />
                </div>
                <div className="cont_tg" onClick={goTg}>
                    <Image src={ico_tg} alt="Ico" className="Ico_tg" />
                </div>
                <div className="cont_tt" onClick={goTikTok}>
                    <Image src={ico_tt} alt="Ico" className="Ico_tt" />
                </div>
                <div className="cont_in" onClick={goIn}>
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

