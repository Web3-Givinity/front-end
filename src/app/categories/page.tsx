import { Footer } from "@/components/fragments/Footer"
import { Navbar } from "@/components/fragments/Navbar"
import { HeroSection } from "./components/section/HeroSection"
import { ExploreCategories } from "./components/section/ExploreCategories"
import { LatestProjects } from "./components/section/LatestProjects"

const categories = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExploreCategories />
      <LatestProjects />
      <Footer />
    </>
  )
}

export default categories
