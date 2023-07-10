import { IBasket } from "./basketTypes";

export interface IUserOrder {
    _id: string;
    userId: string;
    payment_intent: string;
    orderSum: number;
    orderQuantity: number;
    averageSum: number;
    orderData: IBasket[];
    createdAt: string;
    address: string;
    comment: string;
    deliveryWay: string;
    refund?: {
        status: boolean;
        amount: number;
    };
}

interface IOrdersStatistic {
    totalCount: number;
    totalSum: number;
    averageSum: number;
}

export interface IUserOrderResponse {
    orders: IUserOrder[];
    statistic: IOrdersStatistic;
    message?: string;
}
