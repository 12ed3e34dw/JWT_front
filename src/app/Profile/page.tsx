//Test AZURE
// import React, { useState } from "react";
//  import { uploadProfilePhoto } from "@/Azure/Logics";
//
// function ProfilePhotoPage() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewUrl, setPreviewUrl] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             setPreviewUrl(URL.createObjectURL(file));
//         }
//     };
//
//     const handleUpload = async () => {
//         if (!selectedFile) return;
//
//         setLoading(true);
//         setError("");
//
//         try {
//             const uploadedUrl = await uploadProfilePhoto(selectedFile);
//             setPreviewUrl(uploadedUrl); // обновляем превью с URL от сервера
//             setSelectedFile(null);
//         } catch (err) {
//             setError("Не удалось загрузить фото");
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return (
//         <div>
//             <h2>Загрузка фото профиля</h2>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
//             <div>
//                 <button onClick={handleUpload} disabled={!selectedFile || loading}>
//                     {loading ? "Загрузка..." : "Загрузить"}
//                 </button>
//             </div>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//         </div>
//     );
// }
//
// export default ProfilePhotoPage;



"use client";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import "@/Styles/Profile_styles/Profile_styles.css";
import Auth from "@/app/auth/page";
import Menu_Main from "@/navigate/Menu";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Ico_user from "@/assets/320/12.png";
import Ico_Adults from "@/assets/320/Ico_Adults.png";
import Image from "next/image";
import Ico_Component from "@/assets/320/Component.png";
import Menu_Contacts from "@/navigate/Menu_Contacts";
interface User {
    displayName?: string;
    name?: string;
    email?: string;
    country?: string;
    phone?: string;
    photoURL?: string;
}

export default function ProfilePage() {
    const router = useRouter();
    const { user, logout, loading, updateProfile } = useContext(AuthContext);
    const { t } = useTranslation();

    const [openLevel, setOpenLevel] = useState(false);
    const [openCurrency, setOpenCurrency] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState("Beginner");
    const [selectedCurrency, setSelectedCurrency] = useState("грн");
    const [isEditing, setIsEditing] = useState(false);

    const [editedUser, setEditedUser] = useState({
        name: "",
        email: "",
        country: "",
        phone: ""
    });

    const levels = ["Beginner", "Elementary", "Pre-Intermediate", "Intermediate", "Upper-Intermediate", "Advanced"];
    const currencies = ["грн", "Euro", "Dollars", "Portuguese escudo"];

    // Защита от неавторизованного доступа
    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth");
        }
    }, [user, loading, router]);

    // Заполняем state при загрузке пользователя
    useEffect(() => {
        if (user) {
            setEditedUser({
                name: user.displayName || user.name || "",
                email: user.email || "",
                country: user.country || "",
                phone: user.phone || ""
            });
        }
    }, [user]);

    const handleLevelSelect = (level: string) => {
        setSelectedLevel(level);
        setOpenLevel(false);
    };

    const handleCurrencySelect = (currency: string) => {
        setSelectedCurrency(currency);
        setOpenCurrency(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setEditedUser(prev => ({ ...prev, [field]: value }));
    };

    const handleSaveClick = async () => {
        try {
            if (updateProfile) {
                await updateProfile(editedUser);
            }
            setIsEditing(false);
        } catch (err) {
            console.error("Ошибка при обновлении профиля:", err);
        }
    };

    if (loading) {
        return (
            <div style={{
                backgroundColor: '#121419',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white'
            }}>
                Loading...
            </div>
        );
    }

    if (!user) {
        return <Auth />;
    }

    return (
        <>
            <Menu_Main />
            <div style={{
                backgroundColor: '#121419',
                minHeight: '100vh',
                width: '100%',
                margin: 0,
                padding: 0,
                position: 'relative'
            }}>
                {/* Блок регистрации */}
                <div className="container_1">
                    <div className="txt_1">{t("SIGN")}</div>
                    <div className="txt_1_1">{t("UP")}</div>
                    <div className="txt_1_2">{t("FOR")}</div>
                    <div className="txt_1_3">{t("A")}</div>

                    <div className="txt_2">{t("FREE")}</div>
                    <div className="txt_3">{t("SESSION")}</div>
                    <div className="txt_4">
                        {t("Take a short test of your preferences and get the lesson for free")}
                    </div>
                    <button className="button_1">
                        <div className="txt_lesson">{t("Get the lesson")}</div>
                    </button>
                </div>

                {/* Информация о пользователе */}
                <div className="container_user_info">
                    <div className="Img_user">
                        {/* default ico users */}
                        <Image src={Ico_user} alt="" className="Ico_user"/>
                    </div>

                    {/* Имя пользователя */}
                    <div className="cont_user_name">
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedUser.name}
                                onChange={e => handleInputChange("name", e.target.value)}
                                className="edit_input"
                                placeholder="Введите имя"
                            />
                        ) : (
                            <div className="txt_user_name">
                                {editedUser.name || 'Имя не указано'}
                            </div>
                        )}
                    </div>

                    <div className="cont_user_email">

                    </div>

                    {/* Email пользователя */}
                    <div className="cont_user_email_field">
                        {isEditing ? (
                            <input
                                type="email"
                                value={editedUser.email}
                                onChange={e => handleInputChange("email", e.target.value)}
                                className="edit_input"
                                placeholder="Введите email"
                            />
                        ) : (
                            <div className="txt_user_email">
                                {editedUser.email || 'Email не указан'}
                            </div>
                        )}
                    </div>

                    <div className="cont_user_nation">

                    </div>

                    {/* Страна пользователя */}
                    <div className="cont_user_country">
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedUser.country}
                                onChange={e => handleInputChange("country", e.target.value)}
                                className="edit_input"
                                placeholder="Введите страну"
                            />
                        ) : (
                            <div className="txt_user_nation">
                                {editedUser.country || 'Страна не указана'}
                            </div>
                        )}
                    </div>

                    <div className="cont_user_phone_icon">

                    </div>

                    {/* Телефон пользователя */}
                    <div className="cont_user_phone">
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedUser.phone}
                                onChange={e => handleInputChange("phone", e.target.value)}
                                className="edit_input"
                                placeholder="Введите телефон"
                            />
                        ) : (
                            <div className="txt_user_phone">
                                {editedUser.phone || 'Телефон не указан'}
                            </div>
                        )}
                    </div>

                    {/* Кнопка редактирования/сохранения */}
                    <button
                        className="button_edit_information"
                        onClick={isEditing ? handleSaveClick : () => setIsEditing(true)}
                    >
                        <div className="txt_edit">
                            {isEditing ? "Save changes" : "Edit personal information"}
                        </div>
                    </button>
                </div>

                {/* Уровень */}
                <div className="container_level">
                    <div className="Img_level">

                    </div>

                    <div className="txt_level">{t("Level")}</div>

                    <div className="txt_5">
                        {t("Changing the level affects the complexity of  tasks")}
                    </div>


                    <div
                        className={`language-selector ${openLevel ? "open" : ""}`}
                        onClick={() => setOpenLevel(!openLevel)}
                    >
                        <div className="language-selected_1">
                            <div className="txt_Level_1">{selectedLevel}</div>
                        </div>
                        {openLevel && (
                            <ul className="language-dropdown">
                                {levels
                                    .filter((level) => level !== selectedLevel)
                                    .map((level) => (
                                        <li
                                            key={level}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleLevelSelect(level);
                                            }}
                                        >
                                            {level}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>

                    <button className="button_Level">
                        <div className="txt_button_level">{t("Take a test")}</div>
                    </button>
                </div>

                {/* Смена пароля */}
                <div className="container_change_password">
                    <div className="txt_Change_password">{t("Change password")}</div>

                    <div className="button_save">
                        <div className="txt_button_save">
                        Save changes
                        </div>
                    </div>
                </div>

                {/* История */}
                <div className="container_history">
                    <div className="txt_history">{t("History")}</div>
                </div>

                {/* Курсы */}
                <div className="container_courses">
                    <Image src={Ico_Adults} alt="" className="Logo_webSite"/>
                    <div className="txt_7">{t("KNOWLEDGE")}</div>
                    <div className="txt_8">{t("IS THE BEST GIFT")}</div>
                    <div className="txt_9">{t("Don`t wait for a reason to please someone dear")}</div>
                    <div className="txt_10">{t("Number of lessons")}</div>

                    <div className="section_button">
                        <button className="btn_10">
                            <div className="txt_btn_10">10</div>
                        </button>

                        <button className="btn_20">
                            <div className="txt_btn_20">20</div>
                        </button>

                        <button className="btn_50">
                            <div className="txt_btn_50">50</div>
                        </button>

                        <button className="btn_75">
                            <div className="txt_btn_75">75</div>
                        </button>
                    </div>

                    <div className="txt_11">Lessons</div>

                    <div className="section_button_2">
                        <button className="btn_Group">
                            <div className="txt_btn_Group">{t("Group")}</div>
                        </button>
                        <button className="btn_Individual">
                            <div className="txt_btn_Individual">{t("Individual")}</div>
                        </button>
                    </div>

                    <div className="txt_12">{t("Certificate will come here")}</div>

                    <div className="txt_13">{t("Price:")}</div>

                    <div
                        className={`currency-selector ${openCurrency ? "open" : ""}`}
                        onClick={() => setOpenCurrency(!openCurrency)}
                    >
                        <div className="currency-selected">
                            <div className="txt_currency">{selectedCurrency}
                                <Image src={Ico_Component} alt="" className="Component"/>
                            </div>
                        </div>
                        {openCurrency && (
                            <ul className="currency-dropdown">
                                {currencies
                                    .filter((currency) => currency !== selectedCurrency)
                                    .map((currency) => (
                                        <li
                                            key={currency}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCurrencySelect(currency);
                                            }}
                                        >
                                            {currency}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>

                    <button className="button_curse">
                        <div className="button_curse_txt">
                        {t(" Choose gift ")}
                        </div>
                    </button>
                </div>
            </div>
            <Menu_Contacts/>
        </>
    );
}
