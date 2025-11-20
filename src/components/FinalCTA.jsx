import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(16,185,129,0.12),_transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center rounded-3xl p-10 bg-white/5 backdrop-blur-xl border border-emerald-300/15 shadow-[0_20px_80px_rgba(16,185,129,0.15)]">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">We only onboard 4 new agencies per month</h3>
          <p className="mt-3 text-emerald-100/85">If you want the 30-in-90 guarantee for your software dev studio, now is the window.</p>
          <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-white text-[#0a0f0f] font-semibold px-6 py-3 mt-6 shadow-[0_10px_30px_rgba(16,185,129,0.25)] hover:shadow-[0_14px_40px_rgba(16,185,129,0.35)] transition-shadow">
            Book Your Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
