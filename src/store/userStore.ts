import { create } from "zustand";

import { IUser } from "types/userTypes";

type UserStore = {
    userData: IUser;
    addUser: (item: IUser) => void;
    setEmpty: () => void;
};

export const useUserStore = create<UserStore>()((set) => ({
    userData: {
        _id: "",
        userName: "",
        email: "",
        createdAt: "",
    },
    addUser: (newUser: IUser) =>
        set(() => ({
            userData: newUser,
        })),

    setEmpty: () =>
        set(() => ({
            userData: {
                _id: "",
                userName: "",
                email: "",
                createdAt: "",
            },
        })),
}));
