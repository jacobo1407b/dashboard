import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import {IUser} from '../types'

const userSchema = new Schema<IUser>({
    email:{type:String},
    password:{type:String},
    username:{type:String,defaultValue:"user"},
    logo:{type:String,defaultValue:""},
    avatar:{type:String,defaultValue:""},
    nameavatar:{type:String,defaultValue:""},
    namelogo:{type:String,defaultValue:""}
});

userSchema.methods.encryptPassword = async (password:string) => {
    const salt = await bcrypt.genSalt(15);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

userSchema.methods.matchPassword = async function (password:string){
    return await bcrypt.compare(password, this.password);
};

 export default model<IUser>('User', userSchema)