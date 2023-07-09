import React from "react";
import Image from "next/image";

import { Typography, Button, Box, CardActions } from "@mui/material";
import { Card, CardContent } from "@mui/material";

import { useBasketStore } from "../../basketStore";

import { IStoreItem } from "types/storeTypes";
import { IBasket } from "types/basketTypes";

import styles from "./itemCard.module.scss";

interface IItemCard {
    item: IStoreItem,
}

const ItemCard: React.FC<IItemCard> = ({ item }) => {

    const { _id, itemName, price, description, image, tm, country, weight } = item;

    const imageURL = process.env.NEXT_PUBLIC_BACKEND_URL + image;

    const addItem = useBasketStore(state => state.addItem);
    const basketClick = (data: IBasket) => addItem(data);

    return (
        <Card raised className={styles.card}>
            <Image
                src={imageURL || '/webp/wait_1.webp'}
                alt={itemName}
                width={350}
                height={350}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                blurDataURL={imageURL || '/webp/wait_1.webp'}
                placeholder={'blur'}
            />
            <CardContent className={styles.card__content}>
                <Typography gutterBottom variant="h5" component="div">
                    {itemName}
                </Typography>
                <Typography className={styles.card__price}>
                    ${price}
                </Typography>
                <Typography className={styles.card__description}>
                    {description}
                </Typography>
                <Box className={styles.card__boxItems}>
                    {weight &&
                        <Typography className={styles.card__sort}>
                            {`Weight ${weight} g`}
                        </Typography>
                    }
                </Box>
            </CardContent>
            <CardActions className={styles.card__buttons}>
                <Button
                    className={styles.button__basket}
                onClick={() =>
                    basketClick({
                        id: _id,
                        itemName,
                        price,
                        weight,
                        image,
                        quantity: 1,
                    })
                }
                >
                    {'Add to cart'}
                </Button>
            </CardActions>
        </Card>

    );
};

export default ItemCard;
