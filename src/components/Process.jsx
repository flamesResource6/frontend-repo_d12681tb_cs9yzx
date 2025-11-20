import { motion } from 'framer-motion'
import { Brain, Target, Rocket, BarChart } from 'lucide-react'

const steps = [
  {
    icon: Brain,
    title: 'Intelligent Positioning',
    desc: 'Clarify your most valuable dev offer and structure it to scale paid acquisition.',
  },
  {
    icon: Target,
    title: 'AI Audience Engine',
    desc: 'Build adaptive audiences and creative angles that self-optimize with Meta signals.',
  },
  {
    icon: BarChart,
    title: 'Conversion Architecture',
    desc: 'Server-side tracking, MMM-ready attribution, and frictionless booking flow.',
  },
  {
    icon: Rocket,
    title: 'Scale With Control',
    desc: 'Automations and rules to maintain quality while increasing booked demos.',
  },
]

export default function Process() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-3 text-emerald-100/80">A tight, repeatable system that turns paid traffic into revenue for software dev agencies.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-emerald-300/15">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/15 border border-emerald-300/25 flex items-center justify-center text-emerald-300 mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <p className="text-white font-semibold">{s.title}</p>
              <p className="text-emerald-100/80 text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
