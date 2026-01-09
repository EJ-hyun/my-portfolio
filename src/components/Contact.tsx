"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSectionRefs } from "@/contexts/SectionRefsContext";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const { contactRef } = useSectionRefs();

  const houseStep1Ref = useRef<HTMLDivElement>(null);
  const houseStep2Ref = useRef<HTMLDivElement>(null);
  const houseStep3Ref = useRef<HTMLDivElement>(null);
  const houseStep4Ref = useRef<HTMLDivElement>(null);
  const houseStep5Ref = useRef<HTMLDivElement>(null);
  const houseStep6Ref = useRef<HTMLDivElement>(null);

  const scrollTriggerInstanceRef = useRef<ScrollTrigger | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const contactSection = contactRef.current;
    const houseSteps = [
      houseStep1Ref.current,
      houseStep2Ref.current,
      houseStep3Ref.current,
      houseStep4Ref.current,
      houseStep5Ref.current,
      houseStep6Ref.current,
    ];

    if (!contactSection || !houseSteps.every((step) => step !== null)) return;

    const cleanup = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      if (scrollTriggerInstanceRef.current) {
        scrollTriggerInstanceRef.current.kill();
        scrollTriggerInstanceRef.current = null;
      }
    };

    const setupAnimation = () => {
      cleanup();

      gsap.set(houseSteps, {
        y: -200,
        opacity: 0,
      });

      const houseTl = gsap.timeline({
        paused: true,
      });

      timelineRef.current = houseTl;

      houseSteps.forEach((step, index) => {
        const position = index * 0.6;

        houseTl.to(
          step,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          position
        );

        if (index > 0) {
          houseTl.to(
            houseSteps[index - 1],
            {
              opacity: 0,
              duration: 0.3,
            },
            position + 0.3
          );
        }
      });

      scrollTriggerInstanceRef.current = ScrollTrigger.create({
        trigger: contactSection,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        id: "contact-animation",
        animation: houseTl,
        invalidateOnRefresh: true,
      });
    };

    setupAnimation();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupAnimation();
        ScrollTrigger.refresh();
      }, 150);
    };

    // Visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cleanup();
    };
  }, [contactRef]);

  return (
    <section
      ref={contactRef}
      className="min-h-screen flex items-center justify-center bg-background-ivory py-25 xl:py-32"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 xl:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center">
          {/* 집 애니메이션 */}
          <div className="relative h-[300px] xl:h-[600px] flex items-center justify-center order-2 xl:order-1">
            <div className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
              <div
                ref={houseStep1Ref}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/assets/images/house01.png"
                  alt="House foundation"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div
                ref={houseStep2Ref}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/assets/images/house02.png"
                  alt="First floor"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div
                ref={houseStep3Ref}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/assets/images/house03.png"
                  alt="Second floor"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div
                ref={houseStep4Ref}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/assets/images/house04.png"
                  alt="Walls"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div
                ref={houseStep5Ref}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/assets/images/house05.png"
                  alt="Roof frame"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <div
                ref={houseStep6Ref}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/assets/images/house06.png"
                  alt="Completed house"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact 정보 */}
          <div className="text-left order-1 xl:order-2">
            <h2 className="text-4xl sm:text-5xl xl:text-7xl font-accent mb-5">
              I'd like to work with you
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 xl:mb-10">
              함께 오래 머물고 싶은
              <br />
              '집 같은 서비스'를 만들어가고 싶습니다.
            </p>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 mb-1 text-base xl:text-lg bg-[#FFAF50] text-white rounded-xl">
                Email
              </span>
              <a
                href="mailto:ejdeveloper0305@gmail.com"
                className="flex items-center gap-3 text-base xl:text-lg hover:text-gray-600 transition-colors"
              >
                <span>ejdeveloper0305@gmail.com</span>
              </a>
              <span className="inline-block px-3 py-1 mb-1 text-base xl:text-lg bg-[#FFAF50] text-white rounded-xl">
                Tel
              </span>
              <a
                href="tel:+82-10-9543-1819"
                className="flex items-center gap-3 text-base xl:text-lg hover:text-gray-600 transition-colors"
              >
                <span>010-9543-1819</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
