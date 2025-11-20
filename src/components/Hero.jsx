import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-600/20 via-emerald-500/10 to-transparent" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0 opacity-90">
        <Spline 
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glass overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0f]/60 via-[#0a0f0f]/70 to-[#0a0f0f]/90 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-400/10 backdrop-blur-md border border-emerald-300/20 rounded-full px-4 py-2 mb-6 text-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm">Guaranteed Results For Software Dev Agencies</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Software Dev Agencies: Get 30 Qualified Appointments in 90 Days — Or You Don't Pay
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-emerald-100/90">
            We build and run AI-powered Meta campaigns that consistently fill your calendar with ready-to-buy prospects. No fluff — just qualified demos and signed retainers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="group inline-flex items-center justify-center rounded-xl bg-white text-[#0a0f0f] font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(16,185,129,0.25)] hover:shadow-[0_14px_40px_rgba(16,185,129,0.35)] transition-shadow">
              Book Strategy Call
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="text-emerald-200/80 text-sm">
              <span className="font-semibold">3,400+</span> appointments booked • <span className="font-semibold">120+</span> agencies helped
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
