import React from 'react';
import { Metadata } from 'next';

import { mainPageMetaData } from "metadata/metadata";
import FirstBlock from './components/firstBlock/FirstBlock';
import CatalogList from './components/catalog/CatalogList';

import { getStoreItem } from 'service/getStoreItem';

import { IStoreItem } from 'types/storeTypes';
import BasketIcon from './components/basketIcon/BasketIcon';

export const metadata: Metadata = mainPageMetaData;

const Home: React.FC = async () => {

    const data: IStoreItem[] = await getStoreItem();

    return (
        <main>
            <FirstBlock />
            <CatalogList data={data} />
            <BasketIcon />
        </main>
    );
};

export default Home;
