'use client';
import ContactForm from '@/components/ContactForm';
import { useEffect } from "react";

export default function Contact() {

   
    useEffect(()=>{
        document.title='Contact';
        
      });


    return (
        <ContactForm />
    )
}
