import React from 'react';
import Box from '@material-ui/core/Box';
import Header from "./component/home/header/index"
import Sidebar from "./component/home/sidebar/index"

export default function FullpageLayout({ children }) {
    return (
        <Box>
            <Header />
            <Box >
                <Sidebar />
                {children}
            </Box>
        </Box>
    );
}
