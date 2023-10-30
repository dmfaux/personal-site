import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import ThemeContextProvider from "@/contexts/ThemeContext";
import "./globals.css";
import Template from "../components/Template";

const WorkSans = Work_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Faux - Full Stack Developer and Software Development Manager",
  description: "Full Stack Developer and Software Development Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>
        <ThemeContextProvider>
          <Template>{children}</Template>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
