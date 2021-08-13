import { FunctionComponent } from 'react'

interface IMenu {
    children?: JSX.Element
}

const Menu: FunctionComponent<IMenu> = ({ children }): JSX.Element => {

    return (
        <ul className="menu py-3 shadow-lg bg-base-100 rounded-box">
            {children}
        </ul>
    )
}

export default Menu