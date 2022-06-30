import { Module } from '@nestjs/common';
import { PronunciationController } from './pronunciation.controller';
import { PronunciationService } from './pronunciation.service';

@Module({
  controllers: [PronunciationController],
  providers: [PronunciationService]
})
export class PronunciationModule {}
