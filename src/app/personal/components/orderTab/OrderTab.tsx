import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

import { Typography } from '@mui/material';

import { userOrders } from 'service/userService';
import { IUserOrderResponse } from 'types/orderTypes';
import Spinner from 'components/spinner/Spinner';
import OrderTable from './OrderTable';

const OrderTab: React.FC = () => {

    const [orders, setOrders] = useState<IUserOrderResponse>();
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localToken = localStorage.getItem("rememberMe");
            const sessionToken = sessionStorage.getItem("rememberMe");
            const token = localToken || sessionToken || "";
            if (!token) router.push("/login");
            userOrders(token)
                .then(data => setOrders(data))
                .catch(err => router.push("/login"));
        }
    }, [router]);

    return orders ? (
        <>
            <Typography>{"Order list"}</Typography>
            {orders.orders.length
                ?
                <>
                    {orders.orders.map(order => (
                        <OrderTable key={order._id} orders={order} />
                    ))}
                    <Typography>{"Total orders: "} {orders.statistic.totalCount}</Typography>
                    <Typography>{"Total sum: "} {'$'}{orders.statistic.totalSum}</Typography>
                    <Typography>{"Average sum: "} {'$'}{orders.statistic.averageSum}</Typography>
                </>
                :
                <Typography>{"You don't have any order yet"}</Typography>
            }
        </>
    ) : <Spinner />;
};

export default OrderTab;