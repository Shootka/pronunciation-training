import { Module } from '@nestjs/common';
import { PronunciationModule } from './pronunciation/pronunciation.module';

@Module({
  imports: [PronunciationModule]
})
export class AppModule {}
