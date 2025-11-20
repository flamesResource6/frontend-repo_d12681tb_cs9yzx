import { motion } from 'framer-motion'

const cases = [
  {
    name: 'NebulaSoft • Healthcare Apps',
    pain: 'Lead quality was inconsistent and outbound was stalling. Sales calendar <20% utilization.',
    solution: 'Deployed AI-audience building, creative iteration sprints, and server-side conversion API on Meta.',
    results: '67 qualified bookings in 60 days • CAC down 42% • 5 new retainers at $8k/mo',
    quote: 'We went from chasing to choosing clients. Best pipeline quality we’ve seen.',
    author: 'Lena K., COO',
  },
  {
    name: 'CodeForge • Fintech Integrations',
    pain: 'Struggled to productize offers and scale past founder-led sales.',
    solution: 'Positioning overhaul + VSL funnel + rapid creative testing with dynamic rules.',
    results: '38 SQLs in first 45 days • $420k in influenced pipeline • 3 enterprise pilots',
    quote: 'Calendars packed. Deals are larger and close faster. Risk-free felt legit.',
    author: 'Arman S., Founder',
  },
  {
    name: 'APIWorks • SaaS Dev Studio',
    pain: 'Previous agencies couldn’t make paid work; attribution was a mess.',
    solution: 'Rebuilt conversion architecture, implemented offline events + MMM-ready tracking.',
    results: 'CPA -51% • 2.6x lead-to-opportunity rate • 4 booked per day sustaining',
    quote: 'They brought a real system, not just ads. Night and day difference.',
    author: 'Priya V., Head of Growth',
  },
]

export default function CaseStudies() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Case Studies</h2>
          <p className="mt-3 text-emerald-100/80">A few snapshots of what happens when AI-driven Meta systems meet productized dev offers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-emerald-300/15 shadow-[0_10px_50px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_70px_rgba(16,185,129,0.12)]"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                background: 'linear-gradient(180deg, rgba(16,185,129,0.18), rgba(16,185,129,0.02))',
                maskImage: 'linear-gradient(#000, transparent)'
              }} />
              <div className="relative">
                <p className="text-emerald-200/90 text-sm">{c.name}</p>
                <div className="h-px w-10 bg-gradient-to-r from-emerald-400/60 to-transparent my-4" />
                <p className="text-emerald-100/80 text-sm">{c.pain}</p>
                <p className="mt-3 text-emerald-100/90 text-sm">{c.solution}</p>
                <p className="mt-4 text-white font-semibold">{c.results}</p>
                <div className="mt-6 p-4 rounded-xl bg-emerald-400/10 border border-emerald-300/20">
                  <p className="text-emerald-100/90 italic">“{c.quote}”</p>
                  <p className="mt-2 text-emerald-200/70 text-sm">— {c.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
