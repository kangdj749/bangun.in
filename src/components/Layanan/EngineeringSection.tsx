"use client";

import Image from "next/image";
import { cloudinaryImage } from "@/lib/cloudinaryImage";

export default function EngineeringSection() {
  const engineeringServices = [
    {
      name: "Pondasi & Struktur",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
      ],
    },
    {
      name: "Water Engineering & Drainase Kawasan",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
      ],
    },
    {
      name: "Rekayasa Transportasi & Infrastruktur",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
      ],
    },
    {
      name: "Mekanikal & Elektrikal (MEP)",
      images: [
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
        "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772352740/SECTION-BEASISWA-LANDSCAPE_uk71mp.png",
      ],
    },
  ];

  return (
    <section id="rekayasa" className="relative py-10 md:py-20 bg-gray-50">
      <div className="container-main">

        {/* Headline */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-3">
            Bidang Layanan
          </p>
          <div className="w-16 h-[3px] bg-[rgb(var(--color-primary))] mb-6 mx-auto rounded" />
          <h2 className="text-[28px] md:text-[36px] font-semibold leading-[1.3] tracking-[0.2px]">
            Solusi Teknik Komprehensif
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.75] text-muted mt-4">
            Rekayasa teknik merupakan pilar utama dalam memastikan keamanan, efisiensi, dan keberlanjutan proyek. BANGUN.IN memberikan solusi teknik adaptif, presisi, dan terukur.
          </p>
        </div>

        {/* Engineering Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {engineeringServices.map((service, idx) => (
            <div key={idx} className="group">
              {/* Service Title */}
              <h3 className="text-[rgb(var(--color-primary))] font-semibold text-lg mb-4">{service.name}</h3>

              {/* Carousel */}
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
                {service.images.map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[320px] h-[200px] md:w-[400px] md:h-[240px] relative rounded-lg overflow-hidden shadow-lg snap-center hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={cloudinaryImage(img, "banner")}
                      alt={`${service.name} contoh desain ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}