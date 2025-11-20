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
      {/* Ambient particles / subtle vignette */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(4,120,87,0.2),_transparent_60%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'rgba(16,185,129,0.15)\'/%3E%3C/svg%3E")' }} />
      </div>

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
