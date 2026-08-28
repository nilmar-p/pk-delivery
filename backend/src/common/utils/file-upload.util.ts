import { BadRequestException, Injectable } from "@nestjs/common";
import path from "path";
import * as fs from 'fs/promises';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FileEntity } from "../../file/entities/file.entity.js";

@Injectable()
export class FileStorageService {
    constructor(
        @InjectRepository(FileEntity)
        private readonly fileRepository: Repository<FileEntity>,
    ) {}

    async upload(file: Express.Multer.File): Promise<FileEntity> {
        if (!file) throw new BadRequestException('Nenhum arquivo enviado');

        const fileExtension = path.extname(file.originalname).toLowerCase().substring(1);
        const fileName = `${path.parse(file.originalname).name}_${Date.now()}.${fileExtension}`;
        const fileFullPath = path.resolve(process.cwd(), 'files', fileName);

        await fs.writeFile(fileFullPath, file.buffer);

        const fileEntity = this.fileRepository.create({ path: fileFullPath, type: fileExtension });
        return this.fileRepository.save(fileEntity);
    }
}