import React from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Team: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);

    return(
        <>
        </>
    );
}

export default Team;