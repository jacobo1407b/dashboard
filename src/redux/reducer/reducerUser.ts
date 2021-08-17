import * as actionTypes from "../acctionType"
import {UserAccion,UserState} from '../myTypes';

const initialState: UserState = {
    user:{
        autenticate:false,
        user:{
            email:"",
            username:"",
            _id:""
        }
    }
}

export const userReducer = (state: UserState = initialState,action: UserAccion): UserState => {
    switch (action.type) {
      case actionTypes.USER_INITIAL:
        return {
          ...state,
          user: action.user
        }
       default:
           return {
               ...state
           }
    }
  }