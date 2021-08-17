import * as actionTypes from "../acctionType"
import {BannerAccion,BannerState} from '../myTypes';

const initialState: BannerState = {
    banner:{
        discount:"",
        label:"",
        title:"",
        text:""
    }
}

export const bannerReducer = (state: BannerState = initialState, action:BannerAccion) => {
    switch (action.type) {
        case actionTypes.SET_BANNER:
          return {
            ...state,
            banner: action.banner
          }
         default:
             return {
                 ...state
             }
      }
}