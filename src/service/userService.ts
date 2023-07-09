import { IUserOrderResponse } from "types/orderTypes";
import { ILoginByTokenResponse, IUserLogin, IUserRegister, IUserResponse } from "types/userTypes";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export const userLogin = async (data: IUserLogin): Promise<IUserResponse> => {
    const res = await fetch(BACKEND_API + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to login");
    }

    return res.json();
};

export const userRegister = async (
    data: IUserRegister
): Promise<IUserResponse> => {
    const res = await fetch(BACKEND_API + "/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to register");
    }

    return res.json();
};

export const userOrders = async (
    token: string
): Promise<IUserOrderResponse> => {
    const res = await fetch(BACKEND_API + "/user/orders", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to get orders");
    }

    return res.json();
};

export const getLoginByToken = async (
    token: string
): Promise<ILoginByTokenResponse> => {
    const res = await fetch(BACKEND_API + "/user/me", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to get token");
    }

    return res.json();
};