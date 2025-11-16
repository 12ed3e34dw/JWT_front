'use client';
import "@/Styles/FAQ_styles/Faq_styles.css";
import Menu_Contacts from "@/navigate/Menu_Contacts";
import Menu from "@/navigate/Menu";
import Image from "next/image";
import Ico_telegram from "@/assets/1024+/telegram_Ico_faq.png";

export default function Page() {

    return (
        <>
            <Menu/>
           <div className="grid-section-Text">
               <div className="Txt_Ask">ASK</div>
               <div className="Txt_Your">YOUR</div>
               <div className="Txt_question">QUESTION</div>
           </div>
            <div className="Txt_1">Get your question answered within the day</div>
            <div className="button_Telegram">
                <Image src={Ico_telegram} alt="Adults" className="Ico_telegram_faq"/>
                <div className="button_Telegram_txt">Telegram chat</div>
            </div>

            <div className="block_1_Faq">
                <div className="block_1_Faq_txt">Will I receive a certificate of completion of the course?</div>
            </div>

            <div className="block_2_Faq">
                <div className="block_2_Faq_txt">What do you need to pass the course?</div>
            </div>

            <div className="block_3_Faq">
                <div className="block_3_Faq_txt">How many people study in one group?</div>
            </div>

            <div className="block_4_Faq">
                <div className="block_4_Faq_txt">How long is the lesson?</div>
            </div>

            <div className="block_5_Faq">
                <div className="block_5_Faq_txt">How is studying at linguastar better than offline?</div>
            </div>
            <Menu_Contacts/>
        </>
    )
}
