import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function PartnerDisclaimer() {
  return (
    <div>
      <Head>
        <title>Partner Disclaimer | Veda Benefits Card</title>
        <meta
          name="description"
          content="Partner Disclaimer for businesses participating in the Veda Benefits Card network by Veda Minds Learning & Development Center."
        />
      </Head>

      <Navbar />

      <main className="min-h-[60vh] bg-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container maxWidth="760px">
          <h1 className="font-display text-[32px] md:text-[42px] font-semibold text-[#172033]">
            Partner Disclaimer
          </h1>
          <p className="text-[#5B6479] text-[16px] leading-8 mt-6">
            This page is a placeholder. Partner vendors are independent
            businesses, and the official disclaimer covering the terms of
            their participation in the Veda Benefits Card network will be
            published here.
          </p>
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 mt-8 text-[#5B3FD6] font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
