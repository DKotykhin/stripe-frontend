import * as yup from "yup";

export const userName = yup
    .string()
    .matches(/^([^0-9]*)$/, "Enter letters!")
    .min(2, "Enter at least 2 characters!")
    .max(20, "Enter maximum 20 characters")
    .required("Required field!");

export const email = yup
    .string()
    .email("Wrong email address")
    .required("Required field!");

export const password = yup
    .string()
    .required("Required field!")
    .min(8, "Enter at least 8 characters!");

export const deliveryWay = yup.string().required("Choose delivery way");

export const address = yup
    .string()
    .max(200, "Enter maximum 200 characters")
    .required("Required field!");

export const comment = yup.string().max(200, "Enter maximum 200 characters");
