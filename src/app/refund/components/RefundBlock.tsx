"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, Typography } from "@mui/material";

import ReturnButton from 'components/returnButton/ReturnButton';
import logo from '/public/webp/logo_700x191.webp';

import styles from './refundBlock.module.scss';

const RefundBlock: React.FC = () => {

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
                {"Your payment successfully refunded. Wait money for a 3 business days"}
            </Typography>
            <ReturnButton />
        </Container>
    );
};

export default RefundBlock;