import AuthProvider from "@/components/auth/AuthProvider";
import Navbar from "@/components/navigation/Navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <AuthProvider>

      <Navbar />

      {children}

    </AuthProvider>

  );

}