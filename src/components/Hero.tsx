"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg";

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/20 via-white to-white pointer-events-none" />

      <div className="container-main relative">

        <div className="grid md:grid-cols-[1.05fr_auto_0.95fr] gap-10 md:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* Micro Label */}
            <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
              Konsultan Teknik Independen
            </p>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

            {/* H1 */}
            <h1 className="text-[24px] md:text-[36px] font-semibold leading-[1.28] tracking-[0.2px] mb-6">
              Integrated Architecture, Engineering & Construction
              <span className="block text-[rgb(var(--color-primary))]">
                Management Excellence
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-8">
              BANGUN.IN (PT Bangun Cipta Solusi) adalah perusahaan konsultan teknik independen
              yang menghadirkan solusi terintegrasi dalam arsitektur, rekayasa teknik,
              dan manajemen konstruksi untuk mendukung percepatan pembangunan nasional
              yang berkelanjutan.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2.5 text-[13px] font-medium rounded-md bg-[rgb(var(--color-primary))] text-white transition-all duration-300 hover:opacity-90">
                Konsultasi Sekarang
              </button>

              <button className="px-6 py-2.5 text-[13px] font-medium rounded-md border border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] transition-all duration-300 hover:bg-[rgb(var(--color-primary))] hover:text-white">
                Jelajahi Layanan
              </button>
            </div>
          </div>

          {/* Vertical Executive Divider (Desktop Only) */}
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-[rgb(var(--color-secondary))] to-transparent" />

          {/* RIGHT IMAGE */}
          <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-lg overflow-hidden border border-[rgb(var(--color-secondary))] shadow-sm">

            <Image
              src={cloudinaryImage(heroImage, "banner")}
              alt="PT Bangun Cipta Solusi - Architecture Engineering Construction"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Soft Inner Ring */}
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}