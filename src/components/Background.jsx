import { motion, useReducedMotion } from 'framer-motion'

function AnimatedBlob({ className = '', color = 'rgba(16,185,129,0.25)', duration = 40, delay = 0, size = 600, initial = { x: 0, y: 0 } }) {
  const prefersReduced = useReducedMotion()
  const style = {
    width: size,
    height: size,
    background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)`,
    filter: 'blur(60px)',
  }

  if (prefersReduced) {
    return <div className={`absolute rounded-full ${className}`} style={style} aria-hidden />
  }

  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={style}
      initial={{ ...initial, scale: 0.9, opacity: 0.7 }}
      animate={{
        x: [initial.x, initial.x + 120, initial.x - 80, initial.x],
        y: [initial.y, initial.y - 100, initial.y + 120, initial.y],
        scale: [0.9, 1.05, 0.95, 0.9],
        opacity: [0.55, 0.7, 0.6, 0.55],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden
    />
  )
}

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Deep base gradient with vignette */}
      <div className="absolute inset-0 bg-[#0a0f0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_10%,_rgba(16,185,129,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_700px_at_90%_20%,_rgba(4,120,87,0.10),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_120%,_rgba(5,150,105,0.14),_transparent_60%)]" />

      {/* Smooth animated blobs (GPU-friendly) */}
      <AnimatedBlob color="rgba(16,185,129,0.22)" duration={46} delay={0} size={700} initial={{ x: -120, y: -40 }} className="left-[-10%] top-[-10%]" />
      <AnimatedBlob color="rgba(4,120,87,0.20)" duration={52} delay={6} size={640} initial={{ x: 120, y: -30 }} className="right-[-12%] top-[-8%]" />
      <AnimatedBlob color="rgba(5,150,105,0.18)" duration={56} delay={12} size={760} initial={{ x: -40, y: 160 }} className="left-[10%] bottom-[-15%]" />
      <AnimatedBlob color="rgba(34,197,94,0.12)" duration={60} delay={18} size={680} initial={{ x: 200, y: 200 }} className="right-[-8%] bottom-[-12%]" />

      {/* Subtle grid + noise overlay for texture without jitter */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\' viewBox=\'0 0 140 140\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.55\'/></svg>')",
        backgroundRepeat: 'repeat',
        imageRendering: 'auto',
      }} />

      {/* Soft vignette to frame content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(0,0,0,0.55))]" />
    </div>
  )
}
