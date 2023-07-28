export interface OrderState {
    orders: any[],
    loading: boolean,
    error: null | string
}

export enum OrderActionTypes {
    FETCH_ORDERS = "FETCH_ORDERS",
    FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS",
    FETCH_ORDERS_ERROR = "FETCH_ORDERS_ERROR",
}

export interface FetchOrdersAction {
    type: OrderActionTypes.FETCH_ORDERS
}

export interface FetchOrdersSuccessAction {
    type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
    payload: any[]
}

export interface FetchOrdersErrorAction {
    type: OrderActionTypes.FETCH_ORDERS_ERROR,
    payload: string
}

export type OrderAction = FetchOrdersAction | FetchOrdersSuccessAction | FetchOrdersErrorAction;