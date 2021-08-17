import {FunctionComponent} from 'react'
import { menuItems } from 'typesreact';
import Badge from '@material-ui/core/Badge'
import { IGallery } from 'typesreact';

interface Bandeja {
    bandeja:number
}
const Mesage: FunctionComponent<Bandeja> = ({bandeja}) => {

    return (
        <Badge badgeContent={bandeja} color="secondary">
            <i className='bx bx-chat' />
        </Badge>
    )
}
export function setItems(bandeja:number):menuItems[]{
   const itemsmenu: menuItems[] = [
        {
            id: 1,
            to: "/",
            icon: <i className='bx bx-grid-alt' />,
            title: "Dashboard"
        },
        {
            id: 2,
            to: "/profile",
            icon: <i className='bx bx-user' />,
            title: "Perfil"
        },
        {
            id: 3,
            to: "/messages",
            icon: <Mesage bandeja={bandeja} />,
            title: "Mensajes"
        },
        {
            id: 4,
            to: "/gallery",
            icon: <i className='bx bx-folder' />,
            title: "Galería"
        },
        {
            id: 5,
            to: "/news",
            icon: <i className='bx bx-heart' />,
            title: "Noticias"
        }
    ]
    return itemsmenu
}

/*
*/
export const ejemploDataCarousel: IGallery[] = [
    {
        _id: "qwert",
        url: "https://cdn.pixabay.com/photo/2021/08/07/06/19/houses-6527892_960_720.jpg",
        name: "undefinen",
        nameImage: "foto.png"
    },
    {
        _id: "qwert",
        url: "https://cdn.pixabay.com/photo/2021/08/07/06/19/houses-6527892_960_720.jpg",
        name: "undefinen",
        nameImage: "foto.png"
    },
    {
        _id: "qwert",
        url: "https://cdn.pixabay.com/photo/2021/08/07/06/19/houses-6527892_960_720.jpg",
        name: "undefinen",
        nameImage: "foto.png"
    },
    {
        _id: "qwert",
        url: "https://cdn.pixabay.com/photo/2021/08/07/06/19/houses-6527892_960_720.jpg",
        name: "undefinen",
        nameImage: "foto.png"
    }
]

/**
 * rutas
 */
export const mainRouter: string = "/";
export const msgRouter: string = '/messages';
export const banerRouter: string = "/banner";
export const galleryRouter: string = "/gallery";
export const newsRouter: string = "/news";
export const profileRouter: string = "/profile";
const senttingRouter: string = "/settings";
export const aboutRouter: string = `${senttingRouter}/about`;
export const featureRouter: string = `${senttingRouter}/features`;
export const carouselRouter: string = `${senttingRouter}/carousel`
