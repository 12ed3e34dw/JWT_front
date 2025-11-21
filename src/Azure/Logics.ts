import { BlobServiceClient } from "@azure/storage-blob";

export async function uploadFileToAzure(file: File, sasUrl: string, containerName: string) {
    try {
        // Создаем клиент blob сервиса
        const blobServiceClient = new BlobServiceClient(sasUrl);
        const containerClient = blobServiceClient.getContainerClient(containerName);

        // Уникальное имя файла
        const blobName = `${Date.now()}-${file.name}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        // Загружаем файл
        await blockBlobClient.uploadBrowserData(file, {
            blobHTTPHeaders: { blobContentType: file.type },
        });

        // Возвращаем публичный URL файла
        return `${containerClient.url}/${blobName}`;
    } catch (err) {
        console.error("Ошибка загрузки на Azure:", err);
        return null;
    }
}
