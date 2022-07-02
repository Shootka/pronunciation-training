import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PronunciationDocument } from './schemas/pronunciation.schema';
import { CreatePhrases } from './dto/create-phrase.dto';
import { GetPhrases } from './dto/get-phrases.dto';
import { DeletePhrases } from './dto/delete-phrase.dto';
import { SpeechClient, protos } from '@google-cloud/speech';
import { readFileSync } from 'fs';


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
        return 'Good'
    }

    async deletephrase(info: DeletePhrases) {
        const Pronunciation = this.internationalPronunciation(info.language)
        await Pronunciation.findByIdAndDelete(info.id)
        return 'Good'
    }

    async result(voice: Express.Multer.File) {

        const client = new SpeechClient();
        
        // The audio file's encoding, sample rate in hertz, and BCP-47 language code
        const audio = {
            content: readFileSync('aud.mp3').toString('base64'),
        };
        const config = {
            encoding: 1,
            sampleRateHertz: 8000,
            languageCode: 'en-US',
        };
        const request: protos.google.cloud.speech.v1.IRecognizeRequest = {
            audio: audio,
            config: config,
        };

        // Detects speech in the audio file
        const [response] = await client.recognize(request);
        console.log(response.results);
        // const [operation] = await client.longRunningRecognize(request);

// Get a Promise representation of the final result of the job
// const [response] = await operation.promise();
// const transcription = response.results
// console.log(transcription);

        
        // const transcription = response.results
        //     .map(result => result.alternatives[0].transcript)
        //     .join('\n');
        // console.log(`Transcription: ${transcription}`);
        return 0

    }
}
