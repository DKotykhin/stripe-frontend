import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

import {
    Box,
    OutlinedInput,
    InputLabel,
    FormControl,
    FormHelperText,
} from "@mui/material";

import styles from './field.module.scss';

interface IEmailField {
    label: string;
    placeholder: string;
    defaultValue?: string;
    error?: FieldError;
    control: Control<any>;
}

const EmailField: React.FC<IEmailField> = ({ label, placeholder, error, control, defaultValue }) => {
    return (
        <Box className={styles.field}>
            <InputLabel>{label}</InputLabel>
            <FormControl className={styles.field__control}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <OutlinedInput
                            {...field}
                            type="email"
                            placeholder={placeholder}
                            autoComplete="email"
                            error={error ? true : false}
                            defaultValue={defaultValue}
                            disabled={Boolean(defaultValue)}
                        />
                    )}
                />
                <FormHelperText className={styles.field__helper}>{error?.message}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export { EmailField };
