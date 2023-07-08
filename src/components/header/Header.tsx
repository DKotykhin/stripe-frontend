"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { Box, Container, Typography } from '@mui/material';

import styles from './header.module.scss';

const Header: React.FC = () => {    

    return (
        <Box id="header" className={styles.header}>
            <Container maxWidth='xl' className={styles.header__container}>
                <Link href={'/'}>
                    <Image
                        src={"/webp/logo_192x192.webp"}
                        alt="logo Coffeedoor"
                        width={25}
                        height={25}
                    />
                </Link>
                <Typography className={styles.header__logoText}>
                    Coffeedoor
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;