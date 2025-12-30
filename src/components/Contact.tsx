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

    if (contactSection && houseSteps.every((step) => step !== null)) {
      gsap.set(houseSteps, {
        y: -200,
        opacity: 0,
      });

      const houseTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactSection,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });

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
    }
  });
  return (
    <section
      ref={contactRef}
      className="min-h-screen flex items-center justify-center bg-background-ivory py-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* 단계 1: 기초 */}
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

              {/* 단계 2: 1층 구조 */}
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

              {/* 단계 3: 2층 구조 */}
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

              {/* 단계 4: 벽 구조 */}
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

              {/* 단계 5: 지붕 골조 */}
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

              {/* 단계 6: 완성된 집 */}
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
          <div className="text-left">
            <h2 className="text-7xl font-accent mb-5">
              I'd like to work with you
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              함께 오래 머물고 싶은
              <br />
              ‘집 같은 서비스’를 만들어가고 싶습니다.
            </p>

            {/* 연락처 정보 */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 mb-1 text-lg bg-[#FFAF50] text-white rounded-xl">
                Email
              </span>
              <a
                href="mailto:ejdeveloper0305@gmail.com"
                className="flex items-center gap-3 text-lg hover:text-gray-600 transition-colors"
              >
                <span>ejdeveloper0305@gmail.com</span>
              </a>
              <span className="inline-block px-3 py-1 mb-1 text-lg bg-[#FFAF50] text-white rounded-xl">
                Tel
              </span>
              <a
                href="tel:+82-10-1234-5678"
                className="flex items-center gap-3 text-lg hover:text-gray-600 transition-colors"
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
