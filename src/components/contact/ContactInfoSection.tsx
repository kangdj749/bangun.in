"use client";

export default function ContactInfoSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container-main">

        <div className="max-w-xl mb-10">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[rgb(var(--color-primary))] font-medium mb-4">
            Informasi Perusahaan
          </p>
          <div className="w-12 h-[2px] bg-[rgb(var(--color-primary))] mb-6" />
          <h2 className="text-[20px] md:text-[26px] font-semibold leading-[1.35]">
            Informasi Perusahaan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-[14px] md:text-[15px] leading-[1.75] text-muted">

          <div>
            <p className="font-medium text-black mb-1">Nama Perusahaan</p>
            <p className="mb-4">PT. Bangun Cipta Solusi</p>

            <p className="font-medium text-black mb-1">Status</p>
            <p>Kantor Pusat</p>
          </div>

          <div>
            <p className="font-medium text-black mb-1">Alamat</p>
            <p className="mb-4">
              Rukan Graha Kencana, Blok A<br />
              Jl. Perjuangan No. 88 RT. 15/RW.10<br />
              Kel. Kebon Jeruk, Kec. Kebon Jeruk<br />
              Jakarta Barat 11530
            </p>

            <p className="font-medium text-black mb-1">Telepon / WhatsApp</p>
            <p className="mb-4">(+62) 877 6550 5935</p>

            <p className="font-medium text-black mb-1">Email</p>
            <p>bangunciptasolusi01@gmail.com</p>
          </div>

        </div>
      </div>
    </section>
  );
}