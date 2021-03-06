//modal
export interface IModal {
    title: string,
    children: JSX.Element | null,
    open: boolean,
    params?: {}
}

export type ModalState = {
    modal: IModal
}

export type ModalAccion = {
    type: string,
    modal: IModal
}
//modal
export type DispatchModal = (args: ModalAccion) => ModalAccion
//auth
interface userdata {
    nameavatar?: string,
    namelogo?: string,
    email: string,
    password?: string,
    username?: string | undefined,
    _id: string,
    avatar?: string | undefined,
    logo?: string | undefined
}
export interface IUser {
    autenticate: boolean,
    user: userdata | any
}
export type UserState = {
    user: IUser
}
export type UserAccion = {
    type: string,
    user: IUser
}
//banner
export interface IBanner {
    discount: string,
    label: string,
    title: string,
    text: string
}
export type BannerState = {
    banner: IBanner
}

export type BannerAccion = {
    type: string,
    banner: IBanner
}
//about
export interface IABout {
    url: string,
    title: string,
    text: string,
    text2: string,
    nameImage: string
}
export type AboutState = {
    about: IABout
}
export type AboutAccion = {
    type: string,
    about: IABout
}
//features
export interface IFeature {
    _id: string,
    title: string,
    description: string,
    icon: string
}
export type FeatureState = {
    feature: IFeature[]
}
export type FeatureAccion = {
    type: string,
    feature: IFeature[]
};
//carousel
export interface ICarousel {
    id?: string,
    _id: string,
    url: string,
    title: string,
    name: string,
    nameImages: string,
    text?: string,
    key?: number
}

export type CaouselState = {
    carousel: ICarousel[];
}

export type CarouselAccion = {
    type: string,
    carousel: ICarousel[]
}
//news
export interface INews {
    id?: string,
    _id?: string
    title: string
    excerpt: string
}

export type NewState = {
    news: INews[];
}

export type NewsAccion = {
    type: string,
    news: INews[]
}
//gallery
export interface IGallery {
    _id?: string,
    id?: string
    url: string,
    name: string,
    nameImage: string
}

export type GalleryState = {
    gallery: IGallery[]
}
export type GalleryAccion = {
    type: string,
    gallery: IGallery[]
}
//msg
export interface IMsg {
    id?:string,
    _id?: string
    email: string,
    text: string,
    date: number | Date,
    read: boolean
}

export type MsgState = {
    msg: IMsg[];
}
export type MsgAccion = {
    type: string,
    msg: IMsg[]
};

//bandeja

export type BandejaState = {
    bandeja:number
}
export type BandejaAccion = {
    type:string,
    bandeja:number
}
//social
export interface ISocial{
    _id?:string,
    id?:string,
    icon:string,
    link:string
}

export type SocialState = {
    social:ISocial[]
}
export type SocialAccion = {
    type:String,
    social:ISocial[]
}