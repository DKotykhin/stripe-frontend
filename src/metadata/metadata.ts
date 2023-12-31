import { Metadata } from "next";

export const generalMetaData: Metadata = {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
    authors: [
        {
            name: "Dmytro Kotykhin",
            url: "https://stripe-frontend-six.vercel.app",
        },
    ],
};

export const mainPageMetaData: Metadata = {
    title: "CoffeeDoor - brewbar & coffeeshop",
    description:
        "CoffeeDOOR – cozy brewbar & coffeeshop. Easy to test the favorite taste of coffee",
    keywords: ["coffee", "coffee beans", "buy coffee"],
    metadataBase: new URL("https://i.ibb.co"),
    openGraph: {
        type: "website",
        url: "https://stripe-frontend-six.vercel.app",
        title: "CoffeeDoor - brewbar & coffeeshop",
        description:
            "CoffeeDOOR – cozy brewbar & coffeeshop. Easy to test the favorite taste of coffee",
        images: ["/F6MJ8zr/logo512.webp"],
    },
};

export const thanksPageMetaData: Metadata = {
    title: "Thanks",
    description: "Thanks for the order page",
};

export const cancelPageMetaData: Metadata = {
    title: "Payment cancelled",
    description: "Payment cancelled page",
};

export const loginPageMetaData: Metadata = {
    title: "Login",
    description: "Login page",
};

export const registerPageMetaData: Metadata = {
    title: "Registration",
    description: "Registration page",
};

export const basketPageMetaData: Metadata = {
    title: "Basket",
    description: "Basket page",
};

export const personalPageMetaData: Metadata = {
    title: "Account",
    description: "Account page",
};

export const refundPageMetaData: Metadata = {
    title: "Refund",
    description: "Refund page",
};

