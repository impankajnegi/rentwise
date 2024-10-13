import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity'; 
import { UsersModule } from './users/users.module'; 
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/auth.guard';

@Module({
  imports: [  
    AuthModule, 
    TypeOrmModule.forRoot({
    type: 'postgres',           
    host: 'localhost',
    port: 5432,                 
    username: 'postgres',   
    password: 'postgres',  
    database: 'rentwise',    
    entities: [User],           
    synchronize: true,          
  }), 
  UsersModule],
  controllers: [AppController ],
  providers: [ AppService ],
})
export class AppModule {}
