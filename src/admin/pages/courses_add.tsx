"use client";
import { useState } from "react";
import axios from "axios";
import AdminGuard from "@/app/auth/AdminGuard";
import {uploadFileToAzure} from "@/Azure/Logics";
interface Word {
    text: string;
    correctAnswer: string;
}

export default function AddCoursePage() {
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("A1");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [words, setWords] = useState<Word[]>([{ text: "", correctAnswer: "" }]);

    // Добавить новое слово
    const addWord = () => {
        setWords([...words, { text: "", correctAnswer: "" }]);
    };

    // Удалить слово
    const removeWord = (index: number) => {
        setWords(words.filter((_, i) => i !== index));
    };

    // Обновить слово
    const updateWord = (index: number, field: "text" | "correctAnswer", value: string) => {
        const newWords = [...words];
        newWords[index][field] = value;
        setWords(newWords);
    };

    const handleSave = async () => {
        if (!title || !category || words.length === 0) {
            alert("Заполните все поля и добавьте хотя бы одно слово!");
            return;
        }

        await axios.post("http://localhost:3000/courses", {
            title,
            level,
            image,
            category,
            words, // сохраняем слова с правильными ответами
        });

        window.location.href = "/admin/courses";
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
                <h1 className="text-2xl font-bold mb-4">Добавить курс</h1>

                <input
                    className="border p-2 mb-2 w-full"
                    placeholder="Название курса"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="border p-2 mb-2 w-full"
                    placeholder="Категория"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <input type="file" accept="image/*" onChange={handleCourseImageChange} />
                <button onClick={handleUploadCourseImage} disabled={uploadingCourseImage}>
                    {uploadingCourseImage ? "Загрузка..." : "Загрузить картинку"}
                </button>
                {imageUrl && <img src={imageUrl} alt="Course" className="preview-image" />}

                <select
                    className="border p-2 mb-4 w-full"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option>A1</option>
                    <option>A2</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                    <option>C2</option>
                </select>

                <h2 className="text-xl font-semibold mb-2">Слова / Фразы</h2>

                {words.map((word, index) => (
                    <div key={index} className="mb-2 flex gap-2 items-center">
                        <input
                            className="border p-2 flex-1"
                            placeholder="Слово/Фраза"
                            value={word.text}
                            onChange={(e) => updateWord(index, "text", e.target.value)}
                        />
                        <input
                            className="border p-2 flex-1"
                            placeholder="Правильный ответ"
                            value={word.correctAnswer}
                            onChange={(e) => updateWord(index, "correctAnswer", e.target.value)}
                        />
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => removeWord(index)}
                        >
                            ❌
                        </button>
                    </div>
                ))}

                <button
                    className="bg-green-500 text-white px-4 py-2 rounded my-2"
                    onClick={addWord}
                >
                    ➕ Добавить слово/фразу
                </button>

                <div className="mt-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleSave}
                    >
                        Сохранить курс
                    </button>
                </div>
            </div>
        </AdminGuard>
    );
}
