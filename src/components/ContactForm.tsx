"use client";
import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import MainSnackBar from "./MainSnackBar";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CountrySelector from "./CountrySelector";
import ProfileCard from "./ProfileCard";
import { CountryType, ResponseStatus } from "../app/types/types";
import validator from "validator";

export default function ContactForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [country, setCountry] = useState<CountryType | null>(null); // country could be null so setting to null by default
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [status, setStatus] = useState<ResponseStatus>("null");

  function resetForm() {
    setFname("");
    setLname("");
    setEmail("");
    setUserMessage("");
    setSubject("");
    setCountry(null);
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: validator.escape(fname),
        lname: validator.escape(lname),
        email: validator.escape(email),
        country,
        subject: validator.escape(subject),
        userMessage: validator.escape(userMessage),
        date: new Date(),
      }),
    })
      .then(async (response) => ({
        status: response.status,
        ...(await response.json()),
      }))
      .then((JSONResponse) => {
        if (JSONResponse.status === 200) {
          setStatus("success");
          setResponseMessage(JSONResponse.message);
          setOpenSnackBar(true);
          resetForm();
        } else {
          setStatus("error");
          setResponseMessage(JSONResponse.message);
          setOpenSnackBar(true);
        }
      })
      .catch((error) => {
        setStatus("error");
        setResponseMessage(error.message);
        setOpenSnackBar(true);
      });
  };
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: {
            xs: 2,
            md: 6,
          },
          py: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <ProfileCard />

        <Box component="form" onSubmit={handleFormSubmit}>
          <Card>
            <Typography level="title-md">Contact Form</Typography>
            <Typography level="body-sm">
              Please use following form for leaving your message & I will be
              responding at the earliest possible time.
            </Typography>

            <Divider />
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { md: "flex" }, my: 1 }}
            >
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl
                    sx={{
                      display: {
                        sm: "flex-column",
                        md: "flex-row",
                      },
                      gap: 2,
                    }}
                  >
                    <Input
                      value={fname}
                      size="sm"
                      placeholder="First name"
                      onChange={(e) => setFname(e.currentTarget.value)}
                      autoComplete="off"
                      required
                    />
                    <Input
                      value={lname}
                      size="sm"
                      placeholder="Last name"
                      sx={{ flexGrow: 1 }}
                      onChange={(e) => setLname(e.currentTarget.value)}
                      autoComplete="off"
                      required
                    />
                  </FormControl>
                </Stack>

                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={email}
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="your email"
                    sx={{ flexGrow: 1 }}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    autoComplete="off"
                    required
                  />
                </FormControl>

                <div>
                  <CountrySelector country={country} setCountry={setCountry} />
                </div>
                <Stack spacing={1}>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl
                    sx={{
                      display: {
                        sm: "flex-column",
                        md: "flex-row",
                      },
                    }}
                  >
                    <Input
                      value={subject}
                      size="sm"
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.currentTarget.value)}
                      autoComplete="off"
                      required
                    />
                    <Textarea
                      size="sm"
                      minRows={4}
                      sx={{ mt: 1.5 }}
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.currentTarget.value)}
                      placeholder="Your message ..."
                      autoComplete="off"
                      required
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </Stack>

            <CardOverflow
              sx={{ borderTop: "1px solid", borderColor: "divider" }}
            >
              <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                <Button
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  onClick={resetForm}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  variant="outlined"
                  color="success"
                >
                  Send Message
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
        </Box>
      </Stack>
      <MainSnackBar
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        status={status}
        message={responseMessage}
      />
    </Box>
  );
}
