
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/Appheader";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  )
}
