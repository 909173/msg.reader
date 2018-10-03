export class MSGReader {
    constructor(arrayBuffer: ArrayBuffer);

    getFileData(): MSGFileData | MSGErrorResult;

    getAttachment(attach: number | MSGAttachment): MSGAttachmentData;
}

export interface MSGFileData {
    senderName: string;
    senderEmail: string;
    recipients: MSGRecipient[];
    subject: string;
    body: string;
    headers: string;
    attachments: MSGAttachment[];
    to: string;
    cc: string;
    bcc: string;
}

export interface MSGErrorResult {
    error: string;
}

export interface MSGRecipient {
    name: string;
    email?: string;
    sendType?: "to" | "cc" | "bcc";
}

export interface MSGAttachment {
    contentLength: number;
    dataId: number;
    extension: string;
    fileName: string;
    fileNameShort: string;
    name: string;
    pidContentId: string;
}

export interface MSGAttachmentData {
    fileName: string;
    content: string;
}
