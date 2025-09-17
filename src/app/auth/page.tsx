"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import AuthForm from "@/page";
// @ts-ignore
import Profile from "@/app/Profile/page"
export default function Auth() {
    // @ts-ignore
    const { user, logout, loading } = useContext(AuthContext);
    const [mode, setMode] = useState("login"); // login или register

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
                                    Зарегистрироваться
                                </button>
                            </p>
                        ) : (
                            <p>
                                Уже есть аккаунт?{" "}
                                <button className="text-blue-500" onClick={() => setMode("login")}>
                                    Войти
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
