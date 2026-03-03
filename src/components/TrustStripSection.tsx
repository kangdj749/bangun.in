"use client";

export default function TrustStrip() {
  const items = [
    "Multidisiplin Engineering Team",
    "Legalitas Lengkap & Aktif",
    "Siap Proyek Seluruh Indonesia",
    "Berbasis Akademik & Praktik Lapangan",
  ];

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-r from [rgb(var(--color-secondary))]/15 via-white to-white">
      <div className="container-main">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">

          {items.map((item, index) => (
            <div
              key={index}
              className="group relative px-4 md:px-6 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:opacity-90"
            >
              {/* Vertical Divider Desktop */}
              {index !== items.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-[rgb(var(--color-secondary))]/60" />
              )}

              {/* Accent Line */}
              <div className="mx-auto w-8 h-[2px] bg-[rgb(var(--color-primary))] mb-4 transition-all duration-300 group-hover:w-10" />

              <p className="text-[13px] md:text-[14px] font-medium leading-[1.6]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11.5px] md:text-[12px] text-muted mt-8 max-w-3xl mx-auto leading-[1.7]">
          Didukung tenaga ahli dari Institut Teknologi Bandung, Universitas
          Padjadjaran, Universitas Gadjah Mada, dan institusi lainnya.
        </p>

      </div>
    </section>
  );
}