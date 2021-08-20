import * as actionTypes from "../acctionType";
import { GalleryAccion, GalleryState } from '../myTypes'

const initialState: GalleryState = {
    gallery: [
        {
            _id: "",
            name: "",
            nameImage: "",
            url: ""
        }
    ]
}

export const carouselGallery = (state: GalleryState = initialState, action: GalleryAccion) => {
    switch (action.type) {
        case actionTypes.SET_GALLERY:
            return {
                gallery: action.gallery
            }
        default:
            return {
                ...state
            }
    }
}
