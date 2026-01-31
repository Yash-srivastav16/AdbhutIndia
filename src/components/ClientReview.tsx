'use client'

import { motion } from "framer-motion"
import { Star, User } from "lucide-react"

const reviews = [
  {
    name: "Amit Verma",
    role: "Real Estate Investor",
    review:
      "Adbhut Group delivered exceptional quality and transparency. Their real estate team helped me secure the perfect commercial property.",
  },
  {
    name: "Neha Sharma",
    role: "Corporate Client",
    review:
      "From catering to advertising, everything was handled professionally. Truly a one-stop solution for growing businesses.",
  },
  {
    name: "Rahul Singh",
    role: "Retail Brand Owner",
    review:
      "Their advertising and branding support boosted our visibility across the city. Outstanding service and results.",
  },
]

export default function ClientReviews() {
  return (
    <section
      style={{
        background: "#050505",
        padding: "120px 24px",
        borderTop: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <div
            style={{
              color: "#D4AF37",
              letterSpacing: "0.4em",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Client Feedback
          </div>
          <h2
            style={{
              color: "white",
              fontSize: 48,
              fontWeight: 800,
              marginTop: 16,
            }}
          >
            What Our <span style={{ color: "#D4AF37" }}>Clients Say</span>
          </h2>
        </motion.div>

        {/* Reviews */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
          }}
        >
          {reviews.map((r, index) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(212,175,55,0.5)",
              }}
              style={{
                background: "linear-gradient(180deg, #0b0b0b, #050505)",
                border: "1px solid rgba(212,175,55,0.5)",
                borderRadius: 20,
                padding: 40,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} color="#D4AF37" fill="#D4AF37" />
                ))}
              </div>

              {/* Review */}
              <p
                style={{
                  color: "#ccc",
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 30,
                  flexGrow: 1,
                }}
              >
                “{r.review}”
              </p>

              {/* Client */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#D4AF37",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                  }}
                >
                  <User size={22} />
                </div>

                <div>
                  <div
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: 15,
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      color: "#D4AF37",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {r.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
