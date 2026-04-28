import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FormModal from "@/components/FormModal/FormModal.jsx";
import { StatesProvider } from '@/contexts/StatesContext.jsx';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fisheye",
  description: "Plateforme de photographes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StatesProvider>
        {children}
        <FormModal></FormModal>
        </StatesProvider>
      </body>
    </html>
  );
}
