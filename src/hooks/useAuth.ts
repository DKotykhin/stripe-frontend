"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUserStore } from "store/userStore";
import { getLoginByToken } from "service/userService";

import { ILoginByTokenResponse, IUser } from "types/userTypes";

export const useAuth = (): IUser | undefined => {
    const [user, setUser] = useState<ILoginByTokenResponse>();
    const router = useRouter();
    const { addUser } = useUserStore();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const localToken = localStorage.getItem("rememberMe");
            const sessionToken = sessionStorage.getItem("rememberMe");
            const token = localToken || sessionToken || "";
            getLoginByToken(token)
                .then((data) => {
                    setUser(data);
                    addUser(data.user);
                })
                .catch(() => setUser(undefined));
        }
    }, [addUser, router]);

    return user?.user;
};
