import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import * as path from 'path';
import databaseConfig from './config/database.config';
import { EstablishmentModule } from './establishment/establishment.module';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [databaseConfig.KEY],
      useFactory: (config) => config,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(process.cwd(), 'files'),
      serveRoot: '/resource/files', // http://localhost:3000/resource/files/
    }),
    EstablishmentModule,
    UserModule,
    FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
