'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const stats = [
  { value: 500, suffix: '+', label: 'Homes Delivered' },
  { value: 4000, suffix: '+', label: 'Meals Served' },
  { value: 50, suffix: '+', label: 'Brands Managed' },
  { value: 100, suffix: '+', label: 'Toy Designs' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsub = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return unsub
  }, [springValue])

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      style={{
        fontSize: 60,
        fontWeight: 900,
        color: '#D4AF37',
        textShadow: '0 0 40px rgba(212,175,55,0.8)',
        display: 'block',
      }}
    >
      {displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  )
}

export default function StatsCounter() {
  return (
    <section
      style={{
        background: '#050505',
        padding: '60px 24px',
        borderTop: '1px solid rgba(212,175,55,0.2)',
        borderBottom: '1px solid rgba(212,175,55,0.2)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 40,
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 60px rgba(212,175,55,0.5)',
              }}
              style={{
                border: '2px solid rgba(212,175,55,0.7)',
                borderRadius: 16,
                padding: 40,
                background: 'linear-gradient(180deg, #0b0b0b, #050505)',
                textAlign: 'center',
                boxShadow: '0 0 30px rgba(212,175,55,0.15)',
                cursor: 'default',
              }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />

              <motion.div
                initial={{ opacity: 0, letterSpacing: '0.8em' }}
                whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                style={{
                  marginTop: 14,
                  fontSize: 12,
                  color: '#fff',
                  opacity: 0.85,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
