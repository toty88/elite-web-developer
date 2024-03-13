import type { Metadata } from "next";
import QueryProvider from "../components/providers/QueryProvider";
import "./globals.css";



export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Clase 03 elite-web-developer",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-bestShowEver bg-fixed" >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
