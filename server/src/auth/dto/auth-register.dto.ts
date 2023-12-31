import { ApiProperty } from '@nestjs/swagger';
import { BloodType, Gender, Prefix } from '@prisma/client';
import { MinLength, Validate } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

export class AuthRegisterDto {
  @ApiProperty({enum: Prefix,  example: 'Mr' })
  prefix: Prefix;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'my_password123' })
  password: string;

  @ApiProperty({ example: new Date("1990-01-15T00:00:00.000Z") })
  dob: Date;

  @ApiProperty({ example: '1234567891' })
  @MinLength(10)
  phoneNumber: string;

  @Validate(IsNotExist, ['citizenId'],{
    message: 'Citizen ID already exists'
  })
  @ApiProperty({ example: '1235567890123' })
  @MinLength(13)
  citizenId: string;

  @ApiProperty({ example: '9876543210981' })
  citizenBack: string;

  @ApiProperty({ enum: BloodType, example: 'A_POSITIVE' })
  bloodType: BloodType | null;

  @ApiProperty({ enum: Gender, example: 'MALE' })
  gender: Gender | null;

  @ApiProperty({ example: 70.5 })
  weight: number | null;

  @ApiProperty({ example: 175.2 })
  height: number | null;

  @ApiProperty({ example: 'Diabetes' })
  disease: string | null;
}
