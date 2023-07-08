import React from 'react';

import { Metadata } from 'next';

import Error from 'components/error/Error';
import { cancelPageMetaData } from "metadata/metadata";

export const metadata: Metadata = cancelPageMetaData;

const CancelPage: React.FC = () => {
    return <Error message='Your payment not provided. Try again' />;
};

export default CancelPage;