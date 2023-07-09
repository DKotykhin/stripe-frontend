import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { userName, password, email } from "./_validationTypes";

const loginSchema = yup.object({
    email,
    password,
});

const registerSchema = yup.object({
    userName,
    email,
    password,
});

export const LoginFormValidation: Object = {
    defaultValues: {
        email: "",
        password: "",
        rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
    mode: "onChange",
};

export const RegisterFormValidation: Object = {
    defaultValues: {
        userName: "",
        email: "",
        password: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onChange",
};