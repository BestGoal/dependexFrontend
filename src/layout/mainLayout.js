import React from 'react';
import Box from '@material-ui/core/Box';
import Header from "./component/main/header/index"
import Footer from "./component/main/footer/index"

export default function FullpageLayout({ children }) {
    return (
        <Box>
            <Header></Header>
            {children}
            <Footer></Footer>
        </Box>
    );
}
