import React from 'react';
import { Metadata } from 'next';

import RegisterForm from './components/RegisterForm';
import { registerPageMetaData } from 'metadata/metadata';

export const metadata: Metadata = registerPageMetaData;

const RegisterPage: React.FC = () => {
    return (
        <RegisterForm />
    );
};

export default RegisterPage;