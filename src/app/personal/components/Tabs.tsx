"use client";

import React from 'react';

import { Box, Container, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import InfoTab from './infoTab/InfoTab';
import OrderTab from './orderTab/OrderTab';

import { theme, ThemeProvider } from 'utils/colorTheme';

const Tabs: React.FC = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='lg' >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label={"Info"} value="1" />
                            <Tab label={"Orders"} value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><InfoTab /></TabPanel>
                    <TabPanel value="2"><OrderTab /></TabPanel>
                </TabContext>
            </Container>
        </ThemeProvider>
    );
};

export default Tabs;