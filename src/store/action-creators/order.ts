import {Dispatch} from "redux";
import {OrderAction, OrderActionTypes} from "../../types/order";
import axios from "axios";

export const fetchOrders = () => {
    return async (dispatch: Dispatch<OrderAction>) =>{
        try {
            dispatch({ type: OrderActionTypes.FETCH_ORDERS });
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch({ type: OrderActionTypes.FETCH_ORDERS_SUCCESS, payload: response.data });
        } catch (e) {
            dispatch({ type: OrderActionTypes.FETCH_ORDERS_ERROR, payload: "Ошибка загрузки"});
        }
    }
}