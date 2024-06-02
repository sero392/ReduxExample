import * as actionTypes from '../actions/actionTypes'
import initialState from './initStates'

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(s => s.product.id === action.payload.product.id)
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                    }
                    return cartItem;
                });
                return newState;
            }
            else {
                var mdl = action.payload;
                return [...state,mdl]
            }
            case actionTypes.REMOVE_FROM_CART:
                var removeState = state.filter(s => s.product.id !== action.payload.id);
                return removeState
        default:
            return state;
    }
}