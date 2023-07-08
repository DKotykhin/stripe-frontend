"use client";

import React from 'react';
import Image from "next/image";

import { Container, Typography } from "@mui/material";
import logo from '/public/webp/logo_700x191.webp';

import styles from './firstBlock.module.scss';


const FirstBlock: React.FC = () => {
    return (
        <Container maxWidth="md" className={styles.first}>
            <Image
                src={logo}
                alt="logo Coffeedoor"
                placeholder="blur"
                className={styles.first__image}
            />
            <Typography component="h1" className={styles.first__title}>
                {"Taste your favorite coffee with CoffeeDoor!"}
            </Typography>
        </Container>
    );
};

export default FirstBlock;