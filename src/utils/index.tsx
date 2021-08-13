import { menuItems } from 'typesreact';
import Badge from '@material-ui/core/Badge'

const Mesage = () => {
    return (
        <Badge badgeContent={4} color="secondary">
            <i className='bx bx-chat' />
        </Badge>
    )
}
export const itemsmenu: menuItems[] = [
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
        title: "User"
    },
    {
        id: 3,
        to: "/messages",
        icon: <Mesage />,
        title: "Messages"
    },
    {
        id: 4,
        to: "/gallery",
        icon: <i className='bx bx-folder' />,
        title: "Gallery"
    },
    {
        id: 5,
        to: "/news",
        icon: <i className='bx bx-heart' />,
        title: "News"
    },
    {
        id: 5,
        to: "/banner",
        icon: <i className='bx bx-cog' />,
        title: "Setting"
    }
]