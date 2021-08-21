import { useEffect } from 'react'
import { counMessages, getBanner, getABout, getCarousel } from 'api'
import { getFeature, getNews, getGallery, getMsg } from 'api';
import { useDispatch } from 'react-redux';
import { IFeature, ICarousel, INews, IGallery, IMsg } from 'redux/myTypes'
import { bannerStorage, aboutStorage, featureStorage, newsStorage, galleryStorage, msgStorage,globalBandeja } from 'redux/accion/actionCreators'
import { carouselStorage } from 'redux/accion/actionCreators'


const useLoader = ()=>{
    const dispatch = useDispatch()



    useEffect(() => {
        (async () => {

            const featureArray: IFeature[] = []
            const arrayCarousel: ICarousel[] = [];
            const arraynews: INews[] = [];
            const arraygallery: IGallery[] = [];
            const tempArrayMsg: IMsg[] = [];

            const bann = await getBanner()
            const ticho = await getFeature();
            const carousel = await getCarousel();
            const news = await getNews();
            const gallery = await getGallery();
            const resmsg = await getMsg()

            const { url, text, text2, title, nameImage } = await getABout();

            ticho.map((values: any) => {
                const { id, title, icon, description } = values
                featureArray.push({ _id: id, title, icon, description });
                return true
            });
            carousel.map((poste: any) => {
                const { id, title, url, name, nameImages } = poste
                arrayCarousel.push({ _id: id, title, url, name, nameImages })
                return arrayCarousel
            });
            news.map((values) => {
                const { id, title, excerpt } = values
                arraynews.push({ _id: id, title, excerpt });
                return arraynews
            })
            gallery.map((val) => {
                const { id, url, name, nameImage } = val;
                arraygallery.push({ _id: id, url, name, nameImage });
                return arraygallery
            })
            resmsg.map((val) => {
                const { id, text, read, email, date } = val
                tempArrayMsg.push({ _id: id, text, read, email, date });
                return tempArrayMsg
            });

            
            
            dispatch(aboutStorage({ url, text, text2, title, nameImage }));
            dispatch(bannerStorage({ discount: bann.discount, label: bann.label, title: bann.title, text: bann.text }));
            dispatch(featureStorage(featureArray))
            dispatch(carouselStorage(arrayCarousel))
            dispatch(newsStorage(arraynews));
            dispatch(galleryStorage(arraygallery));
            dispatch(msgStorage(tempArrayMsg));
            dispatch(globalBandeja(await counMessages()))
        })()
    }, [dispatch]);

    return null
}

export default useLoader;