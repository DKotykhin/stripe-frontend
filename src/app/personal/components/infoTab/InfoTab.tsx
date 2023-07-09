import React from 'react';

import { format } from "date-fns";

import { Container, Paper, Typography } from '@mui/material';

import Spinner from 'components/spinner/Spinner';
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
    ) : <Spinner />;
};

export default InfoTab;