import React from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Box, Button, Container } from '@mui/material';

import { BasketValidation } from 'validation/BasketValidation';
import { NameField, EmailField, DeliveryField, AddressField } from 'components/formFields/_index';

import { useBasketStore } from 'store/basketStore';

import { IUser } from 'types/userTypes';
import { IFormData, ISendData } from 'types/basketTypes';

import styles from './basketForm.module.scss';
import { paymentIntent } from 'service/paymentService';

const BasketForm: React.FC<{ user: IUser }> = ({ user }) => {

    const basketData = useBasketStore(state => state.basketData);
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormData>({
        ...BasketValidation,
        defaultValues: {
            userName: user ? user.userName : '',
            email: user ? user.email : '',
            deliveryWay: "",
            address: "",
            comment: "",
        },
    });

    const onSubmit = async (data: IFormData) => {
        const { deliveryWay, address, comment } = data;
        const validData: ISendData = {
            userData: {
                deliveryWay,
                address,
                comment,
            },
            orderData: basketData,
        };
        console.log(validData);
        const localToken = localStorage.getItem("rememberMe");
        const sessionToken = sessionStorage.getItem("rememberMe");
        const token = localToken || sessionToken || "";
        await paymentIntent(validData, token)
            .then(result => router.push(result.url))
            .catch(err => console.log(err));
    };

    return (
        <Container maxWidth='sm'>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                component="form"
                noValidate
                autoComplete="off"
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
                <DeliveryField
                    label={'Delivery way'}
                    error={errors.deliveryWay}
                    control={control}
                />
                <AddressField
                    label={'Address'}
                    placeholder={'Type your address...'}
                    error={errors.address}
                    control={control}
                />
                <AddressField
                    label={'Comment'}
                    placeholder={'Type your comment...'}
                    error={errors.comment}
                    control={control}
                />
                <Button
                    // disabled={!isValid}
                    className={styles.submitbutton}
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default BasketForm;