"use client";
//Test
// import Auth from "@/app/auth/page";
import Menu from "@/navigate/Menu"
import Main from "@/app/Adults/page"
import Menu_2 from "@/navigate/Menu_2";
import '@/Styles/Adults_style/Adults.css';
export default function Home() {

    return (
        <div className="main" style={{ position: 'relative' }}>
            <Menu_2 />
            <Menu />
            <main style={{ position: 'relative', zIndex: 0 }}>
                <Main/>
            </main>
        </div>
    );
}
