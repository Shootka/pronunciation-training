import mongoose from 'mongoose';
export declare type PronunciationDocument = Pronunciation & mongoose.Document;
export declare class Pronunciation {
    id: mongoose.Schema.Types.ObjectId;
    phrase: string;
}
export declare const PronunciationSchema: mongoose.Schema<Pronunciation, mongoose.Model<Pronunciation, any, any, any, any>, {}, {}, any, {}, "type", Pronunciation>;
