import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setItems } from 'utils';
import { menuItems } from 'typesreact';
import { useDispatch, useSelector } from 'react-redux';
import { userInitial } from 'redux/accion/actionCreators';
import { logiut } from 'api'


const MenuLeft = (): JSX.Element => {
    const dispatch = useDispatch()

    const bandejaReducer: any = useSelector<any>(state => state.bandejaReducer.bandeja)
    const itemsmenu = setItems(bandejaReducer)
    const [btnOpen, setBtnOpen] = useState<string>("bx-menu");
    const [open, setopen] = useState<boolean>(false);



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

    

    async function isLogout() {
        await logiut()
        dispatch(userInitial({
            autenticate: false,
            user: null
        }))
    }
    return (
        <div className={`sidebar ${open ? "open" : ""}`}>
            <div className="logo-details">
                <div className="logo_name">Dashboard</div>
                <i className={`bx ${btnOpen}`} id="btn" onClick={closeMenu} ></i>
            </div>
            <ul className="nav-list">
                {itemsmenu.map((items: menuItems) => (
                    <li key={items.id}>
                        <Link to={items.to}>
                            {items.icon}
                            <span className="links_name">{items.title}</span>
                        </Link>
                        <span className="tooltip">{items.title}</span>
                    </li>
                ))}
                <li className="profile">
                    <div className="logout-btn" onClick={isLogout} style={{ borderRadius: "12px", borderBottom: "5px", height: "45px" }}>
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