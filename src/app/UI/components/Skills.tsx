'use client';
import { Box, Card, Typography } from "@mui/joy";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaCss3Alt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaWindows } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import AvatarGroup from '@mui/joy/AvatarGroup';
import Avatar from '@mui/joy/Avatar';
import { SxProps } from "@mui/joy/styles/types";
import { SiRasa } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import Fade from 'react-reveal/Fade';
import AspectRatio from '@mui/joy/AspectRatio';


const sx: SxProps = {
    fontSize: {
        xs: '3rem',
        sm: '4rem',
        md: '5rem'
    }
};

export default function Skills() {
    return <Box sx={{ display: 'flex', flexDirection: 'column', }} justifyContent='center'>
        <Fade>
            <Typography level="h2" sx={{ textAlign: 'center', paddingY: 5 }}>
                Skills & Tools
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }} justifyContent='center'>

                <Typography sx={sx} ><TbBrandNextjs /></Typography>
                <Typography sx={{ ...sx, color: '#5ED3F3' }} ><GrReactjs /></Typography>
                <Typography sx={{ ...sx, color: '#2465F1' }}><FaCss3Alt /></Typography>
                <Typography sx={{ ...sx, color: '#53473A' }} ><FaAws /></Typography>
                <Typography sx={{ ...sx, color: '#E96228' }}><FaHtml5 /></Typography>
                <Typography sx={{ ...sx, color: '#2F74C0' }}><SiTypescript /></Typography>
                <Typography sx={{ ...sx, color: '#008CDB' }}><FaDocker /></Typography>
                <Typography sx={{ ...sx, color: '#E94F31' }}><FaGit /></Typography>
                <Typography sx={{ ...sx, color: '#2F0066' }}><SiRasa /></Typography>
                <Typography sx={{ ...sx, color: '#F0B93A' }}><SiTensorflow /></Typography>
                <Typography sx={{ ...sx, color: '#007FFF' }} ><SiMui /></Typography>
                <Typography sx={{ ...sx, color: '#3F9B38' }}><SiMongodb /></Typography>
                <Typography sx={{ ...sx, color: '#5DAF47' }}><FaNode /></Typography>
                <Typography sx={{ ...sx, color: '#7CC8D2' }}><SiFlask /></Typography>
                <Typography sx={{ ...sx, color: '#2D2D2D' }}><SiExpress /></Typography>
                <Typography sx={{ ...sx }}><FcLinux /></Typography>
                <Typography sx={{ ...sx, color: '#00A8E8' }}><FaWindows /></Typography>

            </Box>
        </Fade>
    </Box>
}