"use client";
import {useEffect,FormEvent} from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function AdminLoginForm() {

    const  submitHandler=(event: FormEvent<SignInFormElement>) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const data = {
          email: formElements.email.value,
          password: formElements.password.value,
          persistent: formElements.persistent.checked,
        };
        alert(JSON.stringify(data, null, 2));
      };

      useEffect(()=>{
        document.title='Admin Login '
      })

  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "90dvh",
          width:
            "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
          maxWidth: "100%",
          px: 2,
        }}
      >
        <Box
          component="main"
          sx={{
            my: "auto",
            py: 2,
            pb: 5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 400,
            maxWidth: "100%",
            mx: "auto",
            borderRadius: "sm",
            "& form": {
              display: "flex",
              flexDirection: "column",
              gap: 2,
            },
            [`& .${formLabelClasses.asterisk}`]: {
              visibility: "hidden",
            },
          }}
        >
          <Typography level="h3" textAlign={'center'}>Admin Sign in</Typography>
          <Stack gap={4} sx={{ mt: 2 }}>
            <form
              onSubmit={submitHandler}
            >
              <FormControl required>
                <FormLabel>Username</FormLabel>
                <Input type="text" name="Username" />
              </FormControl>
              <FormControl required>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
              </FormControl>
              <Stack gap={4} sx={{ mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Checkbox size="sm" label="Remember me" name="persistent" />
                  <Link level="title-sm" href="">
                    Forgot your password?
                  </Link>
                </Box>
                <Button type="submit" fullWidth>
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Box>
  );
}


