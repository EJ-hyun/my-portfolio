"use client";

import { createContext, useContext, useRef, RefObject } from "react";

interface SectionRefs {
  heroRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLElement | null>;
}

const SectionRefsContext = createContext<SectionRefs | null>(null);

export const SectionRefsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <SectionRefsContext.Provider
      value={{ heroRef, aboutRef, projectsRef, contactRef }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error("useSectionRefs must be used within SectionRefsProvider");
  }
  return context;
};
