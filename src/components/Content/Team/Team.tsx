import React, {useEffect} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const Team: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
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
