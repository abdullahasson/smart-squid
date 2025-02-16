// Next js
import type { Metadata } from "next";
// Google fonts
import { Almarai , Poppins } from "next/font/google";
// Components
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// style
import "./globals.css";


const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: "300"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "حبار الذكية للدعاية و الأعلان",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${almarai.variable} ${poppins.variable} antialiased`}
      >
        <div>
            <Header />
                {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}
