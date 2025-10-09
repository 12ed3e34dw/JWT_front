'use client';


import "@/Styles/Menu_3/Menu.css";
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


                <hr className="hr_11" />
                <div className="cont_inst" onClick={goInst}>

                </div>
                <div className="cont_tg" onClick={goTg}>

                </div>
                <div className="cont_tt" onClick={goTikTok}>

                </div>
                <div className="cont_in" onClick={goIn}>

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

