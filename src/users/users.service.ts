import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
};
@Injectable()
export class UsersService {
  private readonly usersList: User[] = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Jane' },
    { id: 2, name: 'Tom' },
  ];

  async findOne(userId: number) {
    return this.usersList.find((user) => user.id === userId);
  }
}
