import * as actionTypes from "../acctionType"
import {SocialAccion,SocialState} from '../myTypes';

const initialState: SocialState = {
    social:[
        {
            _id:"",
            icon:"",
            link:""
        }
    ]
};

export const socialReducer = (state:SocialState = initialState, action:SocialAccion)=>{
    switch (action.type) {
        case actionTypes.SET_SOCIAL:
          return {
            ...state,
            social: action.social
          }
         default:
             return {
                 ...state
             }
      }
}