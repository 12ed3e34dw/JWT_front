// "use client";
// import { useContext, useState } from "react";
// import { AuthContext } from "@/contexts/AuthContext";
// import AuthForm from "@/page";
// // @ts-ignore
// import Profile from "@/app/Profile/page"
// import {useTranslation} from "react-i18next";
//
//
// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     children: React.ReactNode;
// }
//
// const Auth:React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//     if (!isOpen) return null;
//     // @ts-ignore
//     const { user, logout, loading } = useContext(AuthContext);
//     const [mode, setMode] = useState("login"); // login или register
//     const { t } = useTranslation();
//     if (loading) return <p className="text-center mt-10">Загрузка...</p>;
//
//
//     return (
//         <div>
//             {user ? (
//                 <Profile/>
//             ) : (
//                 <div>
//                     <AuthForm mode={mode} />
//                     <div className="text-center mt-4">
//                         {mode === "login" ? (
//                             <p>
//                                 Нет аккаунта?{" "}
//                                 <button className="text-blue-500" onClick={() => setMode("register")}>
//                                     {t("Registration") }
//                                 </button>
//                             </p>
//                         ) : (
//                             <p>
//                                 Уже есть аккаунт?{" "}
//                                 <button className="text-blue-500" onClick={() => setMode("login")}>
//                                     {t("Log in")}
//                                 </button>
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default Auth
"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import Profile from "@/app/Profile/page";
import { useTranslation } from "react-i18next";
import AuthForm from "@/app/auth/AuthForm";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Auth: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const { user, logout, loading } = useContext(AuthContext);
    const [mode, setMode] = useState<"login" | "register">("login");
    const { t } = useTranslation();

    if (loading) return <p className="text-center mt-10">Загрузка...</p>;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                {user ? (
                    <Profile />
                ) : (
                    <>
                        <AuthForm mode={mode} />
                        <div className="text-center mt-4">
                            {mode === "login" ? (
                                <p>
                                    Нет аккаунта?{" "}
                                    <button
                                        className="text-blue-500"
                                        onClick={() => setMode("register")}
                                    >
                                        {t("Registration")}
                                    </button>
                                </p>
                            ) : (
                                <p>
                                    Уже есть аккаунт?{" "}
                                    <button
                                        className="text-blue-500"
                                        onClick={() => setMode("login")}
                                    >
                                        {t("Log in")}
                                    </button>
                                </p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {







    overlay: {
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        backgroundColor:"rgba(202, 233, 25, 1)",
        borderRadius: "8px",
        padding: "20px",
        minWidth: "300px",
        position: "relative",
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "none",
        border: "none",
        fontSize: "20px",
        cursor: "pointer",
    },
};

export default Auth;
