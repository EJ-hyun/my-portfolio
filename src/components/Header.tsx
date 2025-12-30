"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useSectionRefs } from "@/contexts/SectionRefsContext";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const { heroRef, aboutRef, projectsRef, contactRef } = useSectionRefs();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

    return () => {
      observer.disconnect();
    };
  }, [heroRef, aboutRef, projectsRef, contactRef]);

  const scrollToSection = (
    ref: React.RefObject<HTMLElement | HTMLDivElement | null>
  ) => {
    if (!ref.current) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: ref.current,
        offsetY: 0,
      },
      ease: "power2.inOut",
    });
  };

  const menuItems = [
    { id: "home", label: "Home", ref: heroRef },
    { id: "about", label: "About", ref: aboutRef },
    { id: "projects", label: "Projects", ref: projectsRef },
    { id: "contact", label: "Contact", ref: contactRef },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-[hsla(0,0%,100%,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection(heroRef)}
            className="text-3xl font-accent text-gray-black"
          >
            HEJ
          </button>

          <ul className="flex items-center gap-8">
            {menuItems.map(({ id, label, ref }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(ref)}
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
