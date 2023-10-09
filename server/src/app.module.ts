import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';
import { PostModule } from './post/post.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [UsersModule, AuthModule, NewsModule, PostModule],
})
export class AppModule {}
