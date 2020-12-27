import CartActionTypes from './cart.types'

export const toggleList = () => ({
    type: CartActionTypes.TOGGLE_LIST
})

export const list = (list) => ({
    type: CartActionTypes.TODO_LIST,
    payload: list
})