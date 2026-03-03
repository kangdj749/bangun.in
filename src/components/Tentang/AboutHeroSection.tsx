"use client";

export default function AboutHeroSection() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">

      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/15 via-white to-white pointer-events-none" />

      <div className="container-main relative">

        <div className="max-w-xl">

          {/* Micro Label */}
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Tentang Perusahaan
          </p>

          {/* Accent Line */}
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          {/* H1 */}
          <h1 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
            Membangun Fondasi
            <span className="block text-[rgb(var(--color-primary))]">
              Keunggulan Profesional
            </span>
          </h1>

          {/* Paragraph 1 */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4">
            PT. Bangun Cipta Solusi (BANGUN.IN) adalah perusahaan konsultan teknik independen yang mengintegrasikan arsitektur, rekayasa teknik, dan manajemen konstruksi dalam satu sistem kerja yang terstruktur, akuntabel, dan berorientasi pada kualitas hasil.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
            Kami hadir sebagai mitra strategis bagi pemerintah, institusi, dan sektor swasta dalam merancang solusi pembangunan yang tidak hanya tepat secara teknis, tetapi juga selaras dengan kebutuhan jangka panjang dan prinsip keberlanjutan.
          </p>

        </div>

      </div>
    </section>
  );
}