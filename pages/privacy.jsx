import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Veda Benefits Card</title>
        <meta
          name="description"
          content="Privacy Policy for the Veda Benefits Card membership, offered by Veda Minds Learning & Development Center."
        />
      </Head>

      <Navbar />

      <main className="bg-white pt-32 pb-20 min-h-[60vh]">
        <Container maxWidth="760px">
          <h1 className="font-display text-[32px] md:text-[42px] font-semibold text-[#172033]">
            Privacy Policy
          </h1>
          <p className="text-[#5B6479] text-[16px] leading-8 mt-6">
            This page is a placeholder. The official Privacy Policy covering
            how member and vendor information is collected and used will be
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
