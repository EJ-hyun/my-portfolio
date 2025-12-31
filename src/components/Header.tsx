"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSectionRefs } from "@/contexts/SectionRefsContext";
import { HiMenuAlt3, HiX } from "react-icons/hi";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const { heroRef, aboutRef, projectsRef, contactRef } = useSectionRefs();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ ref 매핑 객체 (렌더링 외부에서 사용)
  const sectionRefs = {
    home: heroRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  // ✅ menuItems에는 ref를 포함하지 않음
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (heroRef.current) {
      heroRef.current.setAttribute("data-section", "home");
      observer.observe(heroRef.current);
    }
    if (aboutRef.current) {
      aboutRef.current.setAttribute("data-section", "about");
      observer.observe(aboutRef.current);
    }
    if (projectsRef.current) {
      projectsRef.current.setAttribute("data-section", "projects");
      observer.observe(projectsRef.current);
    }
    if (contactRef.current) {
      contactRef.current.setAttribute("data-section", "contact");
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, [heroRef, aboutRef, projectsRef, contactRef]);

  // ✅ id를 받아서 해당하는 ref로 스크롤
  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (!ref.current) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: ref.current,
        offsetY: 0,
      },
      ease: "power2.inOut",
    });

    // 모바일 메뉴 닫기
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-[hsla(0,0%,100%,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl sm:text-3xl font-accent text-gray-black z-50"
          >
            HEJ
          </button>

          {/* Desktop 메뉴 */}
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative text-lg font-medium transition-colors duration-300 ${
                    activeSection === id
                      ? "text-gray-black"
                      : "text-gray-800 hover:text-gray-black"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-black" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile 햄버거 버튼 */}
          <button
            className="lg:hidden z-50 text-gray-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile 메뉴 */}
        <div
          className={`lg:hidden fixed inset-0 bg-background-ivory transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {menuItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-4xl font-accent transition-colors duration-300 ${
                  activeSection === id
                    ? "text-gray-black"
                    : "text-gray-600 hover:text-gray-black"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
