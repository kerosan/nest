import { Module } from '@nestjs/common';
import { AddressResolver } from './address.resolver';
import { AddressService } from './address.service';

@Module({
  providers: [AddressService, AddressResolver],
})
export class AddressModule {}
