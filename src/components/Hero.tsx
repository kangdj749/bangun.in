"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  return (
    <section className="relative min-h-[540px] md:min-h-[660px] flex items-center overflow-hidden">

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

      {/* Deep Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Maroon Cinematic Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/60 via-black/40 to-black/80" />

      {/* Light Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />

      {/* Bottom Fade (blend to next section) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-[rgb(var(--color-white))]"
        >

          {/* Micro Label */}
          <p className="text-[10px] md:text-[11px] tracking-[1.8px] uppercase font-medium text-white/75 mb-4">
            Konsultan Teknik Independen
          </p>

          {/* Accent Line */}
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          {/* Headline */}
          <h1 className="text-[24px] md:text-[36px] font-semibold leading-[1.28] tracking-[0.2px] mb-6">
            Integrated Architecture, Engineering & Construction
            <span className="block text-[rgb(var(--color-primary))]">
              Management Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-white/85 mb-8">
            PT. Bangun Cipta Solusi (BANGUN.IN) menghadirkan layanan terintegrasi
            dalam arsitektur, rekayasa teknik, dan manajemen konstruksi untuk
            mendukung pembangunan yang terukur, akuntabel, dan berkelanjutan.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2.5 text-[13px] font-medium rounded-md bg-[rgb(var(--color-primary))] text-white transition-all duration-300 hover:opacity-90">
              Konsultasi Sekarang
            </button>

            <button className="px-6 py-2.5 text-[13px] font-medium rounded-md border border-white/40 text-white transition-all duration-300 hover:bg-white hover:text-black">
              Jelajahi Layanan
            </button>
          </div>

        </motion.div>

       

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-[18px] h-[28px] border border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-[3px] h-[6px] bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>

    </section>
  );
}