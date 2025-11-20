const faqs = [
  {
    q: 'What qualifies as an appointment?',
    a: 'A booked call with a decision maker that matches your ICP and shows buying intent. We score and verify every booking.'
  },
  {
    q: 'How can you guarantee results?',
    a: 'Our system is battle-tested across dozens of dev agencies. If we’re not confident we can hit 30-in-90, we won’t take you on. If we do and miss, you don’t pay.'
  },
  {
    q: 'Will this work if we’ve tried ads before?',
    a: 'Yes — our advantage is the positioning, creative engine, and attribution architecture. Most prior attempts fail on these three.'
  },
  {
    q: 'What do we need to provide?',
    a: 'Access to Meta, your past creative, and fast feedback loops. We handle strategy, creative, tracking, and scaling.'
  },
  {
    q: 'How soon can we start?',
    a: 'Typically within 7-10 days after alignment. First bookings usually land within week two.'
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. We keep you with results, not lock-ins.'
  }
]

export default function FAQ() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQ</h2>
          <p className="mt-3 text-emerald-100/80">Clarity first. If anything remains unclear, ask us on the call.</p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-emerald-300/10">
          {faqs.map((f, i) => (
            <details key={i} className="group py-4">
              <summary className="cursor-pointer list-none text-white font-medium flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-6 text-emerald-300/70 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-emerald-100/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
