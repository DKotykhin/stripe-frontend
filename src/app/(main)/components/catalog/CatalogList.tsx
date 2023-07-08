"use client";

import React from 'react';

import { Box } from '@mui/material';

import ItemCard from '../itemCard/ItemCard';

import { IStoreItem } from 'types/storeTypes';

import styles from './catalogList.module.scss';

const CatalogList: React.FC<{ data: IStoreItem[] }> = ({ data }) => {

    return (
        <Box className={styles.catalog}>
            {data?.map(item => (
                <Box key={item._id}>
                    <ItemCard item={item} />
                </Box>
            ))};
        </Box>
    );
};

export default CatalogList;