import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { userName, address, email, delivery } from "./_validationTypes";

const schema = yup.object({
    userName,
    email,
    delivery,
    address,
});

export const BasketValidation: Object = {
    defaultValues: {
        userName: "",
        email: "",
        delivery: "",
        address: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
};
