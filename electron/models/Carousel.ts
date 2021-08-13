import { Schema, model } from 'mongoose';
import {ICarousel} from '../types'


const carouselSchema = new Schema<ICarousel>({
    url: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nameImages: {
        type: String,
        required: true
    }
})

export default model('Carousel', carouselSchema)