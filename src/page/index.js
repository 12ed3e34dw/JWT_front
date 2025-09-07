"use client";
import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function AuthForm({ mode = "login" }) {
    const { login, register } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (mode === "login") {
                await login(email, password);
            } else {
                await register(name, email, password);
            }
        } catch (err) {
            setError("Ошибка авторизации");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">{mode === "login" ? "Войти" : "Регистрация"}</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {mode === "register" && (
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-6 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    {mode === "login" ? "Войти" : "Зарегистрироваться"}
                </button>
            </form>
        </div>
    );
}
