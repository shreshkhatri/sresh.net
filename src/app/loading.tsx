'use client';
import React, { useEffect } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { ImSpinner9 } from "react-icons/im";
import { SxProps } from '@mui/joy/styles/types';

const sx: SxProps = {
    fontSize: {
        xs: '3rem',
        sm: '4rem',
        md: '5rem'
    }
};

export default function Loader() {


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width:'100%',
                minHeight:'100vh'
            }}
        >
            <Typography sx={{ ...sx ,color:'lightgreen'}} textAlign={'center'}><ImSpinner9 className="loading-icon" /></Typography>
            <br />
            <Typography textAlign={'center'} level='title-md'>Loading ...</Typography>
        </Box>
    );
}
