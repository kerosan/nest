import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { CreateUserInput } from '../../graphql.schema';

export class CreateUserDto extends CreateUserInput {
  @IsString()
  name?: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone?: string;
}
