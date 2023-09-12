import Nav from "@/components/Layout/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import log from '../../public/logo.png'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Los Santos Customs",
  description:
    "National leader in car customization, not to be confused with the lovely people who greet you with rubber gloves on arrival at Los Santos International Airport.",
  icons:["public/logo.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-200">
      <body className={inter.className}>
        <Layout>
          <Nav/>
          {children}
        </Layout>
      </body>
    </html>
  );
}
