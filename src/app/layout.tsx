import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "clsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyush Gambhir",
  description: "Personal Website of Piyush Gambhir.",
};

import ClientThemeProvider from "@components/Providers/ClientThemeProvider";
import Header from "@components/header";
import Footer from "@components/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "mx-auto m-2 bg-white dark:bg-[#101010] text-black dark:text-white transition-[background] duration-500 ease-in-out cursor-[url(https://gracemmaa.com/cursor.svg),_pointer] pt"
        )}
      >
        <ClientThemeProvider>
          <div className="max-w-[90%] lg:max-w-[1168px] mx-auto flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
