import { Navbar } from "@/components/fragments/Navbar";
import { HeroSection } from "@/components/section/HeroSection";
import { HighlightSection } from "@/components/section/HighlightSection";
import { AboutSection } from "@/components/section/AboutSection";
import { ProjectSection } from "@/components/section/ProjectSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <HeroSection />
        <HighlightSection />
        <AboutSection />
        <ProjectSection />
      </main>
    </>
  )
}
