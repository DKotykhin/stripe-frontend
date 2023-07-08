import React from 'react';

import { Metadata } from 'next';

import { thanksPageMetaData } from "metadata/metadata";
import ThanksBlock from './components/ThanksBlock';

export const metadata: Metadata = thanksPageMetaData;

const ThanksPage: React.FC = () => {

    return <ThanksBlock />;
};

export default ThanksPage;