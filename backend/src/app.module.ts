import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service.js';
import { EstablishmentModule } from './establishment/establishment.module.js';
import databaseConfig from './config/database.config.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [databaseConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(process.cwd(), 'files'),
      serveRoot: '/resource/files', // http://localhost:3000/resource/files/
    }),
    EstablishmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
