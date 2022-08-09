import React from "react"
import { FeaturesSection } from "./sections/features-section/FeaturesSection"
import { HeroSection } from "./sections/hero-section/HeroSection"

export const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <HeroSection />

      {/* Features section */}
      <FeaturesSection />
    </div>
  )
}

export default HomePage
