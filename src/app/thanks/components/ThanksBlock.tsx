"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, Typography } from "@mui/material";

import ReturnButton from 'components/returnButton/ReturnButton';
import logo from '/public/webp/logo_700x191.webp';

import styles from './thanksBlock.module.scss';

const ThanksBlock: React.FC = () => {

    return (
        <Container maxWidth="md" className={styles.thanks}>
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt="logo Coffeedoor"
                    placeholder="blur"
                    className={styles.thanks__image}
                />
            </Link>
            <Typography component="h1" className={styles.thanks__title}>
                {"Thanks for the order!"}
            </Typography>
            <Typography component="h2" className={styles.thanks__subtitle}>
                {"We will call you back as soon as possible"}
            </Typography>
            <ReturnButton />
        </Container>
    );
};

export default ThanksBlock;