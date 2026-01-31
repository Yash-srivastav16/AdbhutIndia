'use client'

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phone = "918948504111" // put your number
  const message = "Hello, I want to know more about your services."

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 40px rgba(37, 211, 102, 0.6)",
        zIndex: 1000,
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <MessageCircle color="white" size={32} />
    </a>
  )
}
