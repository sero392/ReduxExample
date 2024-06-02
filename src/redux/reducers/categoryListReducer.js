import * as actionTypes from '../actions/actionTypes'
import initStates from './initStates'

export default function categoryListReducer(state = initStates.categories, action) {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state
    }
}