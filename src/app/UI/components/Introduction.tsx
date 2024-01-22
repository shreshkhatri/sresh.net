import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function Introduction() {
  return (
    <Card
      size="lg"
      orientation="vertical"
      sx={{
        border: 0,
        borderRadius: 0,
        textAlign: "center",
        maxWidth: "100%",
        overflow: "auto",
      }}
    >
      <CardOverflow
        sx={{
          display: "flex",
          paddingTop: 5,
          flexDirection: "column",
          justifyContent: "center",
          px: "var(--Card-padding)",
        }}
      ></CardOverflow>
      <CardContent sx={{ gap: 5 }}>
        <CardContent sx={{ gap: 5 }}>
          <Typography level="h2" textAlign={"center"}>
            Greetings!
          </Typography>
          <Typography level="body-md" textAlign="center">
            Welcome to my website!, I am Suresh Khatri, an experienced
            full-stack developer with over two years of experience specializing
            in the creation of AI-powered Virtual Assistants and the
            implementation of Natural Language Processing (NLP) models. My
            journey includes leading the development of web applications for
            prominent clients like www.quickblox.com, Lewisham Council, and
            StartupDen in the UK. Proficient in a diverse range of technologies
            such as NextJS, React, Flask, Node.js, MongoDB and differnet Machine
            Learning (ML) libraries e.g. SciKit Learn, Tensorflow as well as
            skills on data manipulating tool e.g. NumPy,Pandas, I excel in
            integrating (development/deployment) cutting-edge tools like Rasa,
            NLP JS, and ChatGPT to elevate user interactions.
          </Typography>
          <Typography level="body-md" textAlign="center">
            I am passionate about leveraging my skills as a Front-End / Back-End
            /FullStack JavaScript/Python developer to contribute to the dynamic
            field of software development. Lets connect and explore the
            possibilities of collaboration!
          </Typography>

          <Typography level="body-md" textAlign="center">
            In addition to my work in application development, I have a strong
            passion for teaching and sharing knowledge in academic settings. I
            find great joy in helping others learn and grow, and I am actively
            exploring opportunities to contribute to the education field as a
            tutor or instructor. Whether it&apos;s sharing insights into programming
            or guiding students in their journey, I am excited about the
            prospect of making a positive impact in the lives of learners.
          </Typography>

          <Typography level="body-md" textAlign="center">
            Lets connect and explore the possibilities of collaboration!
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
