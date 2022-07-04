/// <reference types="multer" />
import { PronunciationService } from './pronunciation.service';
import { CreatePhrases } from './dto/create-phrase.dto';
import { GetPhrases } from './dto/get-phrases.dto';
import { DeletePhrases } from './dto/delete-phrase.dto';
export declare class PronunciationController {
    private pronunciationService;
    constructor(pronunciationService: PronunciationService);
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
