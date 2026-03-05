"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  return (
    <section className="relative min-h-[520px] md:min-h-[640px] flex items-center overflow-hidden bg-[rgb(var(--color-bg))]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(heroImage, "banner")}
          alt="Architecture Engineering Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Base Dark Overlay */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/75" />

      {/* Soft Brand Gradient (subtle, not cinematic heavy) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/50 via-[rgb(var(--color-dark))]/40 to-[rgb(var(--color-dark))]/85" />

      {/* Bottom fade to section background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg text-[rgb(var(--color-white))]"
        >

          {/* Micro Label */}
          <p className="text-[9px] md:text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-white))]/65 mb-3">
            Engineering Consultant
          </p>

          {/* Accent Line */}
          <div className="w-10 h-[1px] bg-[rgb(var(--color-primary))] mb-5" />

          {/* Headline */}
          <h1 className="text-[22px] md:text-[34px] font-semibold leading-[1.28] tracking-[0.2px] mb-5">
            Integrated Architecture,
            <span className="block">
              Engineering & Construction
            </span>
            <span className="block text-[rgb(var(--color-primary))] mt-1">
              Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[13px] md:text-[14px] leading-[1.7] text-[rgb(var(--color-white))]/75 mb-8">
            Konsultan teknik independen yang menghadirkan solusi terintegrasi 
            untuk perencanaan dan manajemen konstruksi di seluruh Indonesia.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">

            {/* Primary */}
            <button
              className="
                px-6 py-2.5
                text-[12px]
                font-medium
                rounded-[var(--radius-sm)]
                bg-[rgb(var(--color-primary))]
                text-[rgb(var(--color-white))]
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_10px_30px_-10px_rgba(var(--color-primary),0.65)]
              "
            >
              Konsultasi Sekarang
            </button>

            {/* Secondary */}
            <button
              className="
                px-6 py-2.5
                text-[12px]
                font-medium
                rounded-[var(--radius-sm)]
                border
                border-[rgb(var(--color-white))]/30
                text-[rgb(var(--color-white))]
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-[rgb(var(--color-white))]
                hover:text-[rgb(var(--color-dark))]
              "
            >
              Lihat Portofolio
            </button>

          </div>

        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
      >
        <div className="w-[16px] h-[26px] border border-[rgb(var(--color-white))]/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-[2px] h-[5px] bg-[rgb(var(--color-white))]/60 rounded-full mt-2"
          />
        </div>
      </motion.div>

    </section>
  );
}