export interface IData {
    type?: string,
    text: string,
    open:boolean
}
export interface IAlert {
    children?:JSX.Element,
    duration?:number
}
export type inits ={
    globalData:IData,
    setGlobalData:any
}

export type routerType = {
    id:number,
    path:string,
    exact:boolean,
    components:JSX.Element
}

export type menuItems = {
    id:number,
    to:string,
    icon:JSX.Element,
    title:string
}
export interface IMsg{
    _id?:string,
    email:string,
    text:string,
    date:Date,
    read:boolean
}

export interface IGallery{
    _id?:string
    url:string,
    name:string,
    nameImage:string,
    text?:string
}

export interface dataLogin  {
    email:string,
    password:string
}

export type userdata ={
    nameavatar?:string,
    namelogo?:string,
    avatar?:string | undefined,
    logo?:string | undefined ,
    email:string,
    password?:string,
    username?:string | undefined,
    _id:string,
    id:string
}
export type authenticate = {
    user:userdata | null,
    autenticate:boolean
}

export interface IABout {
    _id: string,
    url: string,
    title: string,
    text: string,
    text2: string,
    nameImage: string
}

export type AboutRequest = {
    url?:string,
    nameImage?:string,
    title:string,
    text:string,
    text2?:string
}
export interface IBanner {
    _id:string,
    discount: string,
    label: string,
    title: string,
    text: string
}
export type BannerRequest = {
    discount?:string,
    label?:string,
    title?:string,
    text?:string
}