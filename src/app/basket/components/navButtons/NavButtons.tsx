"use client";

import React from 'react';
import Link from "next/link";

import { Button, Box } from '@mui/material';

import { theme, ThemeProvider } from 'utils/colorTheme';

import styles from './navButtons.module.scss';
import { useAuth } from 'hooks/useAuth';
import BasketForm from '../basketForm/BasketForm';

const NavButtons: React.FC = () => {

    const user = useAuth();

    return (
        <ThemeProvider theme={theme}>
            <Box className={styles.navButtons}>
                <Button
                    className={styles.navButtons__return}
                    component={Link}
                    href="/"
                >
                    Continue shopping
                </Button>
                {user ?
                    <BasketForm user={user}/>
                    :
                    <Button
                        className={styles.navButtons__login}
                        component={Link}
                        href="/login"
                        variant='outlined'
                    >
                        Login
                    </Button>
                }
            </Box>
        </ThemeProvider>
    );
};

export default NavButtons;