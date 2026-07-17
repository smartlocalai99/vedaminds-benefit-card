import { inter, plexMono } from "@/styles/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${plexMono.variable} font-app`}>
      <Component {...pageProps} />
    </div>
  );
}
