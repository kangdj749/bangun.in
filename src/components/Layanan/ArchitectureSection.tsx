"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArchitectureSection() {
  const architectureServices = [
    {
      name: "Bangunan Pendidikan",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
      ],
    },
    {
      name: "Bangunan Perkantoran",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
      ],
    },
    // ... layanan lainnya
  ];

  return (
    <section id="arsitektur" className="relative py-10 md:py-20 bg-white">
      <div className="container-main">

        {/* Headline */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-3">
            Bidang Layanan
          </p>
          <div className="w-16 h-[3px] bg-[rgb(var(--color-primary))] mb-6 mx-auto rounded" />
          <h2 className="text-[28px] md:text-[36px] font-semibold leading-[1.3] tracking-[0.2px]">
            Perencanaan & Desain Arsitektur
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.75] text-muted mt-4">
            BANGUN.IN menghadirkan desain fungsional, kontekstual, dan estetis. Arsitektur bukan sekadar visual, tapi solusi ruang efektif & berkelanjutan.
          </p>
        </div>

        {/* Architecture Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {architectureServices.map((service, idx) => (
            <ServiceCarousel key={idx} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCarousel({ service }: { service: { name: string; images: string[] } }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const children = Array.from(carouselRef.current.children) as HTMLElement[];
    const scrollLeft = carouselRef.current.scrollLeft;

    const index = children.findIndex(
      (child) => child.offsetLeft >= scrollLeft - 10
    );

    if (index >= 0) setActiveIndex(index);
  };

  return (
    <div className="relative group">
      <h3 className="text-[rgb(var(--color-primary))] font-semibold text-lg mb-4">{service.name}</h3>

      <div className="relative">

        {/* Desktop Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white/90 text-[rgb(var(--color-primary))] p-2 rounded-full shadow-md z-20 hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white/90 text-[rgb(var(--color-primary))] p-2 rounded-full shadow-md z-20 hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Draggable Carousel */}
        <motion.div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-2 md:px-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
        >
          {service.images.map((img, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[260px] md:w-[400px] h-[180px] md:h-[240px] relative rounded-xl overflow-hidden shadow-lg snap-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={cloudinaryImage(img, "banner")}
                alt={`${service.name} contoh desain ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/10 rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-3 gap-2">
          {service.images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === i
                  ? "bg-[rgb(var(--color-primary))] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}