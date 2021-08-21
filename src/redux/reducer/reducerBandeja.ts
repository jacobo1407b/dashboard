import * as actionTypes from "../acctionType";
import { BandejaAccion, BandejaState } from '../myTypes';

const initialState: BandejaState = {
    bandeja: 0
}

export const bandejaReducer = (state: BandejaState = initialState, action: BandejaAccion) => {
    switch (action.type) {
        case actionTypes.BANDEJA:
            return {
                ...state,
                bandeja: action.bandeja
            }
        default:
            return {
                ...state
            }
    }
}