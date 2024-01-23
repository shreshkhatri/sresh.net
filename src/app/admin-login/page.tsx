import AdminLoginForm from "../UI/components/AdminLoginForm";
import PageTemplate from "../UI/components/PageTemplate";
import { Metadata } from 'next'
import { PageTemplateProps } from "../lib/assets/types/types";
import { MENU_ITEMS } from "../lib/assets/data/data";

export const metadata:Metadata = {
  title: 'Admin Login',
};

const pageTemplateProps: PageTemplateProps = {
  menus:MENU_ITEMS,
  selectedMenu:null
};

export default function AdminLogin() {
  return (
   <PageTemplate pageTemplateProps={pageTemplateProps}>
    <AdminLoginForm />
   </PageTemplate>
  );
}


