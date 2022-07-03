import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {PronunciationController} from './pronunciation.controller';
import {PronunciationService} from './pronunciation.service';
import {PronunciationSchema} from './schemas/pronunciation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'en', schema: PronunciationSchema }, { name: 'fr', schema: PronunciationSchema }, { name: 'es', schema: PronunciationSchema }])],
  controllers: [PronunciationController],
  providers: [PronunciationService]
})
export class PronunciationModule {
}
