import {authenticate,userdata} from 'typesreact'
import { IFeature,ICarousel } from 'redux/myTypes';
//types
import {IABout,AboutRequest,IBanner,BannerRequest} from 'typesreact'
const main = window.require("electron").remote;
const ma = main.require("./initial");

interface Ilogin {
    login:boolean,
    msg:string,
    user:{}
}
export async function isAuthenticate(): Promise<authenticate>{
    //login('test@test.com','1234567890')
    return await ma.default.isAuthenticate()
}

export async function login(email:string, password:string): Promise<Ilogin> {
    return await ma.default.login(email,password)
}

export async function logiut():Promise<void>{
    await ma.default.logout();
}

export async function updateUsername(username:string, id: string): Promise<userdata>{
    return await ma.default.updateUsername(username,id);
}

export async function updateEmail(id:string,email:string):Promise<userdata>{
    return await ma.default.updateEmail(id,email)
}
export async function updatePassword(id:string,password:string):Promise<boolean>{
    return await ma.default.updatePassword(id,password)
}
/** about **/
export async function getABout():Promise<IABout> {
    return await ma.default.getAbout()
}

export async function editAbout(params:AboutRequest):Promise<IABout> {
    return await ma.default.editAbout(params);
}

/** Banner **/

export async function getBanner(): Promise<IBanner> {
    return await ma.default.getBanner();
}

export async function editBanner(paramas:BannerRequest): Promise<IBanner> {
    return await ma.default.editBanner(paramas)
}
/**  caracteristicas **/
export async function getFeature(): Promise<IFeature[]>{
    const reature: IFeature[] = await ma.default.getFeature();
    return reature;
}

export async function editFeature(id: string, data:IFeature): Promise<IFeature>{
    return await ma.default.editFeature(id,data)
}
/** Carousel **/

export async function getCarousel(): Promise<ICarousel[]>{
    return await ma.default.getCarousel();
}

export async function editCarousel(id:string,data:ICarousel): Promise<ICarousel>{
    return await ma.default.editCarousel(id,data)
}
/** msg **/

export async function counMessages(): Promise<number>{
    return await ma.default.countMsg();
}