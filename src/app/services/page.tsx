import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import { Metadata } from "next";
import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";
import Link from "next/link";
import { services } from "../lib/assets/data/services";

export const metadata: Metadata = {
  title: "Services",
};



export default async function Page() {
  //const services = await getServices();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ minHeight: "70vh" }}
    >
      <Typography
        sx={{ textAlign: "center" }}
        level="h2"
        fontWeight="xl"
        mb={2}
      >
        What I offer ...
      </Typography>
      <Typography level="body-md" sx={{ mb: 4, color: "text.secondary", textAlign:'center'}}>
        Delivering expert solutions tailored for your business success.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row"}}
        justifyContent="flex-start"
        flexWrap="wrap"
        gap={3}
        sx={{p:4}}
      >
        {services.map(({ title, description, icon }) => (
          <Card
            key={title}
            variant="outlined"
            sx={{
              flex: "1 1 250px",
              textAlign: "left",
              minWidth: 250,
              maxWidth: 320,
              cursor: "pointer",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "md",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                }}
              >
                {icon}
                <Typography level="body-md" sx={{ ml: 1, fontWeight: "lg" }}>
                  {title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 1 }} />
              <Typography level="body-md" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
       <Typography
        level="body-md"
        textAlign="center"
        sx={{ mt: 6, fontWeight: 'md', color: 'text.secondary' }}
      >
        Please do not hesitate to <Link href={'/contact'} >contact</Link>.
      </Typography>
    </Box>
  );
}
