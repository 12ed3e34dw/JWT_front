import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // бекенд Nest

export const azureService = {
    async getUploadUrl(fileName: string) {
        const { data } = await axios.get(`${API_URL}/azure/upload-url`, {
            params: { fileName },
        });
        return data.uploadUrl;
    },

    async getReadUrl(fileName: string) {
        const { data } = await axios.get(`${API_URL}/azure/read-url`, {
            params: { fileName },
        });
        return data;
    },

    async uploadFile(file: File) {
        const uploadUrl = await this.getUploadUrl(file.name);
        await axios.put(uploadUrl, file, {
            headers: { "x-ms-blob-type": "BlockBlob" },
        });
        return uploadUrl.split("?")[0]; // возвращаем чистый URL
    },
};
