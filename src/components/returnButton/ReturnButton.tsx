"use client";

import Link from "next/link";

import { Box, Typography } from "@mui/material";

import styles from "./Returnbutton.module.scss";

const ReturnButton: React.FC = () => {

    return (
        <Box className={styles.return}>
            <Link href={'/'}>
                <Typography className={styles.return_link}>{"Main page"}</Typography>
            </Link>
        </Box>
    );
};

export default ReturnButton;
