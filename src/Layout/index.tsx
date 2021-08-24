import { useState } from 'react';
import Loader from 'components/Loader';
import MenuLeft from "components/Menuleft";
import Button from "components/Button";
import MenuCustom from "Custom/MenuCustom";
import Routes from "routes";
import useLoaders from 'config/useLoader';
import CachedIcon from '@material-ui/icons/Cached';

//bandejaReducer
const Layout = (): JSX.Element => {

    const [open, setOpen] = useState(false);
    const {load,setLoad} = useLoaders();

    return (
        <div>
            <Loader loading={load}/>
            <MenuLeft />
            <div style={{ position: "fixed", right: "160px", zIndex: 4000, paddingTop: "5px" }}>
                <Button primary round onClick={() => setOpen(!open)}>
                    <i className='bx bx-cog' />
                </Button>
                {open && (<MenuCustom setOpen={setOpen} />)}
            </div>
            <div style={{ position: "fixed", right: "80px", zIndex: 4000, paddingTop: "5px" }}>
                <Button primary round onClick={() => setLoad(true)}>
                    <CachedIcon style={{ fontSize: 20 }}/>
                </Button>
            </div>
            <div style={{ paddingLeft: "100px", paddingTop: "35px" }} >
                <Routes />
            </div>
        </div>
    )
}

export default Layout
/***
 * <section className="home-section">
                <div className="text">
                    <Routes />
                </div>
            </section>newsReducer

 */