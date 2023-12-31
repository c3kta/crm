import React, {useEffect} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useOrderActions} from "../../../hooks/useActions";

const Orders: React.FC = () => {
    const {orders, loading, error} = useTypedSelector(state => state.order);
    const {fetchOrders} = useOrderActions();

    useEffect(() => {
        fetchOrders()
    }, []);


    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            {orders.map(order => {
                return (
                    <>
                        <div className="mt-2 mb-2" key={order.id}>{order.title}</div>
                    </>
                );
            })}
        </>
    );
}

export default Orders;