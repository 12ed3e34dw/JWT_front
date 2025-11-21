"use client";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "@/contexts/AuthContext";
import AdminGuard from "@/app/auth/AdminGuard";
import {uploadFileToAzure} from "@/Azure/Logics";
export default function AdminCourses() {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    const loadCourses = async () => {
        const res = await axios.get("http://localhost:3000/courses");
        setCourses(res.data);
    };

    useEffect(() => {
        loadCourses();
    }, []);

    const deleteCourse = async (id: string) => {
        if (!confirm("Удалить курс?")) return;

        await axios.delete(`http://localhost:3000/courses/${id}`);
        loadCourses();
    };


    //Logic Azure
    const [courseImageFile, setCourseImageFile] = useState<File | null>(null);
    const [uploadingCourseImage, setUploadingCourseImage] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const handleCourseImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) setCourseImageFile(e.target.files[0]);
    };

    const handleUploadCourseImage = async () => {
        if (!courseImageFile) return;
        setUploadingCourseImage(true);

        const sasUrl = await fetch("/api/azure-sas").then(res => res.text());

        const url = await uploadFileToAzure(courseImageFile, sasUrl, "courses-images");

        if (url) setImageUrl(url);

        setUploadingCourseImage(false);
    };


    return (
        <AdminGuard>
            <div className="p-6">

                <h1 className="text-2xl font-bold">Управление курсами</h1>

                <a
                    href="/admin/courses/add"
                    className="bg-blue-500 text-white px-4 py-2 rounded block w-max my-4"
                >
                    ➕ Добавить курс
                </a>

                <div className="grid gap-4">
                    {courses.map((course) => (
                        <div key={course.id} className="border p-4 rounded">

                            <div className="text-xl">{course.title}</div>
                            <div className="text-gray-500">{course.level}</div>

                            <div className="flex gap-3 mt-3">
                                <a
                                    href={`/admin/courses/edit/${course.id}`}
                                    className="border px-3 py-1 rounded bg-yellow-400"
                                >
                                    ✏️ Редактировать
                                </a>

                                <button
                                    onClick={() => deleteCourse(course.id)}
                                    className="border px-3 py-1 rounded bg-red-500 text-white"
                                >
                                    ❌ Удалить
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </AdminGuard>
    );
}
