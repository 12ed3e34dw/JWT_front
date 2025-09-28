'use client';
 import "@/Styles/Contacts_style/Contacts.css";
import Menu_3 from "@/navigate/Menu_3";
import Menu_Contacts from "@/navigate/Menu_Contacts";
import Menu from "@/navigate/Menu";

export default function Page() {
    return (
        <>
            <Menu/>
            <div className="container_Main">
                <div className="txt_1">ASK</div>
                <div className="txt_2">&</div>
                <div className="txt_3">ENJOY</div>
                <div className="txt_4">Contact us in any convenient way</div>

                <div className="container_1">
                    <div className="txt_5">WE ARE IN TOUCH:</div>
                    <div className="txt_number_phone">+380941245509</div>
                    <div className="txt_6">Mon-Fri:11:00 to 20:00</div>
                    <div className="txt_7">Saturday,Sunday: weekends</div>
                </div>

                <div className="container_2">
                    <div className="txt_8">ALL THE TIME:</div>
                    <div className="txt_9">our e-mail</div>
                    <div className="txt_10">linguaStar@gmail.com</div>
                </div>
            </div>
            <Menu_Contacts/>
        </>
    )
}
