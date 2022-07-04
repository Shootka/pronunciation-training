import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PronunciationModule } from './pronunciation/pronunciation.module';
import { join } from 'path';

@Module({
  imports: [PronunciationModule,
            MongooseModule.forRootAsync({
              imports: [ConfigModule],
              inject: [ConfigService],
              useFactory: (configService: ConfigService) => ({
                uri: configService.get('MONGO_ACCESS_URI'),
              })
            }),
            ServeStaticModule.forRoot({
              rootPath: join(__dirname, '..', '..', 'client', 'build'),
            }),
            ConfigModule.forRoot()
  ]
})
export class AppModule { }
