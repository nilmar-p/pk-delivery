import { Controller } from '@nestjs/common';
import { EstablishmentService } from './establishment.service.js';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}
}
