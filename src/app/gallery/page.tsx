'use client';
import { useEffect } from "react";
import { Box } from "@mui/joy";
import {Typography} from "@mui/joy";

export default function Experiences() {
    useEffect(()=>{
        document.title='Gallery';
      });
    
      
      return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} sx={{minHeight:'80vh'}}>
            <Typography textAlign={'center'}> Gallery Page Under construction</Typography>
        </Box>
      )
}
