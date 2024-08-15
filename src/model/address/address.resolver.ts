// import { Query } from "@nestjs/common";
import { Resolver, Query } from '@nestjs/graphql';
import { Address } from 'src/graphql.schema';

@Resolver()
export class AddressResolver {
  @Query(() => Address)
  address() {
    return { address: 'Hello World!' };
  }
}
