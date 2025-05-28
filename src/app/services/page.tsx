import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import { Metadata } from "next";
//import { getServices } from "../lib/assets/helperFunctions/dataloaders";
import Services from "../UI/components/Services";
import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";
import WebIcon from "@mui/icons-material/Web";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    title: "Web Application Development",
    description:
      "Custom web apps built with modern technologies for scalable, secure, and performant solutions.",
    icon: <WebIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Machine Learning & AI Development",
    description:
      "Innovative AI & machine learning solutions tailored to your business needs and automation goals.",
    icon: <SmartToyIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Moodle LMS Development",
    description:
      "Robust, scalable Learning Management Systems powered by Moodle for effective e-learning experiences.",
    icon: <SchoolIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Legacy System Maintenance",
    description:
      "Reliable maintenance and modernization of legacy systems to ensure smooth business operations.",
    icon: <SettingsIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Affordable & Cost-Effective Solutions",
    description:
      "Affordable and cost-effective solutions designed to maximize your ROI without compromising quality.",
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
];

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
    </Box>
  );
}
