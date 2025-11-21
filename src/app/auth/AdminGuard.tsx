"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }) {
    const { user, loading, isAdmin } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAdmin()) {
            router.push("/login"); // если не админ → к логину
        }
    }, [loading, user]);

    if (loading) return <p>Загрузка...</p>;
    if (!isAdmin()) return null;

    return children;
}
