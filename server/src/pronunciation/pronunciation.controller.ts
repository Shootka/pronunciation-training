import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('pronunciation')
export class PronunciationController {

    @Get('allphrases')
    async create(@Body() dto: string) {
        return 0;
    }

    @Post('addphrase')
    async deco() {
        console.log(1);
    }

    // @Delete('deletephrase')
    
    // @Get('result')

}
