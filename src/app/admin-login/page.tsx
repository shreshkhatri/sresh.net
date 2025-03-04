import AdminLoginForm from "../UI/components/AdminLoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function AdminLogin() {
  return <AdminLoginForm />;
}
