"use client";

export default function ContactFormSection() {
  return (
    <section className="py-10 md:py-20">
      <div className="container-main">

        <div className="max-w-xl mb-10">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Ajukan Permohonan Konsultasi
          </p>
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />
          <h2 className="text-[20px] md:text-[26px] font-semibold leading-[1.35]">
            Ajukan Permohonan Konsultasi
          </h2>
          <p className="text-[14px] md:text-[15px] text-muted leading-[1.75] mt-4">
            Silakan sampaikan kebutuhan proyek Anda melalui formulir berikut. Tim kami akan menghubungi Anda untuk diskusi awal dan penjadwalan konsultasi.
          </p>
        </div>

        <form className="grid md:grid-cols-2 gap-6 text-sm">
          <input className="border border-gray-300 px-4 py-3 rounded-md" placeholder="Nama" />
          <input className="border border-gray-300 px-4 py-3 rounded-md" placeholder="Instansi / Perusahaan" />
          <input className="border border-gray-300 px-4 py-3 rounded-md" placeholder="Jenis Proyek" />
          <input className="border border-gray-300 px-4 py-3 rounded-md" placeholder="Lokasi Proyek" />
          <textarea className="md:col-span-2 border border-gray-300 px-4 py-3 rounded-md" rows={4} placeholder="Deskripsi Singkat" />
          <input className="md:col-span-2 border border-gray-300 px-4 py-3 rounded-md" placeholder="Nomor Kontak" />

          <button className="md:col-span-2 bg-[rgb(var(--color-primary))] text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Kirim Permohonan
          </button>
        </form>

      </div>
    </section>
  );
}