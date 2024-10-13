import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userDto: any): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.password = bcrypt.hashSync(userDto.password, 10);
    user.roles = userDto.roles;
    return this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }
    // Find a user by email
    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { email } });
      }

          // Find a user by email
    async findAll(): Promise<User[] > {
        return this.usersRepository.find() ;
      }
}