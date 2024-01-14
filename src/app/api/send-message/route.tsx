import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { userMessageType } from "@/app/lib/assets/types/types";
import validator from "validator";
import {
  getConnectionObject,
  closeConnection,
} from "@/app/lib/assets/data/datamanagement";

// creating a schema for message payload
const MessageSchema = z
  .object({
    fname: z.string().trim().min(1, "First Name field is empty"),
    lname: z.string().trim().min(1, "Last Name field is empty"),
    email: z.string().trim().email("Email is invalid"),
    date: z.string().trim(),
    subject: z.string().trim(),
    userMessage: z
      .string()
      .trim()
      .min(10, "Message should be atleast 10 characters long"),
    country: z
      .object({
        code: z.string().trim().min(1),
        label: z.string().trim().min(1),
        phone: z.string().trim().min(1),
      })
      .nullable(),
  })
  .strict(); // not accepting the object with any less or more attributes other than the defined inside schema

export async function GET(request: NextRequest) {
  const data = {
    message: "Hello World",
  };
  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {


  return await request
    .json()
    .then(async (data: userMessageType) => {
      // parsing the received JSON data
      const result = MessageSchema.safeParse(data);
      if (!result.success) {
        return NextResponse.json(
          { message: result.error.issues[0].message },
          { status: 400 }
        );
      }

      const message: userMessageType = {
        fname: validator.escape(data.fname),
        lname: validator.escape(data.lname),
        email: validator.escape(data.email),
        subject: validator.escape(data.subject),
        userMessage: validator.escape(data.userMessage),
        country: data.country,
        date: validator.escape(data.date),
        
      };

      return await getConnectionObject()
        .then(async (connectionObject) => {
          //inserting user message into database

          const messageInsertResponse = await connectionObject
            .collection(String(process.env.COLLECTION_MESSAGES))
            .insertOne({...message,messageRead:false});

          if (messageInsertResponse.insertedId) {
            return NextResponse.json(
              { message: "Message Sent Successfully." },
              { status: 200 }
            );
          }
        })
        .catch((error) => {
          console.log(error);
          return NextResponse.json(
            { message: "Database error has occured while saving message" },
            { status: 500 }
          );
        })
        .finally(() => {
          closeConnection();
        });
    })
    .catch((error) => {
      return NextResponse.json(
        { message: "Internal server error occured" },
        { status: 500, statusText: "Internal server error occured" }
      );
    });
}
