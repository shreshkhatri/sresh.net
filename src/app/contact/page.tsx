import ContactForm from "@/app/UI/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactForm />;
}
