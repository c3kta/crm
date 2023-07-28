import React, {useEffect} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {fetchUsers} from "../../../store/action-creators/user";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";

const Team: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return (<>
            <h1>Идёт загрузка списка мастеров..</h1>
        </>);
    }

    if (error) {
        return (<>
            <h1>{error}</h1>
        </>);
    }

    return(
        <>
            {users.map((user, key) => {
                return <div className="mb-4 mt-2" key={key}>{user.name}</div>
            })}
        </>
    );
}

export default Team;
