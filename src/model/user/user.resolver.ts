import { PrismaService } from '@/common/prisma/prisma.service';
import { Inject } from '@nestjs/common';
import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { User } from 'src/graphql.schema';

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => User)
  users() {
    return this.prismaService.user.findMany();
  }

  @ResolveField()
  address(parent, args, ctx, info) {
    return this.prismaService.address.findFirst({
      where: { id: Number(parent.addressId) },
    });
  }

  @ResolveField()
  device(parent, args, ctx, info) {
    return this.prismaService.device.findFirst({
      where: { id: Number(parent.deviceId) },
    });
  }
}
