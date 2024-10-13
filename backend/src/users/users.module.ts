import {   Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';   

@Module({
  imports:  [ TypeOrmModule.forFeature([User]),  PassportModule.register({ defaultStrategy: 'jwt' })   ],
  providers: [ UsersService ],
  controllers: [UsersController],
  exports: [UsersService], // Export service for usage in other modules (like Auth)
})
export class UsersModule {}