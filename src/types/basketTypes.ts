export interface IBasket {
    id: string;
    itemName: string;
    price: number;
    quantity: number;
    weight?: number;
    image: string;
}

export interface IFormData {
    userName: string;
    email: string;
    delivery: string;
    address: string;
}

export interface ITelegramData {
    formData: IFormData;
    basketData: IBasket[];
}