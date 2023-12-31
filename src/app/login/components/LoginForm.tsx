"use client";

import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, Container, Typography, Box, Avatar, Paper } from "@mui/material";
import { InputLabel, Checkbox } from "@mui/material";

import { EmailField, PasswordField } from 'components/formFields/_index';
import { LoginFormValidation } from 'validation/UserValidation';
import { userLogin } from 'service/userService';
import { theme, ThemeProvider } from 'utils/colorTheme';

import { IUserLoginForm } from 'types/userTypes';

import styles from "./loginForm.module.scss";
import { useUserStore } from 'store/userStore';

const LoginForm: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { addUser } = useUserStore();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IUserLoginForm>(LoginFormValidation);

    const onSubmit = async (data: IUserLoginForm): Promise<void> => {
        const { email, password, rememberMe } = data;
        const validData = {
            email,
            password: password.trim(),
        };
        setLoading(true);
        await userLogin(validData)
            .then(response => {
                // console.log(response);
                addUser(response.user);
                if (response.token) {
                    sessionStorage.setItem("rememberMe", response.token);
                    if (rememberMe) localStorage.setItem("rememberMe", response.token);
                    router.push("/");
                }
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
                        <InputLabel className={styles.form__checkbox}>
                            <Controller
                                name="rememberMe"
                                control={control}
                                render={({ field }) => <Checkbox {...field} sx={{ marginTop: '-3px' }} />}
                                defaultValue={false}
                            />
                            Remember me
                        </InputLabel>
                        <Button
                            className={styles.form__submit_button}
                            disabled={!isValid}
                            type="submit"
                        >
                            {loading ? 'Loading...' : 'Login'}
                        </Button>
                    </Box>
                </Paper>
                <Typography className={styles.form__subtitle}>
                    {"Don't have account?"}
                </Typography>
                <Button
                    className={styles.form__sign_button}
                    component={Link}
                    href="/register"
                >
                    {"Registration"}
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

export default LoginForm;
