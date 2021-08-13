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