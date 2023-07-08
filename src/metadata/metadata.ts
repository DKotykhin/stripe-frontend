import { Metadata } from "next";

export const generalMetaData: Metadata = {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
    authors: [
        {
            name: "Dmytro Kotykhin",
            url: "https://dmytro-kotykhin.space",
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
        url: "https://www.coffeedoor.space",
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
