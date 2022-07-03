import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PronunciationDocument } from './schemas/pronunciation.schema';
import { CreatePhrases } from './dto/create-phrase.dto';
import { GetPhrases } from './dto/get-phrases.dto';
import { DeletePhrases } from './dto/delete-phrase.dto';
const { Deepgram } = require("@deepgram/sdk");


@Injectable()
export class PronunciationService {
    constructor(@InjectModel('en') private readonly enPronunciation: Model<PronunciationDocument>,
                @InjectModel('fr') private readonly frPronunciation: Model<PronunciationDocument>,
                @InjectModel('es') private readonly esPronunciation: Model<PronunciationDocument>
    ) {}

    internationalPronunciation(lang: string) {
        switch (lang) {
            case 'en':
                return this.enPronunciation
            case 'fr':
                return this.frPronunciation
            case 'es':
                return this.esPronunciation
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
        return await Pronunciation.find({})
    }

    async deletephrase(info: DeletePhrases) {
        const Pronunciation = this.internationalPronunciation(info.language)
        await Pronunciation.findByIdAndDelete(info.id)
        return await Pronunciation.find({})
    }

    async result(voice: Express.Multer.File, info: CreatePhrases) {
        const deepgram = new Deepgram('335d777d4ac72d907dcd4de4a28c9f58619c2ca1');        
        const response = await deepgram.transcription.preRecorded(
            { buffer: voice.buffer, mimetype: voice.mimetype },
            { language: info.language }
        )
        
        const resultPhrase = response.results.channels[0].alternatives[0].transcript.trim().toLowerCase().split(' ')
        const phrase = info.phrase.trim().toLowerCase()
            
        let counter = 0
        for (let i = 0; i < resultPhrase.length; i++) {
            if (phrase.indexOf(resultPhrase[i]) != -1) {                
                counter++                
            }
        }

        return Math.ceil(counter / phrase.split(' ').length * 100)
    }
}
