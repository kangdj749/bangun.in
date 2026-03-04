"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function VisualServicesPreview() {
  const services = [
    {
      title: "Penataan Ruang",
      description: "Urban planning visioner berbasis regulasi & data.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
    },
    {
      title: "Arsitektur",
      description: "Desain fungsional, kontekstual, dan berkelanjutan.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
    },
    {
      title: "Rekayasa Teknik",
      description: "Solusi struktur, infrastruktur, dan MEP komprehensif.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
    },
    {
      title: "Topografi & Geoteknik",
      description: "Data lapangan presisi sebagai fondasi pembangunan.",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-250-ANAK-YATIM-LANDSCAPE_tocttp.png",
    },
  ];

  return (
    <section className="relative section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-md">
          <p className="text-[10px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-3">
            Layanan Profesional
          </p>

          <div className="w-10 h-[1px] bg-[rgb(var(--color-primary))] mb-5" />

          <h2 className="text-[18px] md:text-[22px] font-semibold leading-[1.35] tracking-[0.2px] text-[rgb(var(--color-text))]">
            Solusi Terintegrasi untuk Setiap Tahapan Proyek
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                relative 
                group 
                h-[230px] md:h-[260px]
                overflow-hidden 
                rounded-[var(--radius-lg)]
                border 
                border-[rgb(var(--color-secondary))]/20
              "
            >
              {/* Image */}
              <Image
                src={cloudinaryImage(service.image, "card")}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Dark overlay base */}
              <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/65" />

              {/* Subtle primary gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-primary))]/70 via-[rgb(var(--color-primary))]/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 md:p-6 text-[rgb(var(--color-white))]">
                <h3 className="text-[13.5px] md:text-[15px] font-semibold tracking-[0.3px] mb-1.5">
                  {service.title}
                </h3>

                <p className="text-[11.5px] md:text-[12.5px] leading-[1.6] text-[rgb(var(--color-white))]/85">
                  {service.description}
                </p>
              </div>

              {/* Subtle hover depth */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[rgb(var(--color-primary))]/40 transition-all duration-500 rounded-[var(--radius-lg)]" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-14 text-center">
          <Link
            href="/layanan"
            className="
              inline-block
              text-[11.5px]
              font-medium
              tracking-[1.4px]
              uppercase
              text-[rgb(var(--color-primary))]
              border-b
              border-[rgb(var(--color-primary))]/40
              pb-1
              transition-all duration-300
              hover:border-[rgb(var(--color-primary))]
              hover:tracking-[1.8px]
            "
          >
            Jelajahi Seluruh Layanan
          </Link>
        </div>

      </div>
    </section>
  );
}