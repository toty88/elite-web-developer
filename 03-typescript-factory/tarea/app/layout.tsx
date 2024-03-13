import type { Metadata } from "next";
import QueryProvider from "../components/providers/QueryProvider";
import "./globals.css";



export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Clase 03 elite-web-developer",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="relative bg-bestShowEver bg-fixed" >
        <div className="absolute inset-0 bg-white opacity-20"></div>
        <QueryProvider>
          <div className="relative z-10">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
