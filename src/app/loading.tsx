'use client';
import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { ImSpinner9 } from "react-icons/im";

export default function Loader() {

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white'
            }}
        >
            <Typography color='primary' textAlign={'center'}><ImSpinner9 className="loading-icon" /></Typography>
            <br />
            <Typography textAlign={'center'} level='title-md'>Loading ...</Typography>
        </Box>
    );
}
