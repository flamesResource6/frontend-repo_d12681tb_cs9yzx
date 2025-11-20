import { motion } from 'framer-motion'

const videos = [
  {
    name: 'Aria P.',
    company: 'NebulaSoft',
    summary: '67 qualified demos in 60 days',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Marco D.',
    company: 'CodeForge',
    summary: 'From outbound-only to full pipeline',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Priya V.',
    company: 'APIWorks',
    summary: 'CPA down 51% with attribution fixed',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumb: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function VideoTestimonials() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Video Testimonials</h2>
          <p className="mt-3 text-emerald-100/80">Hear directly from leaders who switched to an AI-led paid acquisition engine.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-300/15 overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={v.url}
                  title={`${v.name} - ${v.company}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-white font-semibold">{v.name} • {v.company}</p>
                <p className="text-emerald-100/80 text-sm">{v.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
