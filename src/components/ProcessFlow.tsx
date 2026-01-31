'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Connect',
    description: 'Reach out via WhatsApp or our website',
    icon: MessageCircle,
  },
  {
    number: 2,
    title: 'Consult',
    description: 'Get tailored solutions for your needs',
    icon: Users,
  },
  {
    number: 3,
    title: 'Deliver',
    description: 'Experience quality and excellence',
    icon: CheckCircle,
  },
]

export default function ProcessFlow() {
  return (
    <section
      style={{
        background: '#050505',
        padding: '120px 24px',
        borderTop: '1px solid rgba(212,175,55,0.2)',
        borderBottom: '1px solid rgba(212,175,55,0.2)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: 48,
            fontWeight: 800,
            color: 'white',
            marginBottom: 80,
          }}
        >
          How We <span style={{ color: '#D4AF37' }}>Work</span>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 40,
            position: 'relative',
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(212,175,55,0.5)',
                }}
                style={{
                  position: 'relative',
                  padding: '50px 40px',
                  borderRadius: 20,
                  background: 'linear-gradient(180deg, #0b0b0b, #050505)',
                  border: '2px solid rgba(212,175,55,0.6)',
                  textAlign: 'center',
                }}
              >
                {/* Step Circle */}
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
                    margin: '0 auto 30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    fontWeight: 800,
                    fontSize: 28,
                    boxShadow: '0 0 40px rgba(212,175,55,0.6)',
                  }}
                >
                  <Icon size={36} />
                </div>

                {/* Number */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    border: '2px solid #D4AF37',
                    color: '#D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    background: '#050505',
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    color: 'white',
                    fontSize: 26,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: '#ccc',
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
