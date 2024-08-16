import { IsString } from 'class-validator';
import { CreateDeviceInput } from '../../graphql.schema';

export class CreateDeviceDto extends CreateDeviceInput {
  @IsString()
  name?: string;
}
