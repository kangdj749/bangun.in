"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  return (
    <section className="relative min-h-[560px] md:min-h-[680px] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="PT Bangun Cipta Solusi - Architecture Engineering Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Deep Primary Overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/70" />

      {/* Cinematic Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/65 via-[rgb(var(--color-dark))]/40 to-[rgb(var(--color-dark))]/85" />

      {/* Soft Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--color-white),0.06),transparent_45%)] pointer-events-none" />

      {/* Bottom Fade Blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[rgb(var(--color-white))]" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl text-[rgb(var(--color-white))]"
        >

          {/* Micro Label */}
          <p className="text-[10.5px] md:text-[11px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-4">
            Engineering Consultant
          </p>

          {/* Accent Line */}
          <div className="w-14 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          {/* Headline */}
          <h1 className="text-[26px] md:text-[38px] font-semibold leading-[1.25] tracking-[0.3px] mb-6">
            Integrated Architecture, Engineering & Construction
            <span className="block text-[rgb(var(--color-primary))] mt-1">
              Management Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[14.5px] md:text-[15.5px] leading-[1.8] text-[rgb(var(--color-white))]/80 mb-10">
            PT. Bangun Cipta Solusi (BANGUN.IN) menghadirkan layanan terintegrasi
            dalam arsitektur, rekayasa teknik, dan manajemen konstruksi untuk
            mendukung pembangunan yang terukur, akuntabel, dan berkelanjutan.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">

            {/* Primary CTA */}
            <button
              className="
                px-7 py-3
                text-[13px]
                font-medium
                rounded-md
                bg-[rgb(var(--color-primary))]
                text-[rgb(var(--color-white))]
                shadow-[0_8px_30px_-8px_rgba(var(--color-primary),0.6)]
                transition-all duration-300
                hover:translate-y-[-2px]
                hover:shadow-[0_12px_40px_-10px_rgba(var(--color-primary),0.7)]
              "
            >
              Konsultasi Sekarang
            </button>

            {/* Secondary CTA */}
            <button
              className="
                px-7 py-3
                text-[13px]
                font-medium
                rounded-md
                border
                border-[rgb(var(--color-white))]/40
                text-[rgb(var(--color-white))]
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-[rgb(var(--color-white))]
                hover:text-[rgb(var(--color-dark))]
              "
            >
              Jelajahi Layanan
            </button>

          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-[18px] h-[28px] border border-[rgb(var(--color-white))]/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-[3px] h-[6px] bg-[rgb(var(--color-white))]/70 rounded-full mt-2"
          />
        </div>
      </motion.div>

    </section>
  );
}