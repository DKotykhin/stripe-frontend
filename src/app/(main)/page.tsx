import React from 'react';
import { Metadata } from 'next';

import { mainPageMetaData } from "metadata/metadata";
import FirstBlock from './components/firstBlock/FirstBlock';
import { getStoreItem } from 'service/getStoreItem';

import { IStoreItem } from 'types/storeTypes';

export const metadata: Metadata = mainPageMetaData;

const Home: React.FC = async () => {

    const data: IStoreItem[] = await getStoreItem();
    // console.log(data);

    return (
        <main>
            <FirstBlock />
        </main>
    );
};

export default Home;
