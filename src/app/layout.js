import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { StoreProvider } from "@/store/StoreProvider.jsx";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Libraty Management system",
  description:
    "This is a library management system that is used to manage the library.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <nav className="bg-red-500 text-white p-4 flex justify-between flex-wrap gap-[20px]">
            <Link href="/login">login</Link>
            <Link href="/signup">signup</Link>

            <Link href="/login/teacher">Login As Teacher</Link>
            <Link href="/login/student">Login As Student</Link>

            <Link href="/signup/teacher">Create Teacher Account</Link>
            <Link href="/signup/student">Create Student Account</Link>

            <Link href="/register/teacher">Register Teacher</Link>
            <Link href="/register/student">Register Student</Link>
          </nav>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
