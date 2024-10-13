import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column('simple-array')
  roles: string[]; // Example: ['buyer', 'seller']

    // Hash the password before saving it
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(password, salt);
      }
  // Hash the password before saving the user
      @BeforeInsert()
      async hashPassword() {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      }
    
      // Check if the provided password is correct
      async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
      }


}