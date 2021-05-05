import React from "react"
import Box from "@material-ui/core/Box"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item md={6}>
                <Card className="bg-transparent box-shadow-none">
                    <CardContent>
                        asdfkljlasfklsajfd
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6}>
                <Card>
                    <CardContent>
                        asdfkljlasfklsajfd
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}