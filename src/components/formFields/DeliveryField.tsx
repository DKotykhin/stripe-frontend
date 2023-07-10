import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

import { Box, Radio, RadioGroup, FormControlLabel, InputLabel, FormHelperText, FormControl } from "@mui/material";

import styles from './field.module.scss';

interface IDeliveryField {
    label: string;
    error?: FieldError;
    control: Control<any>;
}

const DeliveryField: React.FC<IDeliveryField> = ({ label, error, control }) => {

    return (
        <Box className={styles.field}>
            <InputLabel>{label}</InputLabel>
            <FormControl className={styles.field__control}>
                <Controller
                    name="deliveryWay"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup {...field}>
                            <FormControlLabel
                                value="take away"
                                control={<Radio />}
                                label={"Take away"}
                            />
                            <FormControlLabel
                                value="delivery by post"
                                control={<Radio />}
                                label={"Delivery by post"}
                            />
                        </RadioGroup>

                    )}
                />
                <FormHelperText className={styles.field__helper}>{error?.message}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export { DeliveryField };