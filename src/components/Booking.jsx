import { motion } from 'framer-motion'

export default function Booking() {
  return (
    <section id="book" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-emerald-300/15">
            <h3 className="text-2xl font-bold text-white">Book Your Strategy Call</h3>
            <p className="mt-3 text-emerald-100/80">
              On this 20-minute call, we’ll diagnose your current acquisition, outline the exact system we’d deploy, and confirm if we can hit the 30-in-90 guarantee. If not, we’ll tell you straight.
            </p>
            <ul className="mt-6 space-y-2 text-emerald-100/80 text-sm list-disc list-inside">
              <li>No long decks. Real examples and numbers.</li>
              <li>If we’re not confident we can win, we won’t make an offer.</li>
              <li>Simple terms: pay for results, not promises.</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-emerald-400/10 border border-emerald-300/20">
              <p className="text-white font-semibold">Our guarantee:</p>
              <p className="text-emerald-100/80 text-sm mt-1">30 qualified appointments in 90 days — or you don’t pay.</p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-2 bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 border border-emerald-300/20">
            <div className="rounded-xl overflow-hidden bg-[#0f1419]">
              <iframe
                title="Calendly"
                src="https://calendly.com/"
                className="w-full h-[620px]"
                frameBorder="0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
