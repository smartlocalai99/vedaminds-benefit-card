import { lora, inter, plexMono } from "@/styles/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${lora.variable} ${inter.variable} ${plexMono.variable} font-app`}>
      <Component {...pageProps} />
    </div>
  );
}
