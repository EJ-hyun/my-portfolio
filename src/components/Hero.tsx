"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { useSectionRefs } from "@/contexts/SectionRefsContext";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { heroRef } = useSectionRefs();

  const heroLineTopRef = useRef<SVGPathElement>(null);
  const heroLineRightRef = useRef<SVGPathElement>(null);
  const heroLineBottomRef = useRef<SVGPathElement>(null);
  const heroLineLeftRef = useRef<SVGPathElement>(null);
  const heroStarBigRef = useRef<SVGPathElement>(null);
  const heroStarSmallRef = useRef<SVGPathElement>(null);
  const heroLineConnect03Ref = useRef<SVGPathElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroLineTop = heroLineTopRef.current;
    const heroLineRight = heroLineRightRef.current;
    const heroLineBottom = heroLineBottomRef.current;
    const heroLineLeft = heroLineLeftRef.current;
    const heroStarBig = heroStarBigRef.current;
    const heroStarSmall = heroStarSmallRef.current;
    const heroLineConnect03 = heroLineConnect03Ref.current;
    const heroTitle = heroTitleRef.current;
    const heroImage = heroImageRef.current;

    if (
      heroLineTop &&
      heroLineRight &&
      heroLineBottom &&
      heroLineLeft &&
      heroStarBig &&
      heroStarSmall &&
      heroLineConnect03 &&
      heroTitle &&
      heroImage
    ) {
      // 초기 상태 설정
      gsap.set(
        [
          heroLineTop,
          heroLineRight,
          heroLineBottom,
          heroLineLeft,
          heroLineConnect03,
        ],
        {
          strokeDasharray: (i, target) => {
            const length = (target as SVGPathElement).getTotalLength();
            return length;
          },
          strokeDashoffset: (i, target) => {
            const length = (target as SVGPathElement).getTotalLength();
            return length;
          },
        }
      );

      gsap.set(heroTitle, { opacity: 0, y: 30 });
      gsap.set(heroStarBig, { opacity: 0 });
      gsap.set(heroStarSmall, { opacity: 0 });
      gsap.set(heroImage, { opacity: 0, scale: 0.8 });

      const heroTl = gsap.timeline({ delay: 0.5 });

      // 상단 선
      heroTl.to(heroLineTop, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // 오른쪽 선
      heroTl.to(
        heroLineRight,
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

      // 하단 선
      heroTl.to(
        heroLineBottom,
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

      // 왼쪽 선
      heroTl.to(
        heroLineLeft,
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

      // 연결선
      heroTl.to(
        heroLineConnect03,
        {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

      // 타이틀
      heroTl.to(
        heroTitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
      heroTl.to(
        heroStarBig,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.5"
      );
      heroTl.to(
        heroStarSmall,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // 이미지
      heroTl.to(
        heroImage,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.5"
      );
    }
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-screen bg-background-ivory overflow-hidden"
      >
        {/* 상단 가로선 */}
        <svg
          width="1920"
          height="1"
          viewBox="0 0 1920 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-20"
        >
          <path ref={heroLineTopRef} d="M0 0.5H1920" stroke="black" />
        </svg>

        {/* 오른쪽 세로선 */}
        <svg
          width="1"
          height="960"
          viewBox="0 0 1 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[185px]"
        >
          <path ref={heroLineRightRef} d="M0.5 0V960" stroke="black" />
        </svg>

        {/* 하단 가로선 */}
        <svg
          width="1920"
          height="1"
          viewBox="0 0 1920 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-35"
        >
          <path ref={heroLineBottomRef} d="M0 0.5H1920" stroke="black" />
        </svg>

        {/* 왼쪽 세로선 */}
        <svg
          width="1"
          height="250"
          viewBox="0 0 1 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-32"
        >
          <path ref={heroLineLeftRef} d="M0.5 0V249.5" stroke="black" />
        </svg>

        {/* 큰 별 */}
        <svg
          width="440"
          height="440"
          viewBox="0 0 440 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[12vh] right-[28vw]"
        >
          <g clip-path="url(#clip0_34_6)">
            <path
              ref={heroStarBigRef}
              d="M215.218 21.7954C205.164 119.67 149 168.691 101.902 192.825C73.3958 207.433 45.1411 214.64 26.4596 218.113C22.3615 218.875 18.5492 219.495 15.0666 220C18.5492 220.506 22.3615 221.126 26.4596 221.888C45.1411 225.361 73.3958 232.568 101.902 247.176C149 271.31 205.164 320.331 215.218 418.206C215.924 414.275 216.79 409.897 217.848 405.147C222.07 386.197 230.284 357.599 245.449 328.971C269.286 283.967 314.662 231.293 398.465 220C314.662 208.708 269.286 156.034 245.449 111.03C230.284 82.4022 222.07 53.8036 217.848 34.8535C216.79 30.1035 215.924 25.7263 215.218 21.7954ZM214.448 0C214.448 0 229.694 220 432.262 220C229.694 220 214.448 440.001 214.448 440.001C207.9 224.356 -7.73871 220 -7.73871 220C-7.73871 220 207.9 215.645 214.448 0Z"
              fill="#343434"
            />
          </g>
          <defs>
            <clipPath id="clip0_34_6">
              <rect width="440" height="440" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="absolute h-full flex justify-between w-full pl-32">
          <div ref={heroTitleRef} className="opacity-0 -ml-4.5 pt-[24vh]">
            <h1 className="text-[130px] font-accent text-gray-black leading-[0.9]">
              Portfolio
            </h1>
            <h2 className="text-[80px] font-accent text-gray-black">
              Hyun Eun Jung
            </h2>
          </div>

          {/* 프로필 이미지 */}
          <div
            ref={heroImageRef}
            className="absolute right-32 bottom-0 opacity-0"
          >
            <div className="relative w-[550px] h-[600px]">
              <Image
                src="/assets/images/profile02.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 작은 별 연결선 */}
        <svg
          width="1"
          height="140"
          viewBox="0 0 1 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[285px] bottom-0"
        >
          <path ref={heroLineConnect03Ref} d="M0.5 0V140" stroke="black" />
        </svg>

        {/* 작은 별 */}
        <div className="absolute left-[194px] bottom-[15.5vh] w-[182px] h-[182px]">
          <svg
            width="182"
            height="182"
            viewBox="0 0 182 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_39_61)">
              <path
                ref={heroStarSmallRef}
                d="M91.7232 10.0149C87.5643 50.4992 64.333 70.7761 44.8514 80.759C33.0602 86.8013 21.373 89.7824 13.6457 91.2191C11.9505 91.5343 10.3736 91.7908 8.93311 91.9997C10.3736 92.2086 11.9505 92.4652 13.6457 92.7803C21.373 94.2171 33.0602 97.1981 44.8514 103.24C64.333 113.223 87.5643 133.5 91.7232 173.985C92.0151 172.359 92.3733 170.548 92.8109 168.583C94.5571 160.745 97.9549 148.915 104.228 137.074C114.088 118.458 132.857 96.6707 167.52 91.9997C132.857 87.3287 114.088 65.541 104.228 46.9256C97.9549 35.084 94.5571 23.2546 92.8109 15.4162C92.3733 13.4514 92.0151 11.6408 91.7232 10.0149ZM91.4046 0.999512C91.4046 0.999512 97.711 91.9997 181.5 91.9997C97.711 91.9997 91.4046 183 91.4046 183C88.696 93.8012 -0.5 91.9997 -0.5 91.9997C-0.5 91.9997 88.696 90.1982 91.4046 0.999512Z"
                fill="#343434"
                className="w-full h-full star-rotate opacity-0"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_61">
                <rect width="182" height="182" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute left-[50%] -translate-[50%] bottom-0 flex flex-col items-center gap-2">
          <p className="text-md">Scroll Down</p>
          <span>
            <BsArrowDown className="text-gray-black text-2xl animate-arrow-down" />
          </span>
        </div>
      </section>
    </>
  );
};
export default Hero;
