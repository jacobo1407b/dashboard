import * as actionTypes from "../acctionType"
import { NewsAccion, NewState } from '../myTypes'

const initialState: NewState = {
    news: [
        {
            _id: "",
            title: "",
            excerpt: ""
        }
    ]
}

export const newsReducer = (state: NewState = initialState, action: NewsAccion) => {
    switch (action.type) {
        case actionTypes.SET_NEWS:
            return {
                news: action.news
            }
        default:
            return {
                ...state
            }
    }
}