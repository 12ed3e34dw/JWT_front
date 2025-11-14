"use client";
//Test
// import Auth from "@/app/auth/page";
import Menu from "@/navigate/Menu"
import Main from "@/app/Adults/page"
import Menu_2 from "@/navigate/Menu_2";
// import Training from "@/app/Training/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Phrases from "@/app/Phrases/page";
import Phrases_Logics from "@/Phrases/Logics";
export default function Home() {

    return (
        <div className="main" style={{ position: 'relative' }}>
            {/*<Menu />*/}
            <main style={{ position: 'relative', zIndex: 0 }}>
                <Main/>
            </main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Phrases_Logics/>} />
                    <Route path="/course" element={<Phrases/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
