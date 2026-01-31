'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #050505, #000)",
        borderTop: "2px solid #D4AF37",
        padding: "100px 24px 40px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 60,
            marginBottom: 80,
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: "#D4AF37",
                letterSpacing: "0.2em",
              }}
            >
              ADBHUT
            </h3>
            <p
              style={{
                color: "#ccc",
                fontSize: 14,
                marginTop: 20,
                lineHeight: 1.8,
                maxWidth: 320,
              }}
            >
              A diversified enterprise delivering excellence across real estate,
              catering, advertising, and manufacturing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                color: "#D4AF37",
                marginBottom: 20,
                fontWeight: 700,
                letterSpacing: "0.25em",
                fontSize: 12,
                textTransform: "uppercase",
              }}
            >
              Services
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="#real-estate" style={{ color: "#fff", textDecoration: "none" }}>Real Estate</Link>
              <Link href="#food" style={{ color: "#fff", textDecoration: "none" }}>Catering</Link>
              <Link href="#advertising" style={{ color: "#fff", textDecoration: "none" }}>Advertising</Link>
              <Link href="#toys" style={{ color: "#fff", textDecoration: "none" }}>Manufacturing</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "#D4AF37",
                marginBottom: 20,
                fontWeight: 700,
                letterSpacing: "0.25em",
                fontSize: 12,
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            <p style={{ color: "#ccc", fontSize: 14, lineHeight: 2 }}>
              Lucknow, Uttar Pradesh <br />
              +91 9XXXXXXXXX <br />
              contact@adbhutgroup.com
            </p>
          </div>
        </div>

        {/* Gold Divider */}
        <div
          style={{
            height: 2,
            background:
              "linear-gradient(to right, transparent, #D4AF37, transparent)",
            marginBottom: 40,
          }}
        />

        {/* Bottom */}
        <div
          style={{
            textAlign: "center",
            color: "#aaa",
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          © {new Date().getFullYear()} Adbhut Group — All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
