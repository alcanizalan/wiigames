import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const wiiFont = M_PLUS_Rounded_1c({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-wii',
  display: 'swap',
});

const clockFont = localFont({
  src: './fonts/ds_digib.ttf',
  variable: '--font-clock',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wii Tabel Games",
  description: "Prototipo de minijuegos con estética de la consola Wii",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${wiiFont.variable} ${clockFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
