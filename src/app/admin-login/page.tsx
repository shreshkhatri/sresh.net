import AdminLoginForm from "../UI/components/AdminLoginForm";
import PageTemplate from "../UI/components/PageTemplate";
import { Metadata } from 'next'
export const metadata:Metadata = {
  title: 'Admin Login',
};

export default function AdminLogin() {
  return (
   <PageTemplate>
    <AdminLoginForm />
   </PageTemplate>
  );
}


