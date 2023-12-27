'use client';
import { useEffect } from "react";
import { Box } from "@mui/joy";
import {Typography} from "@mui/joy";

export default function Experiences() {
    useEffect(()=>{
        document.title='Portfolio';
      });
    
      
      return (
        <Box display={'flex'} justifyContent={'center'}>
            <Typography> Portfolio Page Under construction</Typography>
        </Box>
      )
}
