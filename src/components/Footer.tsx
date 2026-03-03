"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] pt-10 pb-6">
      <div className="container-main grid md:grid-cols-4 gap-6">

        {/* Brand & Description */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight ">
            BANGUN.IN
          </h3>
          <p className="text-sm leading-relaxed  ">
            Konsultan Arsitektur, Engineering & Manajemen Konstruksi terintegrasi untuk proyek Anda.
          </p>
        </div>

        {/* Layanan */}
        <div className="space-y-2">
          <h4 className="font-semibold leading-relaxed text-sm tracking-wide mb-2">Layanan</h4>
          <ul className="space-y-1 text-sm leading-relaxed">
            <li>
              <Link href="/layanan#penataan-ruang" className="hover:text-[rgb(var(--color-primary))] transition-colors">
                Penataan Ruang
              </Link>
            </li>
            <li>
              <Link href="/layanan#arsitektur" className="hover:text-[rgb(var(--color-primary))] transition-colors">
                Arsitektur
              </Link>
            </li>
            <li>
              <Link href="/layanan#rekayasa" className="hover:text-[rgb(var(--color-primary))] transition-colors">
                Rekayasa Teknik
              </Link>
            </li>
            <li>
              <Link href="/layanan#topografi" className="hover:text-[rgb(var(--color-primary))] transition-colors">
                Topografi & Geoteknik
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="space-y-2">
          <h4 className="font-semibold  text-sm tracking-wide mb-2">Kontak</h4>
          <p className="text-sm text-white/80 leading-relaxed">Rukan Graha Kencana, Blok A, Jakarta Barat</p>
          <p className="text-sm text-white/80">Telp: (+62) 877-6550-5935</p>
          <p className="text-sm text-white/80">Email: bangunciptasolusi01@gmail.com</p>
        </div>

        {/* CTA */}
        <div className="space-y-2">
          <h4 className="font-semibold  text-sm tracking-wide mb-2">Konsultasi</h4>
          <Link
            href="/kontak"
            className="inline-block outline-1 px-6 py-2 rounded-md bg-[rgb(var(--color-primary))]  font-medium hover:opacity-90 transition-all shadow-md"
          >
            Ajukan Konsultasi
          </Link>
        </div>

      </div>

      <div className="mt-8 text-center text-white/50 text-xs">
        &copy; {new Date().getFullYear()} PT Bangun Cipta Solusi. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}