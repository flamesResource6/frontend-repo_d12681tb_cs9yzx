import Background from './components/Background'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import CaseStudies from './components/CaseStudies'
import ResultsGallery from './components/ResultsGallery'
import VideoTestimonials from './components/VideoTestimonials'
import Process from './components/Process'
import Booking from './components/Booking'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0f] text-white">
      <Background />

      {/* Page sections */}
      <Hero />
      <SocialProof />
      <CaseStudies />
      <ResultsGallery />
      <VideoTestimonials />
      <Process />
      <Booking />
      <FAQ />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-10 text-center text-emerald-200/60">
        © {new Date().getFullYear()} Performance Partner for Dev Agencies — All rights reserved.
      </footer>
    </div>
  )
}

export default App
