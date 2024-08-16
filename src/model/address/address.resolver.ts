import { PrismaService } from '@/common/prisma/prisma.service';
import { Inject } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { Address } from 'src/graphql.schema';

@Resolver()
export class AddressResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => Address)
  address() {
    return this.prismaService.address.findMany();
  }
}
