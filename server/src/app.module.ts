import { Module } from '@nestjs/common';
import { PronunciationModule } from './pronunciation/pronunciation.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PronunciationModule,
            MongooseModule.forRoot('mongodb+srv://KostyaBardok:zoj-2000@trainingcluster.it0vs.mongodb.net/Pronunciation?retryWrites=true&w=majority')
            
  ]
})
export class AppModule { }
