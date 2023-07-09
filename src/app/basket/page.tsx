import React from 'react';
import BasketItems from './components/basketItems/BasketItems';
import NavButtons from './components/navButtons/NavButtons';

const BasketPage: React.FC = () => {
    return (
        <>
            <BasketItems />
            <NavButtons />
        </>
    );
};

export default BasketPage;