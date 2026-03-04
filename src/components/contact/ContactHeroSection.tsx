"use client";

export default function ContactHeroSection() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/15 via-white to-white pointer-events-none" />

      <div className="container-main relative">
        <div className="max-w-xl">

          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            PT. Bangun Cipta Solusi (BANGUN.IN)
          </p>

          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

          <h1 className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[0.2px] mb-6">
            Hubungi Kami untuk
            <span className="block text-[rgb(var(--color-primary))]">
              Kolaborasi Profesional
            </span>
          </h1>

          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-4">
            PT. Bangun Cipta Solusi membuka ruang kolaborasi bagi instansi pemerintah, lembaga pendidikan, institusi swasta, maupun mitra strategis lainnya.
          </p>

          <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
            Kami siap mendampingi kebutuhan perencanaan, rekayasa, dan manajemen konstruksi dengan pendekatan teknis yang terukur dan akuntabel.
          </p>

        </div>
      </div>
    </section>
  );
}