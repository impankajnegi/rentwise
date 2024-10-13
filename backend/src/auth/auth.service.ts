import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import  * as bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService,  private usersService: UsersService){}

     // Register a new user
  async signup(userDto: any) {
    const user = await this.usersService.create(userDto);
    return this.generateToken(user);  // Generate token after successful registration
  }

    async validateUser(email:string, password: string):Promise<any>{
        // Fetch user from the database and verify the password
       const user = await this.usersService.findOneByEmail(email)
    // const user = {name:"Pankaj", password:"asdasdasdad"}
   const passwordValid = await bcrypt.compare(password, user.password);

    if(user && passwordValid){
        const {password, ...result} = user;
        return result;
    }
    }

    // Login user by validating credentials and generating JWT
  async login(user: any) {
    const payload = { email: user.email, sub: user.id, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


      // Generate JWT Token
  private generateToken(user: any) {
    const payload = { email: user.email, sub: user.id, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
