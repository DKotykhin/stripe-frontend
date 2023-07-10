export interface IBasket {
    itemId: string;
    itemName: string;
    price: number;
    quantity: number;
    weight?: number;
    image: string;
}

export interface IFormData {
    userName: string;
    email: string;
    deliveryWay: string;
    address: string;
    comment?: string;
}

export interface ITelegramData {
    formData: IFormData;
    basketData: IBasket[];
}

export interface ISendData {
    userData: {
        deliveryWay: string;
        address: string;
        comment?: string;
    };
    orderData: IBasket[];
}

export interface ISendRefund {
    orderId: string;
    amount: number;
}
