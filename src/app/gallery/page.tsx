'use client';
import { useEffect } from "react";
import { Box } from "@mui/joy";
import {Typography} from "@mui/joy";

export default function Experiences() {
    useEffect(()=>{
        document.title='Gallery';
      });
    
      
      return (
        <Box display={'flex'} justifyContent={'center'}>
            <Typography> Gallery Page Under construction</Typography>
        </Box>
      )
}
