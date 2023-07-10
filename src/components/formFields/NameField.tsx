
import { Control, Controller, FieldError } from "react-hook-form";

import {
    Box,
    InputLabel,
    FormControl,
    FormHelperText,
    OutlinedInput,
} from "@mui/material";

import styles from './field.module.scss';

interface INameField {
    label: string;
    placeholder: string;
    defaultValue?: string;
    error?: FieldError;
    control: Control<any>;
}

const NameField: React.FC<INameField> = ({ label, placeholder, error, control, defaultValue }) => {
    return (
        <Box className={styles.field}>
            <InputLabel>{label}</InputLabel>
            <FormControl className={styles.field__control}>
                <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                        <OutlinedInput
                            {...field}
                            type="text"
                            placeholder={placeholder}
                            autoComplete="name"
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

export { NameField };
