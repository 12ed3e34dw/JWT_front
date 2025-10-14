

import "../Styles/Menu_Contacts/Menu_Contacts.css";
import {useRouter} from "next/navigation";
import Ico_Menu from "@/assets/320/Ico_Menu_Contacts.png";

import Image from "next/image";
export default function Home() {
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
    <div className="cont_inst" onClick={goInst}>

    </div>
<div className="cont_tg" onClick={goTg}>

</div>
            <div className="cont_tt" onClick={goTikTok}>

            </div>
            <div className="cont_in" onClick={goIn}>

            </div>


            <Image src={Ico_Menu} alt="Ico" className="Menu_Contacts" />
           <hr className="hr_1"/>
<div className="txt_Menu_Contacts_1">© 2025 LinguaStar</div>
<div className="txt_Menu_Contacts_2">Offer agreement | Privacy Policy | Use of cookies</div>
            <br/>
        </>
    )

}
