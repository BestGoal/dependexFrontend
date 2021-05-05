import React from 'react';
import Box from '@material-ui/core/Box';
import Header from "./component/home/header/index"
import Sidebar from "./component/home/sidebar/index"

export default function FullpageLayout({ children }) {
    return (
        <Box>
            <Header />
            <Box className="pt-5 d-flex">
                <Sidebar />
                <Box className="p-1 home-container">
                    {children}
                </Box>
            </Box>
        </Box>
    );
}