import React from 'react'
import Box from '@material-ui/core/Box'
import Header from "./component/main/header/index"

export default function AuthLayout({ children }) {
    return (
        <Box>
            <Header />
            {children}
        </Box>
    )
}
