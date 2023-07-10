"use client";

import React from 'react';
import Image from "next/image";

import { Box, Typography, Divider, Container } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useBasketStore } from 'store/basketStore';

import styles from './basketItems.module.scss';
import { IBasket } from 'types/basketTypes';

const imageURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const BasketItems: React.FC = () => {

    const { basketData, removeItem, quantityDec, quantityInc, setEmpty } = useBasketStore();

    const matches = useMediaQuery('(min-width:600px)');

    const handleRemove = (id: string): void => removeItem(id);
    const handleDecrement = (id: string): void => quantityDec(id);
    const handleIncrement = (id: string): void => quantityInc(id);

    const sum = basketData.reduce(
        (sum: number, currentValue: { price: number; quantity: number; }) =>
            sum +
            +currentValue.price * currentValue.quantity,
        0
    );
    const validSum = Math.round(sum * 100) / 100;

    return (
        <Container maxWidth='md' className={styles.basket}>
            <Typography
                className={styles.basket__title}
                component="h2"
            >
                {"Your order:"}
            </Typography>
            <Divider />
            {basketData.length > 0 ? (
                basketData.map((item: IBasket, i: number) => (
                    <Box key={i} className={styles.basket__box}>
                        <Box className={styles.basket__itemBlock}>
                            {matches &&
                                <Image
                                    src={imageURL + item.image}
                                    alt={item.itemName}
                                    width={70}
                                    height={70}
                                    blurDataURL={imageURL + item.image || '/webp/wait_1.webp'}
                                    placeholder={'blur'}
                                />
                            }
                            <Box sx={{ flexGrow: 1 }}>
                                <Box className={styles.basket__nameBlock}>
                                    <Typography className={styles.basket__itemName}>                                      
                                        {item.itemName}
                                        {item.weight ? `, ${item.weight}g` : ""}
                                    </Typography>
                                    <CloseIcon
                                        className={styles.basket__removeItem}
                                        onClick={() =>
                                            handleRemove(item.itemId)
                                        }
                                    />
                                </Box>
                                <Typography className={styles.basket__price}>
                                    <RemoveCircleOutlineIcon
                                        className={styles.basket__quantityIcons}
                                        onClick={() =>
                                            handleDecrement(item.itemId)
                                        }
                                    />{" "}
                                    {item.quantity}{" "}
                                    <AddCircleOutlineIcon
                                        className={styles.basket__quantityIcons}
                                        onClick={() =>
                                            handleIncrement(item.itemId)
                                        }
                                    />
                                    {" x "}
                                    {'$'}{item.price}
                                    {" = "}
                                    {'$'}{item.quantity * item.price}                                    
                                </Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ mt: 1 }} />
                    </Box>
                ))
            ) : (
                <Box className={styles.basket__subtitle}>
                    {"Basket is empty"}
                </Box>
            )}
            <Typography className={styles.basket__total}>
                {"Total: "}{'$'}
                {validSum}                
            </Typography>
        </Container>
    );
};

export default BasketItems;