"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from '@mui/material';

import { theme, ThemeProvider } from 'utils/colorTheme';

import styles from './personalHeader.module.scss';

const PersonalHeader: React.FC = () => {

    const router = useRouter();

    const handleClick = () => router.push("/");

    return (
        <ThemeProvider theme={theme}>
            <Box className={styles.header}>
                <Typography className={styles.title}>{"Personal Page"}</Typography>
                <Button
                    className={styles.button}
                    onClick={handleClick}
                >
                    {"Main page"}
                </Button>
            </Box>
        </ThemeProvider>
    );
};

export default PersonalHeader;