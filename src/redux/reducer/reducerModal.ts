import * as actionTypes from "../acctionType"
import {ModalAccion,ModalState} from '../myTypes';

const initialState: ModalState = {
    modal:{
        title:"",
        children:null,
        open:false
    }
}

export const modalReducer = (state: ModalState = initialState,action: ModalAccion): ModalState => {
    switch (action.type) {
      case actionTypes.OPEN_MODAL:
        return {
          ...state,
          modal: state.modal
        }
       default:
           return {
               ...state
           }
    }
  }