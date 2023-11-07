'use client';
import ContactForm from '@/components/ContactForm';
import { Box, Typography } from '@mui/joy';
import { useState } from 'react';

export default function Contact() {
    const [open, setOpen] = useState(false);
    return (
        <ContactForm />
    )
}
