import { IUserLogin, IUserRegister, IUserResponse } from "types/userTypes";

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
        throw new Error("Failed to fetch data");
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
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
