'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    id: 1,
    title: 'Real Estate Ventures',
    subtitle: 'Premium Spaces in Lucknow',
    image: '/images/hero/real-estate.jpg',
  },
  {
    id: 2,
    title: 'Adbhut IRCTC Food',
    subtitle: 'Hygienic Meals Delivered to Your Seat',
    image: '/images/hero/food-delivery.jpg',
  },
  {
    id: 3,
    title: 'Strategic Advertising',
    subtitle: 'Creative Marketing Solutions in Lucknow',
    image: '/images/hero/advertisement.jpg',
  },
  {
    id: 4,
    title: 'Adbhut Soft Toys',
    subtitle: 'Cuddles & Joy for Everyone',
    image: '/images/hero/soft-toys.jpg',
  },
]

export default function HeroSlider() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true, 
        }}
        loop={true}
        allowTouchMove={false}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-black">
            
            {/* LAYER 1: IMAGE BACKGROUND */}
            <div className="absolute inset-0 z-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                quality={90}
                className="object-cover opacity-50" // Darker image to make white text pop
                sizes="100vw"
                  style={{
    objectFit: "cover",
    filter: "brightness(0.9) contrast(1.1)",
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3))",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3))",
    backdropFilter: "blur(10px)",
  }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
              
            </div>

            {/* LAYER 2: TEXT CONTENT */}
            <div className="relative z-10 w-full h-full grid place-items-center pointer-events-none">
              <div className="w-full max-w-6xl px-4 text-center pointer-events-auto">
                
                <div className="hero-content flex flex-col items-center gap-6">
                  
                  {/* 1. HIGH-CONTRAST BADGE */}
                  <div className="inline-block px-5 py-1.5 bg-[#D4AF37] rounded-sm shadow-[0_0_15px_rgba(212,175,85,0.4)]">
                    <span className="text-black text-[10px] md:text-xs font-extrabold tracking-[0.3em] uppercase">
                      Adbhut India
                    </span>
                  </div>

                  {/* 2. MAGAZINE STYLE TITLE */}
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-[0.9] drop-shadow-2xl uppercase">
                    {/* Split title for styling if needed, currently sticking to pure impact */}
                    {slide.title}
                  </h1>

                  {/* 3. ELEGANT SUBTITLE */}
                  <p className="text-lg md:text-2xl text-gray-300 font-light tracking-[0.15em] uppercase mt-2">
                    {slide.subtitle}
                  </p>

                  {/* 4. GOLD ANCHOR LINE (Replaces Button) */}
                  <div className="w-24 h-1 bg-[#D4AF37] mt-6 rounded-full opacity-80" />

                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        body, html { margin: 0; padding: 0; overflow-x: hidden; }

        /* Slower, Cinematic Text Entrance */
        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
          img {
  filter: saturate(0.9) hue-rotate(-10deg);
}


        .swiper-slide-active .hero-content {
          opacity: 1;
          transform: translateY(0);
        }

        /* Minimalist Dots */
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          width: 40px; /* Long dash for active state */
          border-radius: 4px;
        }
        .swiper-pagination {
          bottom: 50px !important;
        }
      `}</style>
    </section>
  )
}