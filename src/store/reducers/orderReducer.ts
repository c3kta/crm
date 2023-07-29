import {OrderAction, OrderActionTypes, OrderState} from "../../types/order";

const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null
}
export const orderReducer = (state = initialState, action: OrderAction): OrderState => {
    switch (action.type) {
        case OrderActionTypes.FETCH_ORDERS:
            return { loading: true, error: null, orders: []}
        case OrderActionTypes.FETCH_ORDERS_SUCCESS:
            return { loading: true, error: null, orders: action.payload}
        case OrderActionTypes.FETCH_ORDERS_ERROR:
            return { loading: true, error: action.payload, orders: []}
        default:
            return state;
    }
}