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
exports.PronunciationController = void 0;
const common_1 = require("@nestjs/common");
const pronunciation_service_1 = require("./pronunciation.service");
const create_phrase_dto_1 = require("./dto/create-phrase.dto");
const get_phrases_dto_1 = require("./dto/get-phrases.dto");
const delete_phrase_dto_1 = require("./dto/delete-phrase.dto");
const platform_express_1 = require("@nestjs/platform-express");
let PronunciationController = class PronunciationController {
    constructor(pronunciationService) {
        this.pronunciationService = pronunciationService;
    }
    async allphrases(info) {
        return this.pronunciationService.allphrases(info);
    }
    async createphrase(info) {
        return this.pronunciationService.createphrase(info);
    }
    async deletephrase(info) {
        return this.pronunciationService.deletephrase(info);
    }
    async result(voice, info) {
        return this.pronunciationService.result(voice, info);
    }
};
__decorate([
    (0, common_1.Get)('allphrases/:language'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_phrases_dto_1.GetPhrases]),
    __metadata("design:returntype", Promise)
], PronunciationController.prototype, "allphrases", null);
__decorate([
    (0, common_1.Post)('createphrase'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phrase_dto_1.CreatePhrases]),
    __metadata("design:returntype", Promise)
], PronunciationController.prototype, "createphrase", null);
__decorate([
    (0, common_1.Delete)('deletephrase/:language/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_phrase_dto_1.DeletePhrases]),
    __metadata("design:returntype", Promise)
], PronunciationController.prototype, "deletephrase", null);
__decorate([
    (0, common_1.Post)('result'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('voice')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_phrase_dto_1.CreatePhrases]),
    __metadata("design:returntype", Promise)
], PronunciationController.prototype, "result", null);
PronunciationController = __decorate([
    (0, common_1.Controller)('pronunciation'),
    __metadata("design:paramtypes", [pronunciation_service_1.PronunciationService])
], PronunciationController);
exports.PronunciationController = PronunciationController;
//# sourceMappingURL=pronunciation.controller.js.map