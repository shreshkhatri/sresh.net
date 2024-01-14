'use client';
import { useEffect } from "react";
import { Box } from "@mui/joy";
import {Typography} from "@mui/joy";

export default function Experiences() {
    useEffect(()=>{
        document.title='Experiences';
      });
    
      
      return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} sx={{minHeight:'70vh'}}>
            <Typography textAlign={'center'}> Experiences Page Under construction</Typography>
        </Box>
      )
}
