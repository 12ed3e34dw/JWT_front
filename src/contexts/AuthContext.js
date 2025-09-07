"use client";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            axios.get("http://localhost:3000/auth/me", { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setUser(res.data))
                .catch(() => {
                    Cookies.remove("token");
                    setUser(null);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email, password) => {
        const res = await axios.post("http://localhost:3000/auth/login", { email, password });
        Cookies.set("token", res.data.access_token, { expires: 7 });
        setUser(res.data.user);
    };

    const register = async (name, email, password) => {
        const res = await axios.post("http://localhost:3000/auth/register", { name, email, password });
        Cookies.set("token", res.data.access_token, { expires: 7 });
        setUser(res.data.user);
    };

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, register, logout, loading }}>{children}</AuthContext.Provider>;
};
