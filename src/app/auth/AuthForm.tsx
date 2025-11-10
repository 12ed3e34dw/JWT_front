"use client";
import React, { useState } from "react";

interface AuthFormProps {
    mode: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form className="p-4">
            <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block border p-2 mb-2 w-full"
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block border p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {mode === "login" ? "Войти" : "Зарегистрироваться"}
            </button>
        </form>
    );
};

export default AuthForm;
