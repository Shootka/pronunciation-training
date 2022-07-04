"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronunciationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const config_1 = require("@nestjs/config");
const { Deepgram } = require("@deepgram/sdk");
let PronunciationService = class PronunciationService {
    constructor(enPronunciation, frPronunciation, esPronunciation, configService) {
        this.enPronunciation = enPronunciation;
        this.frPronunciation = frPronunciation;
        this.esPronunciation = esPronunciation;
        this.configService = configService;
    }
    internationalPronunciation(lang) {
        switch (lang) {
            case 'en':
                return this.enPronunciation;
            case 'fr':
                return this.frPronunciation;
            case 'es':
                return this.esPronunciation;
        }
    }
    async allphrases(info) {
        const Pronunciation = this.internationalPronunciation(info.language);
        return await Pronunciation.find({});
    }
    async createphrase(info) {
        const Pronunciation = this.internationalPronunciation(info.language);
        const phrase = new Pronunciation(info);
        await phrase.save();
        return await Pronunciation.find({});
    }
    async deletephrase(info) {
        const Pronunciation = this.internationalPronunciation(info.language);
        await Pronunciation.findByIdAndDelete(info.id);
        return await Pronunciation.find({});
    }
    async result(voice, info) {
        const deepgram = new Deepgram(this.configService.get('DEEPGRAM_ACCESS_TOKEN'));
        const response = await deepgram.transcription.preRecorded({ buffer: voice.buffer, mimetype: voice.mimetype }, { language: info.language });
        const resultPhrase = response.results.channels[0].alternatives[0].transcript.trim().toLowerCase();
        const phrase = info.phrase.trim().toLowerCase().split(' ');
        let counter = 0;
        for (let i = 0; i < phrase.length; i++) {
            if (resultPhrase.indexOf(phrase[i]) != -1) {
                counter++;
            }
        }
        return Math.ceil(counter / phrase.length * 100);
    }
};
PronunciationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('en')),
    __param(1, (0, mongoose_1.InjectModel)('fr')),
    __param(2, (0, mongoose_1.InjectModel)('es')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        config_1.ConfigService])
], PronunciationService);
exports.PronunciationService = PronunciationService;
//# sourceMappingURL=pronunciation.service.js.map