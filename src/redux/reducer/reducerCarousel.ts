import * as actionTypes from "../acctionType";
import {CarouselAccion,CaouselState} from '../myTypes';

const initialState: CaouselState = {
    carousel:[
        {
            _id:"",
            url:"",
            title:"",
            name:"",
            nameImages:""
        }
    ]
}

export const carouselReducer = (state:CaouselState=initialState,action:CarouselAccion)=>{
    switch (action.type) {
        case actionTypes.SET_CAROUSEL:
          return {
            carousel:action.carousel
          }
         default:
             return {
                 ...state
             }
      }
}