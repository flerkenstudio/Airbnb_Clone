import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb",
  description: "Experience a romantic getaway at Mirashya UG10 in Candolim, Goa. Featuring a private jacuzzi, modern amenities, pool access, and tranquil retreat vibes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#222222] antialiased">
        {children}
      </body>
    </html>
  );
}
