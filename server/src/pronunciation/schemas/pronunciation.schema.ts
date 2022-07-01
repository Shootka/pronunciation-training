import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';


export type PronunciationDocument = Pronunciation & mongoose.Document;

@Schema()
export class Pronunciation {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    phrase: string;
}

export const PronunciationSchema = SchemaFactory.createForClass(Pronunciation);