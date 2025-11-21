import AdminGuard from "@/app/auth/AdminGuard";

export default function AdminPage() {
    return (
        <AdminGuard>
            <h1>Админ панель</h1>
        </AdminGuard>
    );
}
