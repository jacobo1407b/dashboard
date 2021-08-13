import { FunctionComponent } from 'react'


interface IMenuitem {
    children?: JSX.Element,
    onClick?: any,
    href?:string
}
const Menuitem: FunctionComponent<IMenuitem> = ({ children,onClick,href}): JSX.Element => {
    return (
        <li onClick={onClick}>
            <a href={href}>
                {children}
            </a>
        </li>
    )
}

export default Menuitem;