import React from 'react';
import { Metadata } from 'next';

import PersonalHeader from './components/personalHeader/PersonalHeader';
import Tabs from './components/Tabs';
import { personalPageMetaData } from 'metadata/metadata';

export const metadata: Metadata = personalPageMetaData;

const PersonalPage: React.FC = async () => {

    return (
        <>
            <PersonalHeader />            
            <Tabs />
        </>
    );
};

export default PersonalPage;