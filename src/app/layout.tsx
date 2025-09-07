"use client";
import { AuthProvider } from "@/contexts/AuthContext";


// @ts-ignore
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <AuthProvider>{children}</AuthProvider>
        </body>
        </html>
    );
}
