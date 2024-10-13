import { Module   } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth.guard';
 

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },  // Set token expiration time
    }),
    UsersModule ,  // Make sure UsersModule is imported
  ],
  controllers: [AuthController],
  providers: [JwtService, AuthService, JwtStrategy, {
    provide:APP_GUARD,
    useClass:RolesGuard
  } ],
  exports:[  ]
})
export class AuthModule {}
