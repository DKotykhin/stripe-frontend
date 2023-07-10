import { create } from "zustand";

import { IBasket } from "types/basketTypes";

type BasketStore = {
    basketData: IBasket[];
    addItem: (item: IBasket) => void;
    removeItem: (id: string) => void;
    quantityDec: (id: string) => void;
    quantityInc: (id: string) => void;
    setEmpty: () => void;
};

export const useBasketStore = create<BasketStore>()((set) => ({
    basketData: [],
    addItem: (newItem: IBasket) =>
        set((state) => {
            const itemIndex = state.basketData.findIndex(
                (item) => item.itemId === newItem.itemId
            );
            if (itemIndex < 0) {
                return { basketData: [...state.basketData, newItem] };
            } else
                return {
                    basketData: state.basketData.map((item, index) =>
                        index === itemIndex
                            ? {
                                  ...item,
                                  quantity: item.quantity + newItem.quantity,
                              }
                            : item
                    ),
                };
        }),
    removeItem: (id: string) =>
        set((state) => ({
            basketData: state.basketData.filter((item) => item.itemId !== id),
        })),
    quantityDec: (id: string) =>
        set((state) => ({
            basketData: state.basketData.map((item) =>
                item.itemId === id
                    ? {
                          ...item,
                          quantity:
                              item.quantity > 1
                                  ? (item.quantity -= 1)
                                  : (item.quantity = 1),
                      }
                    : item
            ),
        })),
    quantityInc: (id: string) =>
        set((state) => ({
            basketData: state.basketData.map((item) =>
                item.itemId === id
                    ? {
                          ...item,
                          quantity: (item.quantity += 1),
                      }
                    : item
            ),
        })),
    setEmpty: () => set(() => ({ basketData: [] })),
}));
