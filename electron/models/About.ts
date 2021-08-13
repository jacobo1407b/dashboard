import { Schema, model } from 'mongoose';
import {IABout} from '../types'


// 2. Create a Schema corresponding to the document interface.
const aboutSchema = new Schema<IABout>({
    url: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    text2: {
        type: String,
        required: true
    },
    nameImage: {
        type: String,
        default: ""
    }
});

export default model('About',aboutSchema);
