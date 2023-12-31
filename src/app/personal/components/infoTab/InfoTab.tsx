import React from 'react';

import { format } from "date-fns";
import Link from "next/link";

import { Button, Container, Paper, Typography, Box } from '@mui/material';

import { useAuth } from 'hooks/useAuth';

import styles from './infoTab.module.scss';

const InfoTab: React.FC = () => {

    const user = useAuth();

    return user ? (
        <Container maxWidth='sm' className={styles.info}>
            <Paper elevation={10} className={styles.info__paper}>
                <Typography className={styles.info__name}>
                    {"Hello,"} {user.userName}
                </Typography>
                <Typography>{"Email: "} <b>{user.email}</b></Typography>
                <Typography>
                    {"Registration Date:"} <b>{format(new Date(user.createdAt), "dd'.'LL'.'yyyy")}</b>
                </Typography>
            </Paper>
        </Container>
    ) :
        <Box className={styles.button}> 
            <Button
                className={styles.button__login}
                component={Link}
                variant='contained'
                href="/login"
            >
                Login
            </Button>
        </Box>;
};

export default InfoTab;