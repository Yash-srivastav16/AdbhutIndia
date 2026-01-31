'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function SiteLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1600) // You can adjust

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#050505",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* Gold Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "4px solid rgba(212,175,55,0.15)",
              borderTopColor: "#D4AF37",
              marginBottom: 40,
            }}
          />

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1 }}
            style={{
              color: "#D4AF37",
              fontWeight: 900,
              fontSize: 22,
            }}
          >
            A D B H U T
          </motion.div>

          <div style={{ color: "#aaa", fontSize: 12, marginTop: 12 }}>
            Preparing your experience…
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
