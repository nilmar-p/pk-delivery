import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFileEntity } from './entities/user-file.entity';
import { FileEntity } from './entities/file.entity';
import { FileStorageService } from '../common/utils/file-upload.util';


@Module({
    imports: [
        TypeOrmModule.forFeature([FileEntity, UserFileEntity]),
    ],
    providers: [FileStorageService],
    exports: [FileStorageService],
})
export class FileModule {}
