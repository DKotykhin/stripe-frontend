import React from 'react';
import { Metadata } from 'next';

import { refundPageMetaData } from 'metadata/metadata';
import RefundBlock from './components/RefundBlock';

export const metadata: Metadata = refundPageMetaData;

const RefundPage: React.FC = () => {
    return (
        <RefundBlock />
    );
};

export default RefundPage;