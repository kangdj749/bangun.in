"use client";

export default function ContactLegalSection() {
  return (
    <section className="py-10 md:py-16 bg-[rgb(var(--color-secondary))]/10">
      <div className="container-main">

        <div className="max-w-xl mb-10">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Legalitas & Perizinan
          </p>
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />
          <h2 className="text-[20px] md:text-[26px] font-semibold leading-[1.35]">
            Legalitas & Perizinan
          </h2>
        </div>

        <div className="space-y-3 text-[14px] md:text-[15px] text-muted leading-[1.75]">
          <p><span className="font-medium text-black">NIB OSS:</span> 1601260070145</p>
          <p><span className="font-medium text-black">SIUJK OSS:</span> 1601260070145</p>
          <p><span className="font-medium text-black">Status Izin:</span> Telah Memenuhi Komitmen / Efektif</p>
          <p><span className="font-medium text-black">Akta Pendirian:</span> No. 70 (08 Januari 2026)</p>
          <p><span className="font-medium text-black">SK Kemenkumham:</span> AHU-0001581.AH.01.01.TAHUN 2026</p>

          <p className="pt-4">
            Perizinan diterbitkan oleh Pemerintah Republik Indonesia melalui sistem OSS dan berlaku secara efektif.
          </p>
        </div>

      </div>
    </section>
  );
}