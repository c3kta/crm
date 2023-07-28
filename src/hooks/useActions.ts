import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {AppDispatch} from "../store";
import * as UserActionCreators from "../store/action-creators/user";
import * as OrderActionCreators from "../store/action-creators/order";

export const useUserActions = () => {
    const dispatch: AppDispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch);
}

export const useOrderActions = () => {
    const dispatch: AppDispatch = useDispatch();
    return bindActionCreators(OrderActionCreators, dispatch)
}