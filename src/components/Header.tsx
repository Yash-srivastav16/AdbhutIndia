'use client'

import { useState, useEffect, CSSProperties } from 'react' // 1. Added CSSProperties import
import Link from 'next/link'

// --- ICONS (Raw SVGs) ---
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
)
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
)

const Instagram = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>)
const Linkedin = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>)
const Whatsapp = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>)

const navLinks = [
  { name: 'Real Estate', href: '#real-estate' },
  { name: 'Food & Catering', href: '#food' },
  { name: 'Advertising', href: '#advertising' },
  { name: 'Soft Toys', href: '#toys' },
  { name: 'Contact', href: '#contact' },
]

// 2. Define a clear type for your styles object
type StylesType = {
  [key: string]: CSSProperties | ((name: string) => CSSProperties)
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3. Apply the type here. Now 'position: fixed' is valid without casting.
  const styles: StylesType = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      padding: isScrolled ? '15px 0' : '25px 0',
      transition: 'all 0.3s ease',
      background: isScrolled 
        ? 'rgba(0, 0, 0, 0.85)' 
        : 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
    },
    // Function returning CSSProperties
    link: (name: string) => ({
      color: hoveredLink === name ? '#D4AF37' : '#e0e0e0',
      textDecoration: 'none',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      transition: 'color 0.2s',
      cursor: 'pointer',
    }),
    desktopSocials: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginLeft: '20px',
      paddingLeft: '20px',
      borderLeft: '1px solid rgba(255,255,255,0.2)',
      color: '#D4AF37',
    },
    button: {
      padding: '10px 24px',
      background: 'transparent',
      border: '1px solid #D4AF37',
      color: '#D4AF37',
      fontSize: '11px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      marginLeft: '10px',
    },
    mobileOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0a0a0a',
      zIndex: 9998,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      opacity: mobileMenuOpen ? 1 : 0,
      pointerEvents: (mobileMenuOpen ? 'all' : 'none'),
      transition: 'opacity 0.3s ease',
    },
    mobileLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '28px',
      fontWeight: '300',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    mobileSocials: {
      display: 'flex',
      gap: '30px',
      marginTop: '40px',
      color: '#D4AF37',
    }
  }

  return (
    <>
      {/* 4. Using TS type casting just for the render to ensure the link function return is valid */}
      <header style={styles.header as CSSProperties}>
        <div style={styles.container as CSSProperties}>
          
          <Link href="/" style={styles.logo as CSSProperties}>
            ADBHUT<span style={{ color: '#D4AF37' }}>INDIA</span>
          </Link>

          {/* DESKTOP NAV SECTION */}
          <div className="desktop-only" style={styles.nav as CSSProperties}>
            
            {/* Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // Function call handles the return type
                style={(styles.link as (name: string) => CSSProperties)(link.name)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </Link>
            ))}

            <div style={styles.desktopSocials as CSSProperties}>
              <div style={{ cursor: 'pointer' }} title="WhatsApp"><Whatsapp size={18} /></div>
              <div style={{ cursor: 'pointer' }} title="Instagram"><Instagram size={18} /></div>
              <div style={{ cursor: 'pointer' }} title="LinkedIn"><Linkedin size={18} /></div>
            </div>

            <button style={styles.button as CSSProperties}>Get In Touch</button>
          </div>

          {/* MOBILE TOGGLE */}
          <div 
            className="mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ cursor: 'pointer', zIndex: 10000 }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>

        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div style={styles.mobileOverlay as CSSProperties}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            style={styles.mobileLink as CSSProperties}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <div style={styles.mobileSocials as CSSProperties}>
          <div style={{ cursor: 'pointer' }}><Whatsapp size={28} /></div>
          <div style={{ cursor: 'pointer' }}><Instagram size={28} /></div>
          <div style={{ cursor: 'pointer' }}><Linkedin size={28} /></div>
        </div>
      </div>

      <style jsx>{`
        .desktop-only { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
        body { margin: 0; padding: 0; }
      `}</style>
    </>
  )
}