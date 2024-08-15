// import { Query } from "@nestjs/common";
import { Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/graphql.schema';

@Resolver()
export class UserResolver {
  @Query(() => User)
  users() {
    return [
      { id: '0', name: 'asas', phone: '0987654321', email: 'asas@asas.as' },
    ];
  }
}
