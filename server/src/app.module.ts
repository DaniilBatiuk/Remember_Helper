import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { DictionaryModule } from './dictionary/dictionary.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, DictionaryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
