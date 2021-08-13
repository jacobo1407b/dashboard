import { Schema, model } from 'mongoose';
import {ISocial} from '../types';

const socialSchema = new Schema<ISocial>({
    icon:{
        type:String,
        required:true 
    },
    link:{
        type:String,
        required:true
    }
});

export default model('Social',socialSchema);