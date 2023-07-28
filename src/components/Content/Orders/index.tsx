import React, {useEffect} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useOrderActions} from "../../../hooks/useActions";

const Orders: React.FC = () => {
    const {orders, loading, error} = useTypedSelector(state => state.order);
    const {fetchOrders} = useOrderActions();

    useEffect(() => {
        fetchOrders()
    }, []);

    if (loading) {
        return <h1>Идёт загрузка заказов..</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            {orders.map((order, key) => {
                return <div className="mt-2 mb-2" key={key}>{order.title}</div>
            })}
        </>
    );
}

export default Orders;