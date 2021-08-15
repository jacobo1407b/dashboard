import { useState } from 'react'
import MenuLeft from "components/Menuleft"
import Button from "components/Button"
import MenuCustom from "Custom/MenuCustom"
import Routes from "routes"

const Layout = (): JSX.Element => {

    const [open, setOpen] = useState(false);
    return (

        <div>
            <MenuLeft />
            <div style={{ position: "fixed", right: "160px", zIndex: 4000, paddingTop: "5px" }}>
                <Button round onClick={() => setOpen(!open)}>
                    <i className='bx bx-cog' />
                </Button>
                {open && (<MenuCustom setOpen={setOpen} />)}
            </div>
            <div style={{ paddingLeft: "100px", paddingTop: "35px" }}>
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
            </section>
 */