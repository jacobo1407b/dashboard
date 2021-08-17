import * as actionTypes from "../acctionType"
import {AboutAccion,AboutState} from '../myTypes'

const initialState: AboutState = {
    about:{
        title:"",
        text:"",
        text2:"",
        url:"",
        nameImage:""
    }
}

export const aboutReducer = (state:AboutState = initialState, action:AboutAccion)=>{
    switch (action.type) {
        case actionTypes.SET_ABOUT:
          return {
            ...state,
            about: action.about
          }
         default:
             return {
                 ...state
             }
      }
}