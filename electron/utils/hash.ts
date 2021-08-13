import * as bcrypt from 'bcryptjs';

export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(15);
    const hash = bcrypt.hash(password, salt);
    return hash;
}

export const matchPassword = async (password: string,hash:string)=>{
    return await bcrypt.compare(password, hash);
}