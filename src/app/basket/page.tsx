import React from 'react';
import { Metadata } from 'next';

import BasketItems from './components/basketItems/BasketItems';
import NavButtons from './components/navButtons/NavButtons';
import { basketPageMetaData } from 'metadata/metadata';

export const metadata: Metadata = basketPageMetaData;

const BasketPage: React.FC = () => {
    return (
        <>
            <BasketItems />
            <NavButtons />
        </>
    );
};

export default BasketPage;