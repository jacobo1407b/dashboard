import MenuLeft from "components/Menuleft"
import Routes from "routes"
const Layout = () => {
    return (

        <div>
            <MenuLeft />
            <div style={{paddingLeft:"100px", paddingTop:"30px"}}>
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