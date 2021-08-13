import { Schema, model } from 'mongoose'
import {IGallery} from '../types';

const gallerySchema = new Schema<IGallery>({
    url:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    nameImage:{
        type:String,
        required:true
    }
})

export default model('Gallery',gallerySchema);