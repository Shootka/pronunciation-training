/// <reference types="multer" />
import { Model } from 'mongoose';
import { PronunciationDocument } from './schemas/pronunciation.schema';
import { CreatePhrases } from './dto/create-phrase.dto';
import { GetPhrases } from './dto/get-phrases.dto';
import { DeletePhrases } from './dto/delete-phrase.dto';
import { ConfigService } from '@nestjs/config';
export declare class PronunciationService {
    private readonly enPronunciation;
    private readonly frPronunciation;
    private readonly esPronunciation;
    private readonly configService;
    constructor(enPronunciation: Model<PronunciationDocument>, frPronunciation: Model<PronunciationDocument>, esPronunciation: Model<PronunciationDocument>, configService: ConfigService);
    internationalPronunciation(lang: string): Model<PronunciationDocument, {}, {}, {}, any>;
    allphrases(info: GetPhrases): Promise<(import("./schemas/pronunciation.schema").Pronunciation & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createphrase(info: CreatePhrases): Promise<(import("./schemas/pronunciation.schema").Pronunciation & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deletephrase(info: DeletePhrases): Promise<(import("./schemas/pronunciation.schema").Pronunciation & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    result(voice: Express.Multer.File, info: CreatePhrases): Promise<number>;
}
