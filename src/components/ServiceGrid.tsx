'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, UtensilsCrossed, Megaphone, Heart, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Real Estate Ventures",
    description:
      "Exclusive commercial plots and luxury residential spaces in Lucknow’s prime locations.",
    image: "/images/services/real-estate.png",
    icon: Home,
    link: "#real-estate",
    cta: "View Properties",
  },
  {
    id: 2,
    title: "Adbhut Catering",
    description:
      "Authorized IRCTC partner delivering hygienic, gourmet meals directly to your train seat.",
    image: "/images/services/food-service.png",
    icon: UtensilsCrossed,
    link: "#food",
    cta: "Order Meal",
  },
  {
    id: 3,
    title: "Strategic Advertising",
    description:
      "360° marketing solutions, hoardings, and digital campaigns to amplify your brand presence.",
    image: "/images/services/advertising.png",
    icon: Megaphone,
    link: "#advertising",
    cta: "Grow Your Brand",
  },
  {
    id: 4,
    title: "Soft Toys Manufacturing",
    description:
      "Handcrafted, premium plush toys designed for safety, comfort, and endless joy.",
    image: "/images/services/soft-toys.png",
    icon: Heart,
    link: "#toys",
    cta: "Browse Collection",
  },
]

// 🎯 Motion Variants (THIS makes everything work)
import type { Variants } from "framer-motion"

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.06,
    boxShadow: "0 0 60px rgba(212,175,55,0.6)",
  },
}


export default function ServiceGrid() {
  return (
    <section style={{ background: "#050505", padding: "80px 24px" }}>
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
            Our Expertise
          </div>
          <h2
            style={{
              color: "white",
              fontSize: 48,
              fontWeight: 800,
              marginTop: 16,
            }}
          >
            Diversified <span style={{ color: "#D4AF37" }}>Excellence</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: 40,
          }}
        >
          {services.map((s, index) => {
            const Icon = s.icon

            return (
              <motion.div
                key={s.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                style={{
                  position: "relative",
                  height: 480,
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "#000",
                  border: "1px solid rgba(212,175,55,0.4)",
                }}
              >
                {/* Image */}
                <div style={{ position: "absolute", inset: 0 }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: 40,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "#D4AF37",
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    style={{
                      color: "white",
                      fontSize: 28,
                      fontWeight: 700,
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      color: "#ccc",
                      fontSize: 14,
                      lineHeight: 1.6,
                      maxWidth: 420,
                      marginBottom: 24,
                    }}
                  >
                    {s.description}
                  </p>

                  <Link
                    href={s.link}
                    style={{
                      color: "#D4AF37",
                      textTransform: "uppercase",
                      letterSpacing: "0.3em",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      textDecoration: "none",
                    }}
                  >
                    {s.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
