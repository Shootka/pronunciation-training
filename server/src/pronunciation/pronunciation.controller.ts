import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PronunciationService } from './pronunciation.service';
import { CreatePhrases } from './dto/create-phrase.dto';
import { GetPhrases } from './dto/get-phrases.dto';
import { DeletePhrases } from './dto/delete-phrase.dto';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';



@Controller('pronunciation')
export class PronunciationController {
    constructor(private pronunciationService: PronunciationService) {}

    @Get('allphrases/:language')
    async allphrases(@Param() info: GetPhrases) {
        return this.pronunciationService.allphrases(info);
    }

    @Post('createphrase')
    async createphrase(@Body() info: CreatePhrases) {        
        return this.pronunciationService.createphrase(info)
    }

    @Delete('deletephrase')
    async deletephrase(@Body() info: DeletePhrases) {        
        return this.pronunciationService.deletephrase(info)
    }
    
    @Get('result')
    @UseInterceptors(FileInterceptor('voice'))
    async result(@UploadedFile() voice: Express.Multer.File) {        
        return this.pronunciationService.result(voice)
    }

}
