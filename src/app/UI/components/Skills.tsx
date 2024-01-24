"use client";
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
import { SiScikitlearn } from "react-icons/si";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { SxProps } from "@mui/joy/styles/types";
import { SiRasa } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";

const sx: SxProps = {
  fontSize: {
    xs: "3rem",
    sm: "4rem",
    md: "5rem",
  },
};

const SKILL_CATEGORY = {
  javascript: "javascript",
  python: "python",
  all: "all",
  ml: "ml",
  web: "web",
  development_deployment: "web deployment",
  databases: "databases",
};

export default function Skills() {
  const [skillCategory, setSkillCategory] = useState<string | null>("all");

  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    setSkillCategory(newValue);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      justifyContent="center"
      alignItems={"center"}
    >
      <Fade>
        <Typography level="h2" sx={{ textAlign: "center", paddingY: 5 }}>
          Skills & Tools
        </Typography>

        <Select
          sx={{ minWidth: "25vw", p: 2 }}
          color="warning"
          placeholder="Skill Category"
          variant="plain"
          onChange={handleChange}
        >
          <Option value="all">All</Option>
          <Option value="web deployment">Web Development / Deployment</Option>
          <Option value="javascript">JavaScript</Option>
          <Option value="python">Python</Option>
          <Option value="databases">Databases</Option>
          <Option value="ml">Machine Learning</Option>
        </Select>
        <Box
          sx={{ display: "flex", gap: 3, flexWrap: "wrap", pt: 3 }}
          justifyContent="center"
        >
          {skillCategory === SKILL_CATEGORY.all && (
            <>
              <Typography sx={sx}>
                <TbBrandNextjs />
              </Typography>
              <Typography sx={{ ...sx, color: "#5ED3F3" }}>
                <GrReactjs />
              </Typography>
              <Typography sx={{ ...sx, color: "#2465F1" }}>
                <FaCss3Alt />
              </Typography>
              <Typography sx={{ ...sx, color: "#53473A" }}>
                <FaAws />
              </Typography>
              <Typography sx={{ ...sx, color: "#E96228" }}>
                <FaHtml5 />
              </Typography>
              <Typography sx={{ ...sx, color: "#2F74C0" }}>
                <SiTypescript />
              </Typography>
              <Typography sx={{ ...sx, color: "#008CDB" }}>
                <FaDocker />
              </Typography>
              <Typography sx={{ ...sx, color: "#E94F31" }}>
                <FaGit />
              </Typography>

              <Typography sx={{ ...sx, color: "#2F0066" }}>
                <SiRasa />
              </Typography>
              <Typography sx={{ ...sx, color: "#F79939" }}>
                <SiScikitlearn />
              </Typography>
              <Typography sx={{ ...sx, color: "#4DABCF" }}>
                <SiNumpy />
              </Typography>
              <Typography sx={{ ...sx, color: "#12074A" }}>
                <SiPandas />
              </Typography>
              <Typography sx={{ ...sx, color: "#F0B93A" }}>
                <SiTensorflow />
              </Typography>
              <Typography sx={{ ...sx, color: "#F0B93A" }}>
              &#129303;
              </Typography>
              <Typography sx={{ ...sx, color: "#007FFF" }}>
                <SiMui />
              </Typography>
              <Typography sx={{ ...sx, color: "#3F9B38" }}>
                <SiMongodb />
              </Typography>
              <Typography sx={{ ...sx, color: "#5DAF47" }}>
                <FaNode />
              </Typography>
              <Typography sx={{ ...sx, color: "#7CC8D2" }}>
                <SiFlask />
              </Typography>
              <Typography sx={{ ...sx, color: "#2D2D2D" }}>
                <SiExpress />
              </Typography>
              <Typography sx={{ ...sx }}>
                <FcLinux />
              </Typography>
            </>
          )}

          {skillCategory === SKILL_CATEGORY.databases && (
            <>
              <Typography sx={{ ...sx, color: "#FCA71B" }}>
                <SiMysql />
              </Typography>
              <Typography sx={{ ...sx, color: "#3F9B38" }}>
                <SiMongodb />
              </Typography>
              <Typography sx={{ ...sx, color: "#000000" }}>
                <SiMicrosoftsqlserver />
              </Typography>
            </>
          )}

          {skillCategory === SKILL_CATEGORY.development_deployment && (
            <>
              <Typography sx={{ ...sx, color: "#E96228" }}>
                <FaHtml5 />
              </Typography>
              <Typography sx={{ ...sx, color: "#2465F1" }}>
                <FaCss3Alt />
              </Typography>
              <Typography sx={{ ...sx, color: "#53473A" }}>
                <FaAws />
              </Typography>

              <Typography sx={{ ...sx, color: "#008CDB" }}>
                <FaDocker />
              </Typography>
              <Typography sx={{ ...sx, color: "#E94F31" }}>
                <FaGit />
              </Typography>
              <Typography sx={{ ...sx }}>
                <FcLinux />
              </Typography>
            </>
          )}

          {skillCategory === SKILL_CATEGORY.ml && (
            <>
              <Typography sx={{ ...sx, color: "#4DABCF" }}>
                <SiNumpy />
              </Typography>
              <Typography sx={{ ...sx, color: "#12074A" }}>
                <SiPandas />
              </Typography>
              <Typography sx={{ ...sx, color: "#F79939" }}>
                <SiScikitlearn />
              </Typography>
              <Typography sx={{ ...sx, color: "#F0B93A" }}>
                <SiTensorflow />
              </Typography>
              <Typography sx={{ ...sx, color: "#F0B93A" }}>
              &#129303; 
              </Typography>
            </>
          )}

          {skillCategory === SKILL_CATEGORY.python && (
            <>
              <Typography sx={{ ...sx, color: "#F79939" }}>
                <SiScikitlearn />
              </Typography>
              <Typography sx={{ ...sx, color: "#2F0066" }}>
                <SiRasa />
              </Typography>
              <Typography sx={{ ...sx, color: "#F0B93A" }}>
                <SiTensorflow />
              </Typography>
              <Typography sx={{ ...sx, color: "#7CC8D2" }}>
                <SiFlask />
              </Typography>
            </>
          )}

          {skillCategory === SKILL_CATEGORY.javascript && (
            <>
              <Typography sx={sx}>
                <TbBrandNextjs />
              </Typography>
              <Typography sx={{ ...sx, color: "#5ED3F3" }}>
                <GrReactjs />
              </Typography>

              <Typography sx={{ ...sx, color: "#2F74C0" }}>
                <SiTypescript />
              </Typography>

              <Typography sx={{ ...sx, color: "#007FFF" }}>
                <SiMui />
              </Typography>

              <Typography sx={{ ...sx, color: "#5DAF47" }}>
                <FaNode />
              </Typography>

              <Typography sx={{ ...sx, color: "#2D2D2D" }}>
                <SiExpress />
              </Typography>
            </>
          )}
        </Box>
      </Fade>
    </Box>
  );
}
