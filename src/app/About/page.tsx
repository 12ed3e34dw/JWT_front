'use client';
import "@/Styles/About_style/About_style.css";
import Menu from "@/navigate/Menu";
import Menu_3 from "@/navigate/Menu_3";

export default function Page() {

    return (
        <>
<Menu/>
         <div className="container_Main">

             <div className="container_1">
                 <div className="txt_about_1">SING</div>
                 <div className="txt_about_2">UP</div>
                 <div className="txt_about_3">FOR</div>
                 <div className="txt_about_4">A</div>
                 <div className="txt_about_5">FREE</div>
                 <div className="txt_about_6">SESSION</div>
                 <div className="txt_about_7">Take s short test of your preferences and get the lesson for free</div>


                 <button className="button_about_1">
                     <div className="txt_button_about_1">Get the lesson</div>
                 </button>

             </div>

<div className="container_2">
    <div className="txt_about_8">WHY</div>
    <div className="txt_about_9">CHOOSE</div>
    <div className="txt_about_10">US?</div>
    <div className="txt_about_11">We are comfortable</div>



    <div className="block_1">
        <div className="txt_about_numbers_1">01</div>
        <div className="txt_about_txt_12">MODERN TECHNOLOGIES</div>
        <div className="txt_about_txt_13">Different tasks include in our programm  - “Bite-</div>
        <div className="txt_about_txt_14">Sized Lessons”, AI helper and many other extra study “sweeties”.</div>
    </div>
    <div className="block_2">
        <div className="txt_about_numbers_2">02</div>
        <div className="txt_about_txt_15">Individual program</div>



    </div>
    <div className="block_3">
        <div className="txt_about_numbers_3">03</div>

    </div>
</div>


         <div className="container_3">
             <div className="block_4"></div>
             <div className="block_5"></div>
             <div className="block_6"></div>
             <div className="block_7"></div>
             <div className="block_8"></div>
         </div>


         </div>
<Menu_3/>
        </>
    )
}
