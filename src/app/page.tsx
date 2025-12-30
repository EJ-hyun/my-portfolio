import Home from "@/components/Home";
import { SectionRefsProvider } from "@/contexts/SectionRefsContext";

export default function Page() {
  return (
    <SectionRefsProvider>
      <Home />
    </SectionRefsProvider>
  );
}
