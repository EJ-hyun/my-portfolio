"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSectionRefs } from "@/contexts/SectionRefsContext";
import { Project } from "@/types/project";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const { projectsRef } = useSectionRefs();
  const visualWrapperRef = useRef<HTMLDivElement>(null);
  const scrollTriggerInstanceRef = useRef<ScrollTrigger | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      number: "01",
      title: "Re:Life",
      subtitle: "AI Life Simulator",
      role: "Frontend Developer",
      description:
        "Re:Life는 사용자의 과거 인생 선택을 기반으로, AI가 '만약 그때 다른 선택을 했다면?'이라는 평행우주적 인생 시나리오를 시뮬레이션하여 제공하는 웹 서비스입니다.",
      period: "2025.09.15 ~ 2025.10.16(4주)",
      contribute:
        "데브코스 팀프로젝트: 메인, 인생기록, 시나리오 분석 영역 담당",
      deploy: "AWS 기간 종료로 배포 중단",
      tags: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "GSAP",
        "Three.js",
      ],
      images: [
        "/assets/images/project01_1.png",
        "/assets/images/project01_2.png",
        "/assets/images/project01_3.png",
      ],
      bgColor: "bg-background-ivory",
      textColor: "text-gray-black",
      link: "https://www.relife.kr/",
      github: "https://github.com/EJ-hyun/relife_pj",
    },
    {
      id: 2,
      number: "02",
      title: "PickItBook",
      subtitle: "랜덤 룰렛 책 추천",
      role: "Frontend Developer",
      description:
        "PickItBook은 책을 '룰렛'으로 랜덤하게 뽑고, 독서 챌린지까지 제시함으로써 선택장애를 해소하고 재미 요소까지 살린 책 추천 서비스입니다.",
      period: "2025.08.22 ~ 2025.09.08(2.5주)",
      contribute:
        "데브코스 팀프로젝트: 메인, bookshelf의 키워드, 책 쌓기 영역 담당",
      tags: ["React", "TypeScript", "GSAP", "Tailwind CSS", "SVG Animation"],
      images: [
        "/assets/images/project02_1.png",
        "/assets/images/project02_2.png",
        "/assets/images/project02_3.png",
      ],
      bgColor: "bg-[#d4d4d4]",
      textColor: "text-gray-black",
      link: "https://pick-it-book.vercel.app/",
      github: "https://github.com/EJ-hyun/pickitbook_pj",
    },
    {
      id: 3,
      number: "03",
      title: "Seediary",
      subtitle: "감정일기 다이어리",
      role: "Frontend Developer",
      description:
        "Seediary는 사용자 일기 데이터를 기반으로 AI 감정 분석과 멘탈 케어 챗봇등이 추가된 확장형 감정일기 서비스입니다.",
      period: "2025.07.22 ~ 2025.08.06(2주)",
      contribute: "데브코스 팀프로젝트: 메인, 다이어리 영역 담당",
      tags: ["React", "TypeScript", "Vite", "supabase"],
      images: [
        "/assets/images/project03_1.png",
        "/assets/images/project03_2.png",
        "/assets/images/project03_3.png",
      ],
      bgColor: "bg-background-ivory",
      textColor: "text-gray-black",
      link: "https://seediary.vercel.app/about",
      github: "https://github.com/EJ-hyun/seediary_pj",
    },
    {
      id: 4,
      number: "04",
      title: "BeautyPoint",
      subtitle: "아모레 뷰티포인트",
      role: "Frontend Developer",
      description:
        "뷰티포인트는 아모레퍼시픽의 화장품, 생활용품, 건강식품의 모든 브랜드와 이니스프리, 에뛰드, 에스쁘아의 고객들에게 제공되는 통합 멤버십 서비스입니다.",
      period: "2024.12 ~ 2025.03",
      contribute: "뷰티포인트 스토리 및 사이트 오픈까지 유지보수 업무",
      tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
      images: [
        "/assets/images/project04_1.png",
        "/assets/images/project04_2.png",
        "/assets/images/project04_3.png",
      ],
      bgColor: "bg-[#d4d4d4]",
      textColor: "text-gray-black",
      link: "https://www.beautypoint.co.kr/",
    },
    {
      id: 5,
      number: "05",
      title: "AP Ventures",
      subtitle: "AP Ventures",
      role: "Web Publisher",
      contribute: "one-page scroll 형식의 퍼블리싱 업무",
      description:
        "AP Ventures는 국내외 뷰티 브랜드, 기술 분야의 스타트업 회사에 직간접 투자하는 아모레퍼시픽 벤처스 서비스입니다.",
      tags: ["HTML5", "CSS3", "JQuery", "Responsive"],
      images: [
        "/assets/images/project05_1.png",
        "/assets/images/project05_2.png",
        "/assets/images/project05_3.png",
      ],
      bgColor: "bg-background-ivory",
      textColor: "text-gray-black",
      link: "https://ventures.amorepacific.com/index.do",
    },
    {
      id: 6,
      number: "06",
      title: "Hulam",
      subtitle: "휴램",
      role: "Web Publisher",
      description: "휴램은 인사노무 플랫폼을 제공하는 서비스입니다.",
      contribute: "브랜드 사이트 퍼블리싱 업무",
      tags: ["HTML5", "CSS3", "JQuery", "Responsive"],
      images: [
        "/assets/images/project06_1.png",
        "/assets/images/project06_2.png",
        "/assets/images/project06_3.png",
      ],
      bgColor: "bg-[#d4d4d4]",
      textColor: "text-gray-black",
      link: "https://hulam.co.kr/",
    },
  ];

  useEffect(() => {
    const visualWrapper = visualWrapperRef.current;
    const projectSection = projectsRef.current;

    if (!visualWrapper || !projectSection) return;

    const killScrollTrigger = () => {
      if (scrollTriggerInstanceRef.current) {
        scrollTriggerInstanceRef.current.kill();
        scrollTriggerInstanceRef.current = null;
      }
    };

    // 데스크톱 가로 스크롤 설정
    const setupHorizontalScroll = () => {
      killScrollTrigger();

      const sections = visualWrapper.querySelectorAll("[data-project-item]");
      const isDesktop = window.innerWidth >= 1280;

      if (isDesktop) {
        // Width 설정
        sections.forEach((section) => {
          (section as HTMLElement).style.width = `${window.innerWidth}px`;
        });

        const totalWidth = sections.length * window.innerWidth;
        visualWrapper.style.width = `${totalWidth}px`;

        scrollTriggerInstanceRef.current = ScrollTrigger.create({
          trigger: projectSection,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: gsap.to(visualWrapper, {
            x: () => -(totalWidth - window.innerWidth),
            ease: "none",
          }),
        });
      } else {
        visualWrapper.style.width = "auto";
        visualWrapper.style.transform = "none";
        sections.forEach((section) => {
          (section as HTMLElement).style.width = "auto";
        });
      }
    };

    setupHorizontalScroll();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupHorizontalScroll();
      }, 150);
    };

    // Visibility change 핸들러
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
      killScrollTrigger();
    };
  }, [projectsRef]);

  return (
    <section ref={projectsRef} className="relative">
      <div ref={visualWrapperRef} className="xl:flex xl:h-screen">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-project-item
            className={`xl:shrink-0 xl:h-screen flex items-center justify-center ${project.bgColor} 
              xl:w-screen min-h-screen xl:min-h-0 py-20 xl:py-0`}
          >
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 xl:px-8">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                <div className={`xl:pt-5 xl:col-span-5 ${project.textColor}`}>
                  <div className="flex items-center gap-4 mb-6 xl:mb-8">
                    <span className="text-sm font-medium opacity-60">
                      {project.role}
                    </span>
                    <div className="h-px flex-1 bg-current opacity-20"></div>
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl sm:text-5xl xl:text-7xl font-accent">
                      PROJECT {project.number}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg mb-4 xl:mb-5 break-keep">
                    {project.description}
                  </p>

                  {project.period && (
                    <p className="text-sm sm:text-base mb-1">
                      - {project.period}
                    </p>
                  )}

                  {project.contribute && (
                    <p className="text-sm sm:text-base mb-1">
                      - {project.contribute}
                    </p>
                  )}

                  {project.deploy && (
                    <p className="text-xs sm:text-sm mb-1">
                      * {project.deploy}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2 mb-6 xl:mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 border-gray-600 border text-xs sm:text-sm rounded-2xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 xl:gap-4">
                    <a
                      href={project.link || "#"}
                      target={project.link ? "_blank" : "_self"}
                      rel={project.link ? "noopener noreferrer" : ""}
                      onClick={(e) => {
                        if (!project.link) {
                          e.preventDefault();
                          alert("프로젝트 상세 페이지 준비중입니다.");
                        }
                      }}
                      className={`px-5 py-3 text-center text-sm xl:text-base rounded-md ${
                        project.textColor === "text-white"
                          ? "bg-white text-gray-black hover:bg-gray-100"
                          : "bg-[#FFAF50] text-white hover:bg-[#e18c26]"
                      } transition-colors duration-300 inline-block cursor-pointer`}
                    >
                      View Detail
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-3 text-center text-sm xl:text-base rounded-md ${
                          project.textColor === "text-white"
                            ? "border-white text-white hover:bg-white hover:text-gray-black border-2"
                            : "bg-gray-400 text-white hover:bg-gray-500"
                        } transition-colors duration-300 inline-block`}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className={`xl:col-span-7 order-1 xl:order-2`}>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 xl:gap-4">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className={`relative overflow-hidden ${
                          i === 0
                            ? "col-span-2 h-40 sm:h-56 xl:h-80"
                            : "h-28 sm:h-40 xl:h-64"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  <div
                    className={`text-center xl:text-right mt-6 ${project.textColor} opacity-40`}
                  >
                    <span className="text-sm">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
