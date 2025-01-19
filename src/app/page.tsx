import { Navbar } from "@/components/fragments/Navbar";
import { HeroSection } from "@/components/section/HeroSection";
import { HighlightSection } from "@/components/section/HighlightSection";
import { AboutSection } from "@/components/section/AboutSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <HeroSection />
        <HighlightSection />
        <AboutSection />
      </main>
    </>
  )
}
