import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from './users.service';

@Module({
  imports: [],
  providers: [UsersService, PrismaService],
  exports: [UsersService]
})
export class UsersModule {}
