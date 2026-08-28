import { Controller } from '@nestjs/common';
import { FileService } from './file.service.js';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
}
