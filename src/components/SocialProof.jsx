import { motion } from 'framer-motion'

const logos = [
  { name: 'NebulaSoft', src: 'https://dummyimage.com/140x40/0f1419/ffffff&text=NebulaSoft' },
  { name: 'CodeForge', src: 'https://dummyimage.com/140x40/0f1419/ffffff&text=CodeForge' },
  { name: 'PixelStack', src: 'https://dummyimage.com/140x40/0f1419/ffffff&text=PixelStack' },
  { name: 'APIWorks', src: 'https://dummyimage.com/140x40/0f1419/ffffff&text=APIWorks' },
  { name: 'DevSphere', src: 'https://dummyimage.com/140x40/0f1419/ffffff&text=DevSphere' },
]

export default function SocialProof() {
  return (
    <section className="relative py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/5" />
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm uppercase tracking-widest text-emerald-300/70">Trusted by high-performing software agencies</motion.p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-80">
            {logos.map((logo) => (
              <img key={logo.name} src={logo.src} alt={logo.name} className="h-6 w-auto" />
            ))}
          </div>
          <div className="mt-4 text-emerald-200/80 text-sm">
            <span className="font-semibold">3,400+</span> appointments • <span className="font-semibold">$12.8M</span> pipeline influenced
          </div>
        </div>
      </div>
    </section>
  )
}
