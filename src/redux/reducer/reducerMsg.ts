import * as actionTypes from "../acctionType"
import { MsgAccion, MsgState } from '../myTypes';

const initialState: MsgState = {
    msg: [
        {
            _id: "",
            text: "",
            read: false,
            email: "",
            date: Date.now()
        }
    ]
}
export const msgReducer = (state: MsgState = initialState, action: MsgAccion): MsgState => {
    switch (action.type) {
        case actionTypes.SET_MSG:
            return {
                ...state,
                msg: action.msg
            }
        default:
            return {
                ...state
            }
    }
}