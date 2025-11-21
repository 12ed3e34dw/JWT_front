

// "use client";
// import { useState, useContext } from "react";
// import { AuthContext } from "@/contexts/AuthContext";
//
//
// interface AuthFormProps {
//     mode: "login" | "register";
// }
//
// const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
//     const { login, register } = useContext(AuthContext);
//
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         try {
//             if (mode === "login") {
//                 await login(email, password);
//             } else {
//                 await register(email, password, name); // правильный порядок!
//             }
//         } catch (err) {
//             console.error("Auth error:", err);
//             alert("Ошибка авторизации");
//         }
//     };
//
//     return (
//         <form className="p-4" onSubmit={handleSubmit}>
//             <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>
//
//             {mode === "register" && (
//                 <input
//                     type="text"
//                     placeholder="Имя"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="block border p-2 mb-2 w-full"
//                 />
//             )}
//
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block border p-2 mb-2 w-full"
//             />
//
//             <input
//                 type="password"
//                 placeholder="Пароль"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block border p-2 mb-2 w-full"
//             />
//
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//                 {mode === "login" ? "Войти" : "Зарегистрироваться"}
//             </button>
//         </form>
//     );
// };
//
// export default AuthForm;


"use client";
import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

interface AuthFormProps {
    mode: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
    const { login, register } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (mode === "login") {
                await login(email, password);
            } else {
                await register(name, email, password);
            }
        } catch (error) {
            console.error("Auth error:", error);
            alert("Ошибка авторизации");
        }
    };

    return (
        <form className="p-4" onSubmit={handleSubmit}>
            <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>

            {mode === "register" && (
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block border p-2 mb-2 w-full"
                />
            )}

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
