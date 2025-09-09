"use client";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import AuthForm from "@/page";

export default function Auth() {
    // @ts-ignore
    const { user, logout, loading } = useContext(AuthContext);
    const [mode, setMode] = useState("login"); // login или register

    if (loading) return <p className="text-center mt-10">Загрузка...</p>;

    return (
        <div>
            {user ? (
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    <h1 className="text-3xl font-bold mb-4">Привет, {user.name}!</h1>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                    >
                        Выйти
                    </button>
                </div>
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
