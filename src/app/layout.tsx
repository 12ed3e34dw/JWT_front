"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import { initI18n } from "@/i18n/Logics";


// @ts-ignore
export default function RootLayout({ children }) {
    // ensure i18n initialized on client
    initI18n("en");
    return (
        <html lang="en">
        <body>
        <AuthProvider>{children}</AuthProvider>
        </body>
        </html>
    );
}
