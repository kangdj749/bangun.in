"use client";

export default function FinalCTASection() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">

      {/* Subtle Bottom Gradient (lebih elegan) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-primary))]/20 via-white to-white pointer-events-none" />

      <div className="container-main relative text-center">

        {/* Accent */}
        <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mx-auto mb-6" />

        {/* Headline */}
        <h2 className="text-[20px] md:text-[28px] font-semibold leading-[1.4] mb-5 max-w-2xl mx-auto">
          Mari Wujudkan Proyek Anda Bersama
          <span className="block text-[rgb(var(--color-primary))]">
            Mitra Profesional
          </span>
        </h2>

        {/* Narasi */}
        <p className="text-[14px] md:text-[15px] leading-[1.8] text-muted max-w-xl mx-auto mb-8">
          Kami siap mendukung proyek Anda melalui pendekatan teknis yang
          terukur, integritas profesional, dan komitmen terhadap kualitas.
        </p>

        {/* CTA */}
        <button
          className="
            px-6 py-2.5
            text-[13px] font-medium
            rounded-md
            bg-[rgb(var(--color-primary))]
            text-white
            transition-all duration-300 ease-out
            hover:-translate-y-[2px]
            hover:shadow-md
          "
        >
          Ajukan Konsultasi
        </button>

      </div>
    </section>
  );
}