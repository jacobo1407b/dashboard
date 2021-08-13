import { Schema, model } from 'mongoose';
import {IFeature} from '../types';

const featureSchema = new Schema<IFeature>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    }
})

export default model('Feature',featureSchema);