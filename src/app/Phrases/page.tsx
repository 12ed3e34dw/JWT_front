'use client';
import "@/Styles/Phrases/Phrases.css";
import Menu_Contacts from "@/navigate/Menu_Contacts";
import Menu from "@/navigate/Menu";
import {useTranslation} from "react-i18next";

export default function Page() {
    const { t } = useTranslation();

    return (
        <>
            <Menu/>
            <div className="container_Main">

             <div className="txt_phrases">Phrases</div>

                <div className="txt_1_pharases">At the airport</div>

                <div className="txt_2_pharases">List of words</div>

                <div className="txt_3_pharases">
                    At the airport
                </div>
                <div className="txt_4_pharases">
                 10 phrases
                </div>
                <div className="txt_5_pharases">

                </div>

                <div className="buttonPhrases_1">Start</div>


                <div className="block_phrases_1">

                </div>
                <div className="block_phrases_2">

                </div>
                <div className="block_phrases_3">

                </div>
                <div className="block_phrases_4">

                </div>
                <div className="block_phrases_5">

                </div>

                <div className="buttonPhrases_2">Start</div>
            </div>
            <Menu_Contacts/>
        </>
    )
}
