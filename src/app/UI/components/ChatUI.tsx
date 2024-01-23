"use client";
import { useEffect, useState, useRef } from "react";
import { Box, Typography, Input } from "@mui/joy";
import { useChat } from "ai/react";
import { TbMessage2 } from "react-icons/tb";
import Badge from "@mui/joy/Badge";
import { IoMdClose } from "react-icons/io";
import { TbSend } from "react-icons/tb";
import { IconButton } from "@mui/joy";
import { PiChatsCircleLight } from "react-icons/pi";
import ItemAssistantMessage from "./items/ItemAssistantMessage";
import ItemUserMessage from "./items/ItemUserMessage";
import { useColorScheme } from '@mui/joy/styles';

export default function ChatUI() {
  const { mode } = useColorScheme();
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const [isMinimized, setIsMinimized] = useState<boolean>(true);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll the container to the bottom
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages are updated
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Box
        sx={{
          visibility: isMinimized ? "hidden" : "visible",
          display: "flex",
          position: "fixed",
          flexDirection: "column",
          bottom: 10,
          right: 10,
          width: {
            xs: "90%",
            sm: "60%",
            md: "30%",
          },
          height: {
            xs: "80vh",
            sm: "70vh",
            md: "70vh",
          },
          borderRadius: 5,
          zIndex: 2,
          backgroundColor:mode=='light'?'white':'#030D1E'
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "3rem",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "aqua",
          }}
        >
          <Typography
            level="title-lg"
            color="neutral"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Suresh&apos;s Assistant
          </Typography>
          <IconButton
            aria-label="close chat window"
            size="lg"
            onClick={() => setIsMinimized(true)}
          >
            <IoMdClose />
          </IconButton>
        </Box>

        <Box
          component={"div"}
          ref={messagesContainerRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
            flexGrow: 1,
            backgroundColor: "inherit",
            borderColor: "inherit",
            p: 2,
            overflowY: "auto",
          }}
        >
          <ItemAssistantMessage message={"Hey, How can I help you today?"} />
          {messages.map((m) => {
            return m.role == "assistant" ? (
              <ItemAssistantMessage key={m.id} message={m.content} />
            ) : (
              <ItemUserMessage key={m.id} message={m.content} />
            );
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "4rem",
            display: "flex",
            backgroundColor: "inherit",
            padding: 1,
          }}
          component={"form"}
          onSubmit={handleSubmit}
        >
          <Input
            sx={{
              flexGrow: 1,
              backgroundColor: "inherit",

              "--Input-focusedThickness": "0.0rem",
            }}
            placeholder="Type in here…"
            size="sm"
            variant="outlined"
            value={input}
            onChange={handleInputChange}
          />
          <IconButton type="submit" aria-label="close chat window" size="lg">
            <TbSend />
          </IconButton>
        </Box>
      </Box>

      <Box
        component={"div"}
        sx={{
          visibility: isMinimized ? "visible" : "hidden",
          position: "fixed",
          bottom: 10,
          right: 15,
          cursor: "pointer",
          zIndex: 5,
        }}
        onClick={() => setIsMinimized(false)}
      >
        <Badge badgeInset="15%" color="success">
          <Typography sx={{ fontSize: "3rem" }}>
            {" "}
            <PiChatsCircleLight />
          </Typography>
        </Badge>
      </Box>
    </>
  );
}
