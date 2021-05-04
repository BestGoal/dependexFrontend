import React from 'react';
import Box from '@material-ui/core/Box';
import Header from "./component/home/header/index"

export default function FullpageLayout({ children }) {
    return (
        <Box>
            <Header></Header>
            {children}
        </Box>
    );
}
