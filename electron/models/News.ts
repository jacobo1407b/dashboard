import { Schema, model } from 'mongoose';
import {INews} from '../types';


const newsSchema = new Schema<INews> ({
    title:{
        type:String,
        default:""
    },
    excerpt:{
        type:String,
        default:""
    }
})


export default model('News',newsSchema);