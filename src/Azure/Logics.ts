//Test

/**
 * Загружает файл на бэкенд
 * @param {File} file - выбранный файл
 * @returns {Promise<string>} - возвращает URL загруженного фото
 */



// export async function uploadProfilePhoto(file) {
//     if (!file) throw new Error("No file provided");
//
//     const formData = new FormData();
//     formData.append("photo", file);
//
//     try {
//         const response = await fetch("https://your-backend-api.com/upload", {
//             method: "POST",
//             body: formData,
//         });
//
//         if (!response.ok) {
//             throw new Error(`Upload failed: ${response.statusText}`);
//         }
//
//         const data = await response.json();
//         return data.photoUrl; // предполагаем, что бэкенд возвращает URL
//     } catch (error) {
//         console.error("Upload error:", error);
//         throw error;
//     }
// }
