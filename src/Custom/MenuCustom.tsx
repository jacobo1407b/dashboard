import { FunctionComponent } from 'react';
import { aboutRouter, featureRouter, carouselRouter,banerRouter, socialRoutes } from 'utils'
import Menuitem from "components/Menuitem"
import Menu from "components/Menu"
import AppsIcon from '@material-ui/icons/Apps';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ImageIcon from '@material-ui/icons/Image';
import PaletteIcon from '@material-ui/icons/Palette';
import Badge from '@material-ui/core/Badge';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
interface IMenucustom {
    setOpen: any
}

const MenuCustom: FunctionComponent<IMenucustom> = ({ setOpen }) => {

    const onClick = () => {
        setOpen(false)
    }
    return (
        <Menu>
            <>
                <Menuitem onClick={onClick}>
                    <>
                        <Link to={banerRouter}>
                            <IconButton color="inherit" onClick={onClick}>
                                <Badge color="secondary">
                                    <AppsIcon />
                                </Badge>
                            </IconButton>
                            Banner
                        </Link>
                    </>
                </Menuitem>
                <Menuitem onClick={onClick}>
                    <>
                        <Link to={aboutRouter}>
                            <IconButton color="inherit" onClick={onClick}>
                                <Badge color="secondary">
                                    <ApartmentIcon />
                                </Badge>
                            </IconButton>
                            About
                        </Link>
                    </>
                </Menuitem>
                <Menuitem onClick={onClick}>
                    <>
                        <Link to={featureRouter}>
                            <IconButton color="inherit" onClick={onClick}>
                                <Badge color="secondary">
                                    <PaletteIcon />
                                </Badge>
                            </IconButton>
                            Caracteristicas
                        </Link>
                    </>
                </Menuitem>
                <Menuitem onClick={onClick}>
                    <>
                        <Link to={carouselRouter}>
                            <IconButton color="inherit" onClick={onClick}>
                                <Badge color="secondary">
                                    <ImageIcon />
                                </Badge>
                            </IconButton>
                            Carousel
                        </Link>
                    </>
                </Menuitem>
                <Menuitem onClick={onClick}>
                    <>
                        <Link to={socialRoutes}>
                            <IconButton color="inherit" onClick={onClick}>
                                <Badge color="secondary">
                                    <FacebookIcon />
                                </Badge>
                            </IconButton>
                            Social
                        </Link>
                    </>
                </Menuitem>
            </>
        </Menu>
    )
}

export default MenuCustom