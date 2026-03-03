"use client";

export default function CTALayananSection() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">

      {/* Subtle Executive Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-primary))]/20 via-white to-white pointer-events-none" />

      <div className="container-main relative">
        <div className="max-w-xl text-center mx-auto">

          {/* Micro Label */}
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Konsultasi Proyek
          </p>

          {/* Accent Line */}
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6 mx-auto" />

          {/* H2 */}
          <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
            Diskusikan Lingkup Proyek Anda
          </h2>

          {/* Paragraph */}
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-8">
            Kami siap mendampingi Anda dalam merancang, menghitung, dan mengelola proyek dengan pendekatan profesional yang terukur dan dapat dipertanggungjawabkan.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-3 text-[14px] md:text-[15px] font-medium rounded-md bg-[rgb(var(--color-primary))] text-[rgb(var(--color-white))] transition-all duration-300 hover:opacity-90">
            Ajukan Konsultasi
          </button>

        </div>
      </div>
    </section>
  );
}