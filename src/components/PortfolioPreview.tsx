"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function PortfolioPreview() {
  const projects = [
    {
      category: "Arsitektur",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
      height: "h-[280px] md:h-[340px]",
    },
    {
      category: "Rekayasa Struktur",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
      height: "h-[360px] md:h-[460px]",
    },
    {
      category: "Penataan Kawasan",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
      height: "h-[240px] md:h-[300px]",
    },
    {
      category: "MEP Engineering",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
      height: "h-[320px] md:h-[400px]",
    },
    {
      category: "Topografi & Survey",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
      height: "h-[260px] md:h-[320px]",
    },
    {
      category: "Infrastruktur",
      image:
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
      height: "h-[380px] md:h-[480px]",
    },
  ];

  return (
    <section className="relative py-10 md:py-20 bg-[rgb(var(--color-surface))]">

      <div className="container-main">

        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-lg">
          <p className="text-[10px] tracking-[2.5px] uppercase font-medium text-[rgb(var(--color-primary))]/70 mb-4">
            Portofolio
          </p>

          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.3] tracking-[0.2px] text-[rgb(var(--color-dark))]">
            Proyek & Lingkup Pengalaman
          </h2>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-7 [column-fill:_balance]">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative mb-7 break-inside-avoid overflow-hidden rounded-xl group ${project.height}`}
            >
              {/* Image */}
              <Image
                src={cloudinaryImage(project.image, "card")}
                alt={project.category}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="
                  object-cover
                  transition-all
                  duration-1000
                  grayscale
                  group-hover:grayscale-0
                  group-hover:scale-105
                "
              />

              {/* Base Dark Overlay */}
              <div className="absolute inset-0 bg-[rgb(var(--color-dark))]/50 group-hover:bg-[rgb(var(--color-dark))]/65 transition-all duration-700" />

              {/* Maroon Depth Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-primary))]/85 via-[rgb(var(--color-primary))]/35 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-700" />

              {/* Subtle Inner Shadow */}
              <div className="absolute inset-0 shadow-[inset_0_-80px_120px_rgba(0,0,0,0.4)] pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6 md:p-7">

                <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-700">

                  <div className="inline-block px-3 py-[4px] rounded-full backdrop-blur-md bg-[rgb(var(--color-white))]/10 border border-[rgb(var(--color-white))]/20 mb-3">
                    <p className="text-[9px] tracking-[2px] uppercase font-medium text-[rgb(var(--color-white))]/80">
                      Project
                    </p>
                  </div>

                  <h3 className="text-[14px] md:text-[15px] font-semibold tracking-[0.4px] text-[rgb(var(--color-white))]">
                    {project.category}
                  </h3>

                  <div className="mt-3 w-7 h-[2px] bg-[rgb(var(--color-white))]/70 group-hover:w-12 transition-all duration-700" />

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <Link
            href="/portofolio"
            className="
              inline-block
              text-[11.5px]
              font-medium
              tracking-[1.6px]
              uppercase
              text-[rgb(var(--color-primary))]
              border-b
              border-[rgb(var(--color-primary))]/40
              pb-1
              transition-all
              duration-300
              hover:border-[rgb(var(--color-primary))]
              hover:tracking-[2px]
            "
          >
            Lihat Seluruh Proyek
          </Link>
        </div>

      </div>
    </section>
  );
}