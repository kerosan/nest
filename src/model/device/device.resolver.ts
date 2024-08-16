import { PrismaService } from '@/common/prisma/prisma.service';
import { Inject } from '@nestjs/common';
import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { Device } from 'src/graphql.schema';

@Resolver(Device)
export class DeviceResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => Device)
  users() {
    return this.prismaService.device.findMany();
  }

  @ResolveField()
  address(parent, args, ctx, info) {
    return this.prismaService.device.findFirst({
      where: { id: Number(parent.deviceId) },
    });
  }
}
