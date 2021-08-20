import {combineReducers} from 'redux';
import {modalReducer} from './reducerModal';
import {userReducer} from './reducerUser';
import {bannerReducer} from './reducerBanner';
import {aboutReducer} from './reducerAbout';
import {featureReducer} from './reducerFeature';
import {carouselReducer} from './reducerCarousel'
import {newsReducer} from './reducerNews';
import {carouselGallery} from './reducerGallery';


export default combineReducers({ 
    modalReducer,
    userReducer,
    bannerReducer,
    aboutReducer,
    featureReducer,
    carouselReducer,
    newsReducer,
    carouselGallery
 })