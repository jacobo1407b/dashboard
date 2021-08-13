import { useState } from 'react';
import { Link } from 'react-router-dom';

import {itemsmenu} from 'utils'
import {menuItems} from 'typesreact'

const MenuLeft = (): JSX.Element => {

    const [btnOpen, setBtnOpen] = useState<string>("bx-menu");
    const [open, setopen] = useState<boolean>(true);


    const closeMenu = () => {
        setopen(!open)
        menuBtnChange()
    }
    function menuBtnChange() {
        if (!open) {
            setBtnOpen("bx-menu-alt-right")
        } else {
            setBtnOpen("bx-menu")
        }
    }
    return (
        <div className={`sidebar ${open ? "open" : ""}`}>
            <div className="logo-details">
                <div className="logo_name">Dashboard</div>
                <i className={`bx ${btnOpen}`} id="btn" onClick={closeMenu} ></i>
            </div>
            <ul className="nav-list">
                {itemsmenu.map((items:menuItems)=>(
                    <li key={items.id}>
                        <Link to={items.to}>
                        {items.icon}
                        <span className="links_name">{items.title}</span>
                    </Link>
                    <span className="tooltip">{items.title}</span>
                    </li>
                ))}
                <li className="profile">
                    <div className="logout-btn" style={{borderRadius:"12px", borderBottom:"5px", height:"45px"}}>
                    <i className='bx bx-log-out'></i>
                        <span className="links_name">Logout</span>
                    <span className="tooltip">Logout</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MenuLeft;