
import ContactForm from '@/app/UI/components/ContactForm';
import PageTemplate from '../UI/components/PageTemplate';

import { Metadata } from 'next'

export const metadata:Metadata = {
    title: 'Contact',
  };


export default function Contact() {



    return (
        <PageTemplate>
        <ContactForm />
        </PageTemplate>
    )
}
