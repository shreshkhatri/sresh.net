'use client';
import ContactForm from '@/app/components/ContactForm';
import { Box, Typography } from '@mui/joy';
import { useState } from 'react';

export default function Contact() {
    const [open, setOpen] = useState(false);
    return (
        <ContactForm />
    )
}
