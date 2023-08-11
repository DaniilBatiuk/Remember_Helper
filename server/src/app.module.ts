import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { WordModule } from './word/word.module';
import { TranslationModule } from './translation/translation.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, DictionaryModule, WordModule, TranslationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
