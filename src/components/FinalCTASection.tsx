"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function ClosingCTA() {
  const backgroundImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  return (
    <section className="relative py-10 md:py-22 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={cloudinaryImage(backgroundImage, "banner")}
          alt="Professional Engineering Consultation"
          fill
          sizes="100vw"
          className="object-cover scale-105 blur-[2px]"
        />
      </div>

      {/* Deep Dark Base */}
      <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/75" />

      {/* Maroon Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/80 via-[rgb(var(--color-primary))]/55 to-[rgb(var(--color-dark))]/90" />

      {/* Soft Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-white),0.06),transparent_50%)] pointer-events-none" />

      <div className="container-main relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >

          {/* Micro Label */}
          <p className="text-[10px] tracking-[2.5px] uppercase font-medium text-[rgb(var(--color-white))]/70 mb-5">
            Konsultasi Profesional
          </p>

          {/* Accent Line */}
          <div className="w-12 h-[2px] bg-[rgb(var(--color-white))]/60 mb-6" />

          {/* Headline */}
          <h2 className="text-[22px] md:text-[28px] font-semibold leading-[1.35] tracking-[0.2px] text-[rgb(var(--color-white))] mb-6">
            Bangun Proyek Anda Bersama Mitra Profesional
          </h2>

          {/* Paragraph */}
          <p className="text-[13px] md:text-[14px] leading-[1.75] text-[rgb(var(--color-white))]/80 mb-10">
            Kami menghadirkan pendekatan terintegrasi dalam arsitektur,
            rekayasa teknik, dan manajemen konstruksi untuk memastikan
            setiap proyek berjalan presisi, efisien, dan sesuai regulasi.
          </p>

          {/* CTA Button */}
          <button
            className="
              px-10 py-4
              text-[12.5px]
              font-medium
              tracking-[1.2px]
              uppercase
              rounded-md
              bg-[rgb(var(--color-white))]
              text-[rgb(var(--color-dark))]
              shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)]
              transition-all duration-400
              hover:translate-y-[-3px]
              hover:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.6)]
            "
          >
            Ajukan Konsultasi
          </button>

        </motion.div>
      </div>

    </section>
  );
}