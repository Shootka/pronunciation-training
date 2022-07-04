import { Module } from '@nestjs/common';
import { PronunciationModule } from './pronunciation/pronunciation.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [PronunciationModule,
            MongooseModule.forRootAsync({
              imports: [ConfigModule],
              inject: [ConfigService],
              useFactory: (configService: ConfigService) => ({
                uri: configService.get('MONGO_ACCESS_URI'),
              })
            }),
            ConfigModule.forRoot()
  ]
})
export class AppModule { }
