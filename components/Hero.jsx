import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, School, Stethoscope, ShoppingCart, UtensilsCrossed } from "lucide-react";
import Container from "./Container";
import AnimatedTooltipPreview from "./animated-tooltip-demo";

const PARTNER_TYPES = [
  { icon: <School size={18} aria-hidden="true" />, label: "Schools" },
  { icon: <Stethoscope size={18} aria-hidden="true" />, label: "Clinics" },
  { icon: <ShoppingCart size={18} aria-hidden="true" />, label: "Grocers" },
  { icon: <UtensilsCrossed size={18} aria-hidden="true" />, label: "Restaurants" },
];

const SCRUB_VH = 240;

export default function Hero() {
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  // Both flags must default to false on every environment (server and the
  // client's first render) so hydration matches — `window` doesn't exist
  // during SSR, and reading it eagerly on the client's first render would
  // render a different tree than the server did. The real values are read
  // client-side, after mount, in the effect below.
  const [reducedMotion, setReducedMotion] = useState(false);
  // Below the `lg` breakpoint the hero stacks into one column, so the text
  // alone is often taller than the viewport — pinning it would push the
  // video below the fold for the whole scrub duration. Only pin on desktop.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = (e) => setReducedMotion(e.matches);
    onMotionChange(motionQuery);
    motionQuery.addEventListener("change", onMotionChange);

    const widthQuery = window.matchMedia("(min-width: 1024px)");
    const onWidthChange = (e) => setIsDesktop(e.matches);
    onWidthChange(widthQuery);
    widthQuery.addEventListener("change", onWidthChange);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      widthQuery.removeEventListener("change", onWidthChange);
    };
  }, []);

  const enableScrub = !reducedMotion && isDesktop;
  // Below `lg` there's no scroll track to scrub against, so the video never
  // gets an initial seek — and without a `poster` or an explicit play(),
  // many mobile browsers never decode a frame at all and just show a blank
  // box. Playing it normally (muted, looped) is both the fix and what was
  // asked for: a normal video on mobile instead of the desktop scrub effect.
  const playNormally = !reducedMotion && !isDesktop;

  useEffect(() => {
    if (!playNormally) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [playNormally]);

  useEffect(() => {
    if (!enableScrub) return;

    const video = videoRef.current;
    const track = trackRef.current;
    if (!video || !track) return;

    video.pause();

    // Seeking video.currentTime forces the browser to decode from the
    // nearest keyframe every time — on a 1080p file that's real work, and
    // issuing a seek on every animation frame (up to 60/sec) asks the
    // decoder to do more than it can keep up with, so it falls behind and
    // the frame appears to freeze until it clears the backlog. Throttling
    // actual seeks to a fixed interval gives the decoder time to finish
    // each one before the next arrives, which is what actually keeps
    // playback moving instead of stalling.
    const SEEK_INTERVAL_MS = 90;
    let rafId;
    let lastSeekAt = -Infinity;

    const getTargetTime = () => {
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0 || !video.duration || Number.isNaN(video.duration)) return null;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      return progress * video.duration;
    };

    const tick = (now) => {
      if (now - lastSeekAt >= SEEK_INTERVAL_MS) {
        const target = getTargetTime();
        if (target !== null && Math.abs(target - video.currentTime) > 0.01) {
          video.currentTime = target;
          lastSeekAt = now;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const onLoadedMetadata = () => {
      lastSeekAt = -Infinity;
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    rafId = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      cancelAnimationFrame(rafId);
    };
  }, [enableScrub]);

  const heroContent = (
    <div className="relative flex min-h-0 items-center overflow-hidden bg-white pt-20 pb-12 sm:pt-24 md:pt-28 lg:h-screen lg:pb-0">
      <Container rightGutter={false} className="relative w-full lg:h-full">
        <div className="grid items-center gap-10 lg:h-full lg:grid-cols-2 lg:gap-10">
          {/* Content */}
          <div className="order-1 pr-5 sm:pr-8 lg:pr-0">
            <h1 className="font-display text-[36px] leading-[1.04] text-[#14181F] sm:text-[52px] md:text-[64px]">
              One Card. Multiple Benefits.
              <br />
              <span className="text-[#DFA080]">Stronger Communities.</span>
            </h1>

            <p className="mt-5 text-[15.5px] leading-7 text-[#5B6479] sm:mt-6 md:text-[18px] md:leading-8">
              The Veda Benefits Card connects families with trusted local
              businesses, exclusive discounts, educational opportunities,
              community events, and valuable year-round savings.
            </p>

            <AnimatedTooltipPreview />

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] active:scale-95 sm:w-auto sm:px-8 sm:py-4"
              >
                Get Your Benefits Card
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/#vendor-benefits"
                className="inline-flex min-h-11 items-center justify-center py-2 text-center text-[15px] font-semibold text-[#B86F4B] underline decoration-[#DFA080]/45 underline-offset-4 transition-colors duration-200 hover:text-[#8F5034] hover:decoration-[#B86F4B] sm:justify-start"
              >
                Become a Partner Vendor
              </Link>
            </div>

            <div className="mt-9 sm:mt-11">
              <p className="text-[12px] uppercase tracking-[2px] text-[#8A8F99] mb-3">
                Trusted partner categories
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-7">
                {PARTNER_TYPES.map((item) => (
                  <span key={item.label} className="inline-flex items-center gap-2 text-[14px] font-medium text-[#3A3F4A] sm:text-[15px]">
                    {item.icon}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Video column: normal stacked block on mobile. From `lg` up, it's
              pulled out of grid flow and anchored to the bottom-right of the
              viewport instead, so the hand appears to rise up from the
              bottom of the screen rather than sitting centered mid-column. */}
          <div className="relative order-2 mt-1 lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[46%]">
            <div className="relative w-full aspect-video overflow-hidden">
              <video
                ref={videoRef}
                src="/finalcard.mp4"
                muted
                loop={playNormally}
                playsInline
                preload="auto"
                disablePictureInPicture
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );

  if (!enableScrub) {
    return (
      <section id="home" className="scroll-mt-20">
        {heroContent}
      </section>
    );
  }

  return (
    <section id="home" className="scroll-mt-20">
      <div ref={trackRef} className="relative" style={{ height: `${SCRUB_VH}vh` }}>
        <div className="sticky top-0">{heroContent}</div>
      </div>
    </section>
  );
}
