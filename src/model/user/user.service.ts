import { Injectable } from '@nestjs/common';
// import { User } from '../graphql.schema';

type User = any;

@Injectable()
export class UserService {
  private readonly users: Array<User> = [{ id: 1, name: 'User' }];

  //   create(cat: Cat): Cat {
  //     cat.id = this.cats.length + 1;
  //     this.cats.push(cat);
  //     return cat;
  //   }

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number): User {
    return this.users.find((user) => user.id === id);
  }
}
