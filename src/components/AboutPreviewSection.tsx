"use client";

import Link from "next/link";

export default function AboutPreviewSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container-main">

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />

            {/* Headline */}
            <h2 className="text-[22px] md:text-[30px] font-semibold leading-[1.35] mb-6">
              Sinergi Profesionalisme untuk{" "}
              <span className="text-[rgb(var(--color-primary))]">
                Pembangunan Bangsa
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-6">
              PT. Bangun Cipta Solusi didirikan sebagai pusat keunggulan dalam
              jasa konsultasi arsitektur, engineering, dan manajemen konstruksi.
              Kami hadir untuk mewadahi profesionalisme terbaik guna memberikan
              kontribusi nyata dalam akselerasi pembangunan Indonesia.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted mb-8">
              Kekuatan kami terletak pada sinergi antara tenaga ahli muda yang
              penuh idealisme dengan tenaga senior yang matang dalam pengalaman.
              Kolaborasi ini diperkuat melalui jaringan kemitraan strategis
              bersama institusi akademis, memastikan setiap solusi yang kami
              hadirkan berkualitas, terukur, dan bernilai manfaat tinggi.
            </p>

            {/* CTA */}
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[rgb(var(--color-primary))] border-b border-[rgb(var(--color-primary))] pb-1 transition hover:opacity-80"
            >
              Pelajari Lebih Lanjut
              <span className="text-base leading-none">→</span>
            </Link>

          </div>

          {/* RIGHT VISUAL BLOCK (Executive Placeholder) */}
          <div className="relative hidden md:block">

            <div className="relative h-full min-h-[320px] border border-[rgb(var(--color-secondary))] rounded-lg p-8 flex flex-col justify-between bg-[rgb(var(--color-secondary))]/10">

              <div>
                <p className="text-[11px] uppercase tracking-[1.4px] text-[rgb(var(--color-primary))] mb-4">
                  Company Positioning
                </p>

                <p className="text-[16px] leading-[1.6] font-medium">
                  Mengintegrasikan keahlian arsitektur, rekayasa teknik, dan
                  manajemen konstruksi dalam satu ekosistem profesional.
                </p>
              </div>

              {/* Subtle Divider */}
              <div className="w-full h-px bg-[rgb(var(--color-secondary))] my-6" />

              <p className="text-[13px] text-muted leading-[1.7]">
                Pendekatan kami berbasis integritas teknis, inovasi berkelanjutan,
                dan komitmen terhadap kualitas hasil pekerjaan.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}