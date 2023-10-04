import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(userId: number) {
    const user = this.userService.findOne(userId);
    if (user) {
      return user;
    }

    return null;
  }
}
