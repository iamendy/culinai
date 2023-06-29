import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} overflow-hidden`}>
      <Component {...pageProps} />
    </main>
  );
}
