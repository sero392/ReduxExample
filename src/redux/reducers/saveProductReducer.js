import * as actionTypes from '../actions/actionTypes'
import initStates from './initStates'

export default function saveProductReducer(state = initStates.savedProduct, action) {
    switch (action.type) {
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state
    }
}