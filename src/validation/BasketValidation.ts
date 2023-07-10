import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { userName, address, email, deliveryWay, comment } from "./_validationTypes";

const schema = yup.object({
    userName,
    email,
    deliveryWay,
    address,
    comment,
});

export const BasketValidation: Object = {   
    resolver: yupResolver(schema),
    mode: "onBlur",
};
