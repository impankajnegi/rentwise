import { Controller,  Get, UseGuards } from '@nestjs/common'; 
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/auth.guard';
// import { Roles } from 'src/auth/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService 
  ) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
//   @Roles('admin')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

 
}