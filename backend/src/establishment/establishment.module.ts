import { Module } from '@nestjs/common';
import { EstablishmentController } from './establishment.controller.js';
import { EstablishmentService } from './establishment.service.js';

@Module({
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
})
export class EstablishmentModule {}
