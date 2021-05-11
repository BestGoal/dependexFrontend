import { Box } from "@material-ui/core"
import React from "react"
import "../../asset/scss/component/loading.scss";

export default function Loading() {
    return (
        <Box className="loading">
            <Box className="over-load"></Box>
            <Box className="load-9">
                <Box className="spinner">
                    <Box className="bubble-1"></Box>
                    <Box className="bubble-2"></Box>
                </Box>
            </Box>
        </Box>
    )
}