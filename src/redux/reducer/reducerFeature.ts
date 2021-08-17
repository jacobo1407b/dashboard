import * as actionTypes from "../acctionType";
import {FeatureAccion,FeatureState} from '../myTypes';

const initialState: FeatureState = {
    feature:[
        {
            _id:"",
            icon:"",
            title:"",
            description:""
        }
    ]
}

export const featureReducer = (state:FeatureState = initialState,action:FeatureAccion)=>{
    switch (action.type) {
        case actionTypes.SET_FEATURE:
          return {
              feature:action.feature
          }
         default:
             return {
                 ...state
             }
      }
}