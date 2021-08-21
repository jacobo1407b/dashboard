import { FunctionComponent } from 'react'
import { menuItems } from 'typesreact';
import Badge from '@material-ui/core/Badge'


interface Bandeja {
    bandeja: number
}
const Mesage: FunctionComponent<Bandeja> = ({ bandeja }) => {

    return (
        <Badge badgeContent={bandeja} color="secondary">
            <i className='bx bx-chat' />
        </Badge>
    )
}
export function setItems(bandeja: number): menuItems[] {
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

const arrayMes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function getParseHour(minut: number,hour:number): string{
    const arrayHour = [
        `12:${minut} am`,
        `1:${minut} am`,
        `2:${minut} am`,
        `3:${minut} am`,
        `4:${minut} am`,
        `5:${minut} am`,
        `6:${minut} am`,
        `7:${minut} am`,
        `8:${minut} am`,
        `9:${minut} am`,
        `10:${minut} am`,
        `11:${minut} am`,
        `12:${minut} am`,
        `1:${minut} pm`,
        `2:${minut} pm`,
        `3:${minut} pm`,
        `4:${minut} pm`,
        `5:${minut} pm`,
        `6:${minut} pm`,
        `7:${minut} pm`,
        `8:${minut} pm`,
        `9:${minut} pm`,
        `10:${minut} pm`,
        `11:${minut} pm`,
    ]
    return arrayHour[hour];
}


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
export const carouselRouter: string = `${senttingRouter}/carousel`;

export function getFecha(date: Date | number): string {
    var parseFecha = new Date(date);
    var hours = getParseHour(parseFecha.getMinutes(), parseFecha.getHours());
    var fulldate: string = `${parseFecha.getDay()} / ${arrayMes[parseFecha.getMonth() - 1]} / ${parseFecha.getFullYear()} - ${hours}`;
    return fulldate
}
