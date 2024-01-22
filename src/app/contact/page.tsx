
import ContactForm from '@/app/UI/components/ContactForm';
import PageTemplate from '../UI/components/PageTemplate';
import { Metadata } from 'next'
import { MENU_ITEMS } from '../lib/assets/data/data';
import { PageTemplateProps } from '../lib/assets/types/types';

const pageTemplateProps: PageTemplateProps = {
  menus:MENU_ITEMS,
  selectedMenu:'contact'
};

export const metadata:Metadata = {
    title: 'Contact',
  };


export default function Contact() {



    return (
        <PageTemplate pageTemplateProps={pageTemplateProps}>
        <ContactForm />
        </PageTemplate>
    )
}
