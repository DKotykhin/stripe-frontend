"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Box, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

import { useBasketStore } from "../../basketStore";

import styles from "./basketIcon.module.scss";

const StyledBadge = styled(Badge)`
    & .MuiBadge-badge {
        color: #00a1b6;
        top: 15px;
        border: 2px solid #00a1b6;
        padding: 0 3px;
    }
`;

const BasketIcon: React.FC = () => {

    const router = useRouter();
    const basketData = useBasketStore(state => state.basketData);

    const totalQuantity = basketData.reduce(
        (sum: number, currentValue: { price: number; quantity: number; }) => sum + currentValue.quantity,
        0
    );

    const handleOpen = () => router.push("/basket");

    return basketData.length > 0 ? (
        <Box className={styles.basketIcon} onClick={handleOpen}>
            <StyledBadge badgeContent={totalQuantity}>
                <ShoppingBasketOutlinedIcon
                    className={styles.basketIcon__icon}
                />
            </StyledBadge>
        </Box>
    ) : null;
};


export default BasketIcon;
