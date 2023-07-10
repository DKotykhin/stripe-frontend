import { ISendData, ISendRefund } from "types/basketTypes";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export const paymentIntent = async (
    data: ISendData,
    token: string
): Promise<{ url: string }> => {
    const res = await fetch(BACKEND_API + "/create-payment-intent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to create payment intent");
    }

    return res.json();
};

export const paymentRefund = async (
    data: ISendRefund,
    token: string
): Promise<any> => {
    const res = await fetch(BACKEND_API + "/payment-refund", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to refund payment");
    }

    return res.json();
};
