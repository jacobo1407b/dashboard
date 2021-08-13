

export interface IABout {
    url: string,
    title: string,
    text: string,
    text2: string,
    nameImage: string
}

export interface IBanner {
    discount: string,
    label: string,
    title: string,
    text: string
}

export interface ICarousel {
    url: string,
    title: string,
    name: string,
    nameImages: string
}

export interface IFeature{
    title:string,
    description:string,
    icon:string
}

export interface IGallery{
    url:string,
    name:string,
    nameImage:string
}

export interface IMsg{
    email:string,
    text:string,
    date:Date,
    read:boolean
}

export interface INews {
    title:string
    excerpt:string
}

export interface ISocial{
    icon:string,
    link:string
}

export type Cookie = {
    url: string,
    name: string,
    value: any
}

export type AboutRequest = {
    url?:string,
    nameImage?:string,
    title:string,
    text:string,
    text2?:string
}

export type BannerRequest = {
    discount?:string,
    label?:string,
    title?:string,
    text?:string
}

export type CarouselReq = {
    url:string,
    title:string,
    name:string,
    nameImages:string
}

export type MsgReq={
    email:string,
    text:string,
    date:Date,
    read:boolean
}

export type NewReq = {
    title:string,
    excerpt:string
}

export type socialReq = {
    icon:string,
    link:string
}