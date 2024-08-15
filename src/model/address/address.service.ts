import { Injectable } from '@nestjs/common';
import type { Address } from 'src/graphql.schema';

@Injectable()
export class AddressService {
  private readonly address: Array<Address> = [{ id: '1', address: 'Address' }];

  create(address: Address): Address {
    address.id = String(this.address.length + 1);
    this.address.push(address);
    return address;
  }

  findAll(): Address[] {
    return this.address;
  }

  findOneById(id: number): Address {
    return this.address.find((address) => Number(address.id) === id);
  }
}
