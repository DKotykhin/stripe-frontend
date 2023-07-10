import React from 'react';
import { Metadata } from 'next';

import LoginForm from './components/LoginForm';
import { loginPageMetaData } from 'metadata/metadata';

export const metadata: Metadata = loginPageMetaData;

const LoginPage: React.FC = () => {
    return (
        <LoginForm />
    );
};

export default LoginPage;