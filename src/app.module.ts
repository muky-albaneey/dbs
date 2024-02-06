/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';


@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal : true
  }), DatabaseModule, AuthModule, FilesModule 
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
