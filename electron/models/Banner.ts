import { Schema, model } from 'mongoose';
import {IBanner} from '../types/index';

const bannerSchema = new Schema<IBanner>({
    discount: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

export default model('Banner', bannerSchema);