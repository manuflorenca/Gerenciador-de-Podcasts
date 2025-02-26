export enum ContentType {
    // Tipos comuns
    JSON = "application/json",
    TEXT = "text/plain",
    HTML = "text/html",
    XML = "application/xml",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    MULTIPART_FORM_DATA = "multipart/form-data",

    // Imagens
    JPEG = "image/jpeg",
    PNG = "image/png",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",

    // Áudio
    MP3 = "audio/mpeg",
    WAV = "audio/wav",
    OGG = "audio/ogg",

    // Vídeo
    MP4 = "video/mp4",
    WEBM = "video/webm",
    OGG_VIDEO = "video/ogg",

    // Arquivos
    PDF = "application/pdf",
    ZIP = "application/zip",
    OCTET_STREAM = "application/octet-stream", // Para downloads genéricos

    // Outros formatos
    CSV = "text/csv",
    JAVASCRIPT = "application/javascript",
    CSS = "text/css",
    EVENT_STREAM = "text/event-stream" // Para SSE (Server-Sent Events)
}
