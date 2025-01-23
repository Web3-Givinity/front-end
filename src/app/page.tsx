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
        <section className="p-4 mt-14 bg-contact">
          <div className="p-28 flex items-center justify-center gap-8">
            <div className="w-9/12">
              <h2 className="text-5xl font-medium text-primary-400">Can’t find the answers
                you need?</h2>
              <p className="text-2xl mt-6 text-gray-400 font-light">We’re here to support you! Contact us today and let’s make a difference together."</p>
            </div>
            <div className="3/12">
              <button className="py-4 px-8 rounded-full bg-primary-400 text-white font-light">Contact Us</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
