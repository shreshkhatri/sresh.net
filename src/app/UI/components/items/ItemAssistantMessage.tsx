"use client";

import { PropAssistantMessage } from "@/app/lib/assets/types/types";
import { Box, Typography, Input, Avatar } from "@mui/joy";
import { MdOutlineSupportAgent } from "react-icons/md";


export default function ItemAssistantMessage({message}:PropAssistantMessage) {

  return <Box  sx={{ width: "100%", display: "flex", gap: 2,  alignItems:'center' }}>
                <Avatar size="lg" variant="outlined">
                  <MdOutlineSupportAgent />
                </Avatar>
                <Typography
                  level="body-sm"
                  color="success"
                  sx={{ flexGrow: 1, marginRight: "4rem" }}
                >
                  {message}
                </Typography>
              </Box>
}