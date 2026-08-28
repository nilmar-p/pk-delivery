import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from './entities/user.entity';
import { UserFileEntity } from '../file/entities/user-file.entity';
import { FileModule } from '../file/file.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtStrategy } from '../common/strategies/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserFileEntity]),
    FileModule,
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: '1d'
    }
  }),
  PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule { }
