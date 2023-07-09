"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getLoginByToken } from "service/userService";
import { ILoginByTokenResponse, IUser } from "types/userTypes";

export const useAuth = (): IUser | undefined => {
    const [user, setUser] = useState<ILoginByTokenResponse>();
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const localToken = localStorage.getItem("rememberMe");
            const sessionToken = sessionStorage.getItem("rememberMe");
            const token = localToken || sessionToken || "";
            if (!token) router.push("/login");
            getLoginByToken(token)
                .then((data) => setUser(data))
                .catch((err) => router.push("/login"));
        }
    }, [router]);

    return user?.user;
};
