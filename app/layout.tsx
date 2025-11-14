import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eteterre",
  description: "Immersive microsite exploring the regenerative world of Eteterre"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
