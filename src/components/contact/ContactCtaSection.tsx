"use client";

export default function ContactCtaSection() {
  return (
    <section className="py-10 md:py-20 bg-[rgb(var(--color-primary))] text-white">
      <div className="container-main">

        <div className="max-w-xl">
          <p className="text-[11px] tracking-[1.5px] uppercase font-medium mb-4 opacity-80">
            Kolaborasi Profesional
          </p>

          <div className="w-12 h-[2px] bg-white mb-6" />

          <h2 className="text-[22px] md:text-[30px] font-semibold leading-[1.3] mb-6">
            Mari Wujudkan Proyek Berkualitas Bersama
          </h2>

          <p className="text-[14px] md:text-[15px] leading-[1.75] opacity-90 mb-8">
            Kami percaya bahwa setiap pembangunan yang baik dimulai dari perencanaan yang matang dan kolaborasi yang profesional.
          </p>

          <button className="bg-white text-[rgb(var(--color-primary))] px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
            Hubungi Kami Sekarang
          </button>

        </div>

      </div>
    </section>
  );
}