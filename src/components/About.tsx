"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSectionRefs } from "@/contexts/SectionRefsContext";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const { aboutRef } = useSectionRefs();
  const [isDesktop, setIsDesktop] = useState(true);

  const section01Ref = useRef<HTMLDivElement>(null);
  const section02Ref = useRef<HTMLDivElement>(null);
  const section03Ref = useRef<HTMLDivElement>(null);
  const section04Ref = useRef<HTMLDivElement>(null);

  const text01Ref = useRef<HTMLDivElement>(null);
  const text02Ref = useRef<HTMLDivElement>(null);
  const text03Ref = useRef<HTMLDivElement>(null);
  const text04Ref = useRef<HTMLDivElement>(null);

  const step01PathRef = useRef<SVGPathElement>(null);
  const num01PathRef = useRef<SVGPathElement>(null);
  const step02PathRef = useRef<SVGPathElement>(null);
  const num02PathRef = useRef<SVGPathElement>(null);
  const step03PathRef = useRef<SVGPathElement>(null);
  const num03PathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const section = aboutRef.current;
    const section01 = section01Ref.current;
    const section02 = section02Ref.current;
    const section03 = section03Ref.current;
    const section04 = section04Ref.current;

    if (!section || !section01 || !section02 || !section03 || !section04)
      return;

    const step01Path = step01PathRef.current;
    const step01PathLength = step01Path?.getTotalLength();
    const num01Path = num01PathRef.current;
    const num01PathLength = num01Path?.getTotalLength();

    const step02Path = step02PathRef.current;
    const step02PathLength = step02Path?.getTotalLength();
    const num02Path = num02PathRef.current;
    const num02PathLength = num02Path?.getTotalLength();

    const step03Path = step03PathRef.current;
    const step03PathLength = step03Path?.getTotalLength();
    const num03Path = num03PathRef.current;
    const num03PathLength = num03Path?.getTotalLength();

    // 초기 상태 설정
    if (num01Path) {
      gsap.set(num01Path, {
        strokeDasharray: num01PathLength,
        strokeDashoffset: num01PathLength,
      });
    }
    if (num02Path) {
      gsap.set(num02Path, {
        strokeDasharray: num02PathLength,
        strokeDashoffset: num02PathLength,
      });
    }
    if (num03Path) {
      gsap.set(num03Path, {
        strokeDasharray: num03PathLength,
        strokeDashoffset: num03PathLength,
      });
    }

    if (isDesktop) {
      if (step01Path) {
        gsap.set(step01Path, {
          strokeDasharray: step01PathLength,
          strokeDashoffset: step01PathLength,
        });
      }
      if (step02Path) {
        gsap.set(step02Path, {
          strokeDasharray: step02PathLength,
          strokeDashoffset: step02PathLength,
        });
      }
      if (step03Path) {
        gsap.set(step03Path, {
          strokeDasharray: step03PathLength,
          strokeDashoffset: step03PathLength,
        });
      }
    }

    // Step 01
    const tl01 = gsap.timeline({
      scrollTrigger: {
        trigger: section01,
        start: "top 55%",
        end: "+=600",
        scrub: 1,
      },
    });

    if (num01Path) {
      tl01.to(num01Path, { strokeDashoffset: 0, ease: "none" }, 0);
    }
    if (text01Ref.current) {
      tl01.to(text01Ref.current, { opacity: 1, y: 0, ease: "power2.out" }, 0);
    }
    if (step01Path && isDesktop) {
      tl01.to(step01Path, { strokeDashoffset: 0, ease: "none" }, ">");
    }

    // Step 02
    const tl02 = gsap.timeline({
      scrollTrigger: {
        trigger: section02,
        start: "top 55%",
        end: "+=600",
        scrub: 1,
      },
    });

    if (num02Path) {
      tl02.to(num02Path, { strokeDashoffset: 0, ease: "none" }, 0);
    }
    if (text02Ref.current) {
      tl02.to(text02Ref.current, { opacity: 1, y: 0, ease: "power2.out" }, 0);
    }
    if (step02Path && isDesktop) {
      tl02.to(step02Path, { strokeDashoffset: 0, ease: "none" }, ">");
    }

    // Step 03
    const tl03 = gsap.timeline({
      scrollTrigger: {
        trigger: section03,
        start: "top 55%",
        end: "+=600",
        scrub: 1,
      },
    });

    if (num03Path) {
      tl03.to(num03Path, { strokeDashoffset: 0, ease: "none" }, 0);
    }
    if (text03Ref.current) {
      tl03.to(text03Ref.current, { opacity: 1, y: 0, ease: "power2.out" }, 0);
    }
    if (step03Path && isDesktop) {
      tl03.to(step03Path, { strokeDashoffset: 0, ease: "none" }, ">");
    }

    // Step 04
    const tl04 = gsap.timeline({
      scrollTrigger: {
        trigger: section04,
        start: "top 55%",
        end: "+=600",
        scrub: 1,
      },
    });

    if (text04Ref.current) {
      tl04.to(text04Ref.current, { opacity: 1, y: 0, ease: "power2.out" }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerEl = trigger.vars.trigger;
        if (
          triggerEl === section01 ||
          triggerEl === section02 ||
          triggerEl === section03 ||
          triggerEl === section04
        ) {
          trigger.kill();
        }
      });
    };
  }, [aboutRef, isDesktop]);

  return (
    <section
      ref={aboutRef}
      className="pt-40 sm:pt-60 xl:pt-80 px-4 sm:px-6 xl:px-0 bg-center bg-cover bg-fixed bg-[url('/assets/images/section02_bg.png')]"
    >
      {/* Step 01 */}
      <div
        ref={section01Ref}
        className="flex flex-col xl:flex-row max-w-7xl xl:mx-auto mb-20 xl:mb-0"
      >
        {isDesktop && (
          <div className="relative mb-12 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="441.693"
              height="815.628"
              viewBox="0 0 441.693 815.628"
              className="w-full h-auto pt-19.5"
            >
              <path
                d="M245.792-318c-5.324 5.333-31.848 17.8-97.341 25-81.866 9-307.5-16-337.447 95C-246.427 14.847 189.385-51 204.36 106c11.98 125.6-9.568 300-223.568 390"
                transform="translate(195.193 318.707)"
                fill="none"
                stroke="rgb(254, 181, 0)"
                strokeWidth="2"
                ref={step01PathRef}
              />
            </svg>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="146"
                height="246"
                viewBox="0 0 146 246"
              >
                <path
                  d="M-53.884-52.143q-10.187 6.688-18.406 6.69v-31.99h58.214V97.135H-72.29v24.331h144V97.135H15.2v-219.669h-30.639c-1.206 15.9-6.547 32.827-15.5 46.45a82.861 82.861 0 0 1-20.074 21.952q-1.455 1.059-2.871 1.989"
                  transform="translate(73.29 123.534)"
                  fill="none"
                  stroke="rgb(254, 181, 0)"
                  strokeWidth="2"
                  ref={num01PathRef}
                />
              </svg>
            </div>
          </div>
        )}

        {!isDesktop && (
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="146"
              height="246"
              viewBox="0 0 146 246"
              className="w-16 sm:w-20"
            >
              <path
                d="M-53.884-52.143q-10.187 6.688-18.406 6.69v-31.99h58.214V97.135H-72.29v24.331h144V97.135H15.2v-219.669h-30.639c-1.206 15.9-6.547 32.827-15.5 46.45a82.861 82.861 0 0 1-20.074 21.952q-1.455 1.059-2.871 1.989"
                transform="translate(73.29 123.534)"
                fill="none"
                stroke="rgb(254, 181, 0)"
                strokeWidth="2"
                ref={num01PathRef}
              />
            </svg>
          </div>
        )}

        <div
          ref={text01Ref}
          className="max-w-2xl xl:mx-auto xl:mt-15 opacity-0 translate-y-5 text-left"
        >
          <p className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-3 mb-4 sm:mb-6 text-lg sm:text-xl text-[#FEB500]">
            <span className="font-accent text-3xl sm:text-4xl">
              Web Designer
            </span>
            <span className="text-base sm:text-lg">Apr.2017~</span>
          </p>
          <p className="mb-2 text-base sm:text-lg text-white">
            웹디자인과 퍼블리셔 업무를 시작
          </p>
          <ul className="flex flex-wrap gap-2">
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              Photoshop
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              Illustrator
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              HTML5
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              CSS3
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              JQuery
            </li>
          </ul>
        </div>
      </div>

      {/* Step 02 */}
      <div
        ref={section02Ref}
        className="relative flex flex-col xl:flex-row max-w-7xl mx-auto mb-20 xl:mb-0 xl:pl-25 xl:-mt-19"
      >
        {isDesktop && (
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="166"
                height="250"
                viewBox="0 0 166 250"
              >
                <path
                  d="M126.14-24.383q43.3-34.747,67.85-57.06a275.131,275.131,0,0,0,41.426-46.67q16.877-24.357,16.877-47.863q0-22.143-10.74-34.918t-34.607-12.775q-23.185,0-35.971,14.478t-13.809,38.665h-30q1.364-38.154,23.185-58.934t56.258-20.78q35.119,0,55.746,19.418t20.628,53.484q0,28.275-16.877,55.016a241.237,241.237,0,0,1-38.358,47.011q-21.48,20.269-54.894,47.181H290.14V-2.24h-164Z"
                  transform="translate(-125.14 251.24)"
                  fill="none"
                  stroke="#FEB500"
                  strokeWidth="2"
                  ref={num02PathRef}
                />
              </svg>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="878.227"
              height="721.322"
              viewBox="0 0 878.227 721.322"
              className="w-full h-auto"
            >
              <path
                d="M-478.75-40C-459.245 114.155-287 309.394-151.914 314.38c122.032 4.5 161.042-116.618 258.068-134.135 103.454-18.679 189.059 16.26 230.06 59.06 58.015 60.561 73.019 148.65 52.014 210.212-19.811 58.058-69.769 120.621-47.514 231.483"
                transform="translate(479.742 40.125)"
                fill="none"
                stroke="rgb(254, 181, 0)"
                strokeWidth="2"
                ref={step02PathRef}
              />
            </svg>
          </div>
        )}

        {!isDesktop && (
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="166"
              height="250"
              viewBox="0 0 166 250"
              className="w-16 sm:w-20"
            >
              <path
                d="M126.14-24.383q43.3-34.747,67.85-57.06a275.131,275.131,0,0,0,41.426-46.67q16.877-24.357,16.877-47.863q0-22.143-10.74-34.918t-34.607-12.775q-23.185,0-35.971,14.478t-13.809,38.665h-30q1.364-38.154,23.185-58.934t56.258-20.78q35.119,0,55.746,19.418t20.628,53.484q0,28.275-16.877,55.016a241.237,241.237,0,0,1-38.358,47.011q-21.48,20.269-54.894,47.181H290.14V-2.24h-164Z"
                transform="translate(-125.14 251.24)"
                fill="none"
                stroke="#FEB500"
                strokeWidth="2"
                ref={num02PathRef}
              />
            </svg>
          </div>
        )}

        <div
          ref={text02Ref}
          className="max-w-2xl xl:mx-auto opacity-0 translate-y-5 text-left xl:absolute xl:left-150 xl:mt-15"
        >
          <p className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-3 mb-4 sm:mb-6 text-lg sm:text-xl text-[#FEB500]">
            <span className="font-accent text-3xl sm:text-4xl">Publisher</span>
            <span className="text-base sm:text-lg">Nov.2020~</span>
          </p>
          <p className="mb-2 text-base sm:text-lg text-white">
            퍼블리셔 업무 위주로 집중, 라이브러리 활용
          </p>
          <ul className="flex flex-wrap gap-2">
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              XD
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              HTML5
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              CSS3
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              SCSS
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              GSAP
            </li>
          </ul>
        </div>
      </div>

      {/* Step 03 */}
      <div
        ref={section03Ref}
        className="relative flex flex-col xl:flex-row-reverse max-w-7xl mx-auto mb-20 xl:mb-0"
      >
        {isDesktop && (
          <div className="relative max-w-xs mx-auto -mt-17 pr-[50px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="164.082"
                height="252"
                viewBox="0 0 164.082 252"
              >
                <path
                  d="M324.68-184.542q2.367-31,24.013-48.518t56.142-17.52q23,0,39.739,8.255t25.365,22.406a60.273,60.273,0,0,1,8.624,32.008q0,20.889-12.006,36.051a53.966,53.966,0,0,1-31.284,19.542v1.685q21.983,5.391,34.835,21.226T482.96-67.965a68.153,68.153,0,0,1-8.793,34.535q-8.793,15.33-26.38,24.09T405.511-.58q-35.85,0-58.848-18.7t-25.7-53.066h29.762q2.367,20.216,16.572,33.019t37.879,12.8q23.674,0,36.019-12.3t12.344-31.84q0-25.27-16.91-36.388t-51.069-11.119h-7.779v-25.606H385.9q31.115-.337,47.01-10.276t15.9-30.829q0-17.857-11.668-28.639T403.82-224.3q-20.969,0-33.82,10.782T354.78-184.542Z"
                  transform="translate(-319.878 251.58)"
                  fill="none"
                  stroke="#FEB500"
                  strokeWidth="2"
                  ref={num03PathRef}
                />
              </svg>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="220.645"
              height="697.969"
              viewBox="0 0 220.645 697.969"
              className="w-full h-auto -mt-7"
            >
              <path
                d="M810 106.406C751.97 28.635 521.352 5.2 399.789 65.526c-59.03 31.408-141.472 110.874-163.083 163.52-6.549 15.953 3 20.609 9 20.939 5.586.31 12.006-3.988 7-20.939-6.908-17.477-10.215-122.8-137.934-189.51"
                transform="rotate(-90 390.52 420.878)"
                fill="none"
                stroke="rgb(254, 181, 0)"
                strokeLinecap="round"
                strokeWidth="2"
                ref={step03PathRef}
              />
            </svg>
          </div>
        )}

        {!isDesktop && (
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="164.082"
              height="252"
              viewBox="0 0 164.082 252"
              className="w-16 sm:w-20"
            >
              <path
                d="M324.68-184.542q2.367-31,24.013-48.518t56.142-17.52q23,0,39.739,8.255t25.365,22.406a60.273,60.273,0,0,1,8.624,32.008q0,20.889-12.006,36.051a53.966,53.966,0,0,1-31.284,19.542v1.685q21.983,5.391,34.835,21.226T482.96-67.965a68.153,68.153,0,0,1-8.793,34.535q-8.793,15.33-26.38,24.09T405.511-.58q-35.85,0-58.848-18.7t-25.7-53.066h29.762q2.367,20.216,16.572,33.019t37.879,12.8q23.674,0,36.019-12.3t12.344-31.84q0-25.27-16.91-36.388t-51.069-11.119h-7.779v-25.606H385.9q31.115-.337,47.01-10.276t15.9-30.829q0-17.857-11.668-28.639T403.82-224.3q-20.969,0-33.82,10.782T354.78-184.542Z"
                transform="translate(-319.878 251.58)"
                fill="none"
                stroke="#FEB500"
                strokeWidth="2"
                ref={num03PathRef}
              />
            </svg>
          </div>
        )}

        <div
          ref={text03Ref}
          className="text-left max-w-2xl xl:mx-auto opacity-0 translate-y-5 xl:mt-10"
        >
          <p className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-3 mb-4 sm:mb-6 text-lg sm:text-xl text-[#FEB500]">
            <span className="text-base sm:text-lg">Mar.2025~</span>
            <span className="font-accent text-3xl sm:text-4xl">
              Frontend developer
            </span>
          </p>
          <p className="mb-2 text-base sm:text-lg text-white">
            React 작업 프로젝트에 처음 참여
          </p>
          <ul className="flex flex-wrap gap-2">
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              Figma
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              React
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              Next
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              Tailwind
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              JavaScript
            </li>
            <li className="flex items-center justify-center py-1 px-3 bg-gray-400 text-white text-sm sm:text-base rounded-2xl">
              Typescript
            </li>
          </ul>
        </div>
      </div>

      {/* Step 04 */}
      <div ref={section04Ref} className="pb-20 sm:pb-32 xl:pb-40">
        <div className="w-full text-center xl:-mt-8">
          <div className="relative w-full max-w-[600px] sm:max-w-[800px] xl:max-w-[1015px] mx-auto h-[50px] sm:h-[70px] xl:h-[85px]">
            <Image
              src="/assets/images/progress.svg"
              alt="Profile"
              fill
              className="object-contain"
            />
          </div>
          <p
            ref={text04Ref}
            className="text-sm sm:text-base xl:text-lg text-white mt-6 sm:mt-8 xl:mt-10 px-4 opacity-0 translate-y-5 text-center"
          >
            웹디자이너로 시작해 퍼블리셔와 프론트엔드를 경험해 오면서, 저는
            하나의 서비스를 만드는 일이 기초부터 구조,{" "}
            <br className="hidden xl:block" />
            완성까지 차곡차곡 쌓아 올려야 하는 집 짓기와 같다는 믿음으로 전체
            흐름을 깊이 이해하려 꾸준히 앞으로 나아왔습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
