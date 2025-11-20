import { motion } from 'framer-motion'

const items = [
  { title: 'Meta Ads Dashboard ROI', src: 'https://images.unsplash.com/photo-1713757868581-84b98d1359b2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZXRhJTIwQWRzJTIwRGFzaGJvYXJkJTIwUk9JfGVufDB8MHx8fDE3NjM2MDcwMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Calendar Packed With Demos', src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Revenue Snapshot', src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Client Praise', src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop' },
]

export default function ResultsGallery() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Results Gallery</h2>
          <p className="mt-3 text-emerald-100/80">Screenshots and proof with context. Every image ties back to appointments and revenue.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.figure key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-300/15">
              <img src={item.src} alt={item.title} className="h-48 w-full object-cover opacity-90 hover:opacity-100 transition-opacity" loading="lazy" />
              <figcaption className="p-4 text-emerald-100/90 text-sm">{item.title}</figcaption>
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }} />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
