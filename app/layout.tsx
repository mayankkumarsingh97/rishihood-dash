import "./globals.css";
import { AuthProvider } from "@/context/auth/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container mx-auto antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
