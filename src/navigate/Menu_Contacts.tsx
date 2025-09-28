

import "@/Styles/Navigate_style/Menu_Contacts.css";
import Image from "next/image";
import Ico_Inst from "@/assets/ico_inst.png";
import Ico_Tg from "@/assets/ico_tg.png";
import Ico_tt from "@/assets/ico_tt.png";
import Ico_in from "@/assets/ico_in.png";
import Ico_Site from "@/assets/ico_LinguaStar.png";
export default function Home() {

    return (
        <>


    <div className="cont_inst">
        <Image src={Ico_Inst} alt="ico_inst" className="Img" />
    </div>
<div className="cont_tg">
    <Image src={Ico_Tg} alt="ico_tg" className="Img_tg" />
</div>
            <div className="cont_tt">
                <Image src={Ico_tt} alt="ico_tt" className="Img_tt" />
            </div>
            <div className="cont_in">
                <Image src={Ico_in} alt="ico_in" className="Img_in" />
            </div>

            <Image src={Ico_Site} alt="ico_site" className="Ico" />

           <hr className="hr_1"/>

<div className="txt_Menu_Contacts_1">© 2025 LinguaStar</div>
<div className="txt_Menu_Contacts_2">Offer agreement | Privacy Policy | Use of cookies</div>
            <br/>
        </>
    )

}
