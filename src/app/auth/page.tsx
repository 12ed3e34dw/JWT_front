"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import AuthForm from "@/page";
// @ts-ignore
import Profile from "@/app/Profile/page"
import {useTranslation} from "react-i18next";
export default function Auth() {
    // @ts-ignore
    const { user, logout, loading } = useContext(AuthContext);
    const [mode, setMode] = useState("login"); // login или register
    const { t } = useTranslation();
    if (loading) return <p className="text-center mt-10">Загрузка...</p>;


    return (
        <div>
            {user ? (
                <Profile/>
            ) : (
                <div>
                    <AuthForm mode={mode} />
                    <div className="text-center mt-4">
                        {mode === "login" ? (
                            <p>
                                Нет аккаунта?{" "}
                                <button className="text-blue-500" onClick={() => setMode("register")}>
                                    {t("Registration") }
                                </button>
                            </p>
                        ) : (
                            <p>
                                Уже есть аккаунт?{" "}
                                <button className="text-blue-500" onClick={() => setMode("login")}>
                                    {t("Log in")}
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

//Test


