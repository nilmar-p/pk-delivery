import { memoryStorage } from 'multer';
import { BadRequestException } from '@nestjs/common';

export function imageUploadOptions(maxSizeMB = 2) {
    return {
        storage: memoryStorage(),
        limits: {
            fileSize: maxSizeMB * 1024 * 1024,
        },
        fileFilter: (req, file, callback) => {
            const allowed = ['image/jpeg', 'image/png', 'image/webp'];
            if (allowed.includes(file.mimetype)) {
                callback(null, true);
            } else {
                callback(new BadRequestException('Apenas imagens JPG, PNG e WEBP são permitidas'), false);
            }
        },
    };
}