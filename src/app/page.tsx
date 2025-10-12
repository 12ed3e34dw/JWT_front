"use client";
//Test
// import Auth from "@/app/auth/page";
import Menu from "@/navigate/Menu"
import Main from "@/app/Adults/page"
import Menu_2 from "@/navigate/Menu_2";
import Training from "@/app/Training/page";
export default function Home() {

    return (
        <div className="main" style={{ position: 'relative' }}>
            {/*<Menu_2 />*/}
            <Menu />
            <main style={{ position: 'relative', zIndex: 0 }}>
                <Main/>
            </main>
        </div>

        // <div className="main" style={{ position: 'relative' }}>
        //     <main style={{ position: 'relative',zIndex: 0 }}>
        //         <Training/>
        //     </main>
        // </div>
    );
}
