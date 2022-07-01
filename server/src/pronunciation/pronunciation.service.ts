import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PronunciationDocument } from './schemas/pronunciation.schema';
import { CreatePhrases } from './dto/create-phrase.dto';
import { GetPhrases } from './dto/get-phrases.dto';
import { DeletePhrases } from './dto/delete-phrase.dto';


@Injectable()
export class PronunciationService {
    constructor(@InjectModel('us') private readonly usPronunciation: Model<PronunciationDocument>,
                @InjectModel('fr') private readonly frPronunciation: Model<PronunciationDocument>,
                @InjectModel('sp') private readonly spPronunciation: Model<PronunciationDocument>
    ) {
    }

    internationalPronunciation(lang: string) {
        switch (lang) {
            case 'us':
                return this.usPronunciation
            case 'fr':
                return this.frPronunciation
            case 'sp':
                return this.spPronunciation
        }
    }

    async allphrases(info: GetPhrases) {
        const Pronunciation = this.internationalPronunciation(info.language)
        return await Pronunciation.find({})
    }

    async createphrase(info: CreatePhrases) {
        const Pronunciation = this.internationalPronunciation(info.language)
        const phrase = new Pronunciation(info)
        await phrase.save()
        return 'Good'
    }

    async deletephrase(info: DeletePhrases) {
        const Pronunciation = this.internationalPronunciation(info.language)
        await Pronunciation.findByIdAndDelete(info.id)
        return 'Good'
    }

    async result(voice: Express.Multer.File) {

    }
}
