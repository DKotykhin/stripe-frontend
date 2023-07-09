import { IStoreItem } from "types/storeTypes";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export const getStoreItem = async (): Promise<IStoreItem[]> => {
    const res = await fetch(BACKEND_API + '/store');

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
