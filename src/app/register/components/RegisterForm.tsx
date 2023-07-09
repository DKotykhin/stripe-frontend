"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, Container, Typography, Box, Avatar, Paper } from "@mui/material";

import { EmailField, NameField, PasswordField } from 'components/formFields/_index';
import { RegisterFormValidation } from 'validation/UserValidation';
import { userRegister } from 'service/userService';
import { theme, ThemeProvider } from 'utils/colorTheme';

import { IUserRegister } from 'types/userTypes';

import styles from "./registerForm.module.scss";

const RegisterForm: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IUserRegister>(RegisterFormValidation);

    const onSubmit = async (data: IUserRegister): Promise<void> => {
        const { userName, email, password } = data;
        const validData = {
            userName: userName.trim(),
            email: email.trim(),
            password: password.trim(),
        };
        await userRegister(validData)
            .then(response => {
                console.log(response.message);
                sessionStorage.setItem("rememberMe", response.token);
                router.push("/");
                reset();
            })
            .finally(() => setLoading(false));
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs" className={styles.form}>
                <Paper elevation={10} className={styles.form__paper}>
                    <Typography className={styles.form__title} component="h2">
                        {"Login"}
                    </Typography>
                    <Avatar className={styles.form__avatar} />
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <NameField
                            label={'Name'}
                            placeholder={'Type your name...'}
                            error={errors.userName}
                            control={control}
                        />
                        <EmailField
                            label={'Email'}
                            placeholder={'Type your email...'}
                            error={errors.email}
                            control={control}
                        />
                        <PasswordField
                            name={'password'}
                            label={'Password'}
                            placeholder={'Type your password...'}
                            error={errors.password}
                            control={control}
                        />
                        <Button
                            className={styles.form__submit_button}
                            disabled={!isValid}
                            type="submit"
                        >
                            {loading ? 'Loading...' : 'Register'}
                        </Button>
                    </Box>
                </Paper>
                <Typography className={styles.form__subtitle}>
                    {"Already have account?"}
                </Typography>
                <Button
                    className={styles.form__sign_button}
                    component={Link}
                    href="/login"
                >
                    {"Login"}
                </Button>
                <Button
                    className={styles.form__return_button}
                    component={Link}
                    href="/"
                >
                    {"Main Page"}
                </Button>
            </Container>
        </ThemeProvider>
    );
};

export default RegisterForm;