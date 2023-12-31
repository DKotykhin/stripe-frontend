"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { theme, ThemeProvider } from 'utils/colorTheme';

import styles from './header.module.scss';
import { useUserStore } from 'store/userStore';

const Header: React.FC = () => {

    const router = useRouter();
    const { userData, setEmpty } = useUserStore();

    const accountClick = () => router.push('/personal');
    const loginClick = () => {
        if (userData._id) {
            sessionStorage.removeItem("rememberMe");
            localStorage.removeItem("rememberMe");
            setEmpty();
            router.push('/');
        } else router.push('/login');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box id="header" className={styles.header}>
                <AppBar position="static">
                    <Toolbar>
                        <Link href={'/'}>
                            <Image
                                src={"/webp/logo_192x192.webp"}
                                alt="logo Coffeedoor"
                                width={25}
                                height={25}
                            />
                        </Link>
                        <Typography variant="h6" component="div" className={styles.header__logoText}>
                            Coffeedoor
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={accountClick}
                        >
                            Account
                        </Button>
                        <Button
                            color="inherit"
                            onClick={loginClick}
                        >
                            {userData._id ? 'Logout' : 'Login'}
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default Header;