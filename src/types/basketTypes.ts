export interface IBasket {
    id: string;
    itemName: string;
    price: number;
    quantity: number;
    weight?: number;
    image: string;
}

export interface IFormData {
    name: string;
    phone: string;
    text: string;
    delivery: string;
}

export interface ITelegramData {
    formData: IFormData;
    basketData: IBasket[]
}