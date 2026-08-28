import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity.js';
import { FileStorageService } from '../common/utils/file-upload.util.js';

@Module({
    imports: [
        TypeOrmModule.forFeature([FileEntity]),
    ],
    providers: [FileStorageService],
    exports: [FileStorageService],
})
export class FileModule {}
