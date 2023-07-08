"use client";

import React from 'react';

import { format } from 'date-fns';

import { Box, Container, Typography } from '@mui/material';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
    return (
        <Box id="footer" className={styles.footer}>
            <Container maxWidth='xl' className={styles.footer__container}>
                <Typography className={styles.footer__right}>
                    &copy;{format(new Date(), 'yyyy')} &nbsp; All rights reserved
                </Typography>
                <Typography className={styles.footer__logo}>
                    Coffeedoor
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;