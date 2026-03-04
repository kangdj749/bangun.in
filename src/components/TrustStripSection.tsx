"use client";

import {
  FiUsers,
  FiShield,
  FiMapPin,
  FiBookOpen,
} from "react-icons/fi";

export default function TrustStrip() {
  const items = [
    {
      label: "Multidisiplin Engineering Team",
      icon: FiUsers,
    },
    {
      label: "Legalitas Lengkap & Aktif",
      icon: FiShield,
    },
    {
      label: "Siap Proyek Seluruh Indonesia",
      icon: FiMapPin,
    },
    {
      label: "Berbasis Akademik & Praktik Lapangan",
      icon: FiBookOpen,
    },
  ];

  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-r from-[rgb(var(--color-secondary))]/15 via-white to-white">

      <div className="container-main">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative px-4 md:px-6 transition-all duration-300 ease-out hover:-translate-y-[2px]"
              >

                {/* Vertical Divider Desktop */}
                {index !== items.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[rgb(var(--color-secondary))]/60" />
                )}

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md border border-[rgb(var(--color-secondary))]/40 bg-white shadow-sm transition-all duration-300 group-hover:border-[rgb(var(--color-primary))]/60">
                    <Icon
                      size={18}
                      className="text-[rgb(var(--color-primary))]"
                    />
                  </div>
                </div>

                {/* Accent Line */}
                <div className="mx-auto w-8 h-[2px] bg-[rgb(var(--color-primary))] mb-4 transition-all duration-300 group-hover:w-10" />

                {/* Text */}
                <p className="text-[13px] md:text-[14px] font-medium leading-[1.6] text-foreground">
                  {item.label}
                </p>

              </div>
            );
          })}
        </div>

        {/* Bottom Support Text */}
        <p className="text-center text-[11.5px] md:text-[12px] text-muted mt-10 max-w-3xl mx-auto leading-[1.7]">
          Didukung tenaga ahli dari Institut Teknologi Bandung, Universitas
          Padjadjaran, Universitas Gadjah Mada, dan institusi lainnya.
        </p>

      </div>

    </section>
  );
}