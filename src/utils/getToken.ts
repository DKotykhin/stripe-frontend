"use client";

export const getToken = (): string => {
    if (typeof window !== "undefined") {
        const localToken = localStorage.getItem("rememberMe");
        const sessionToken = sessionStorage.getItem("rememberMe");
        const token = localToken || sessionToken || "";
        return token;
    } else return "";
};
