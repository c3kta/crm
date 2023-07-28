import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {AppDispatch} from "../store";
import * as UserActionCreators from "../store/action-creators/user";

export const useActions = () => {
    const dispatch : AppDispatch= useDispatch();
    return bindActionCreators(UserActionCreators, dispatch);
}
