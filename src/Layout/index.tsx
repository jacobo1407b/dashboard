import { useState, useEffect } from 'react'
import { counMessages, getBanner, getABout,getCarousel } from 'api'
import { getFeature,getNews } from 'api';
import { useDispatch } from 'react-redux';
import {IFeature,ICarousel,INews} from 'redux/myTypes'
import { bannerStorage, aboutStorage,featureStorage,newsStorage } from 'redux/accion/actionCreators'
import {carouselStorage} from 'redux/accion/actionCreators'
import MenuLeft from "components/Menuleft"
import Button from "components/Button"
import MenuCustom from "Custom/MenuCustom"
import Routes from "routes"

const Layout = (): JSX.Element => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [bandeja, setBandeja] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const bann = await getBanner()
            const { url, text, text2, title, nameImage } = await getABout();
            dispatch(aboutStorage({ url, text, text2, title, nameImage }))
            dispatch(bannerStorage({ discount: bann.discount, label: bann.label, title: bann.title, text: bann.text }))
            setBandeja(await counMessages())

        })()
    }, [dispatch]);

    useEffect(() => {
        (async()=>{
            const featureArray: IFeature[] = []
            const ticho = await getFeature();
            ticho.map((values:any)=>{
                const {id,title,icon,description} = values
                featureArray.push({_id:id,title,icon,description});
                return true
            })
            dispatch(featureStorage(featureArray))
        })()
    }, [dispatch]);

    useEffect(() => {
        (async()=>{
            const arrayCarousel: ICarousel[] = [];
           const carousel = await getCarousel();
           carousel.map((poste:any)=>{
               const {id,title,url,name,nameImages} = poste
               arrayCarousel.push({_id:id,title,url,name,nameImages})
               return arrayCarousel
           })
           dispatch(carouselStorage(arrayCarousel))
        })()
    }, [dispatch]);

    useEffect(() => {
        (async()=>{
            const arraynews: INews[] = [];
            const news = await getNews();
            news.map((values)=>{
                const {id,title,excerpt} = values
                arraynews.push({_id:id,title,excerpt});
                return arraynews
            })
            dispatch(newsStorage(arraynews));
        })()
    }, [dispatch]);

    return (
        <div>
            <MenuLeft bandeja={bandeja} />
            <div style={{ position: "fixed", right: "160px", zIndex: 4000, paddingTop: "5px" }}>
                <Button primary round onClick={() => setOpen(!open)}>
                    <i className='bx bx-cog' />
                </Button>
                {open && (<MenuCustom setOpen={setOpen} />)}
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