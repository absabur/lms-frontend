import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { StoreProvider } from "@/store/StoreProvider.jsx";
import Toast from "@/components/Toast";
import Authentication from "@/components/Authentication";
import Loading from "@/components/Loading";
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
  title: "Libraty Management client",
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
          <Loading />
          <Toast />
          <Authentication />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-indigo-900 text-indigo-100 py-6 text-center text-sm space-y-2">
            <p>
              © {new Date().getFullYear()} Bogura Polytechnic Institute Digital
              Library. All rights reserved.
            </p>
            <p>
              Managed by the Library Committee, BPI | Email:
              bogra_poly@yahoo.com
            </p>
            <p>
              Developed by{" "}
              <Link
                href="/developers"
                className="text-purple-300 hover:underline"
              >
                CST Department
              </Link>
            </p>
          </footer>
        </body>
      </StoreProvider>
    </html>
  );
}
