import { Schema, model } from 'mongoose'
import {IMsg} from '../types';

const msgSchema = new Schema<IMsg>({
    email:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    read:{
        type:Boolean,
        default:false
    }
});

export default model('Msg',msgSchema);