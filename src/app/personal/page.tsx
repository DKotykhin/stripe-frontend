import React from 'react';

import PersonalHeader from './components/personalHeader/PersonalHeader';
import Tabs from './components/Tabs';

const PersonalPage: React.FC = async () => {

    return (
        <>
            <PersonalHeader />            
            <Tabs />
        </>
    );
};

export default PersonalPage;