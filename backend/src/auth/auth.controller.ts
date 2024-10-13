import { Controller, Post, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  // User signup route
  @Post('signup')
  async signup(@Body() userDto: any) {
    const userExists = await this.usersService.findOneByEmail(userDto.email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }
    return this.authService.signup(userDto);
  }

  // User login route
  @Post('login')
  async login(@Body() loginDto: any) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
