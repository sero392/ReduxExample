import * as actionTypes from '../actions/actionTypes'
import initStates from './initStates'

export default function changeCategoryReducer(state = initStates.changeCategoryState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
        default:
            return state
    }
}