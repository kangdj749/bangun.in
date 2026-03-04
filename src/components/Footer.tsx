"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-dark))] text-[rgb(var(--color-white))] pt-20 pb-10">

      <div className="container-main">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-[18px] md:text-[20px] font-semibold tracking-[0.5px]">
              BANGUN.IN
            </h3>

            <p className="text-[13px] leading-[1.7] text-[rgb(var(--color-muted))] max-w-xs">
              Konsultan arsitektur, rekayasa teknik, dan manajemen konstruksi
              terintegrasi untuk proyek berskala profesional dan berstandar regulasi.
            </p>
          </div>

          {/* Layanan */}
          <div className="space-y-5">
            <h4 className="text-[10px] uppercase tracking-[2px] text-[rgb(var(--color-muted))]">
              Layanan
            </h4>

            <ul className="space-y-3 text-[13px]">
              <li>
                <Link
                  href="/layanan#penataan-ruang"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Penataan Ruang
                </Link>
              </li>

              <li>
                <Link
                  href="/layanan#arsitektur"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Arsitektur
                </Link>
              </li>

              <li>
                <Link
                  href="/layanan#rekayasa"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Rekayasa Teknik
                </Link>
              </li>

              <li>
                <Link
                  href="/layanan#topografi"
                  className="text-[rgb(var(--color-white))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                >
                  Topografi & Geoteknik
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-5">
            <h4 className="text-[10px] uppercase tracking-[2px] text-[rgb(var(--color-muted))]">
              Kontak
            </h4>

            <div className="space-y-3 text-[13px] leading-[1.7] text-[rgb(var(--color-muted))]">
              <p>Rukan Graha Kencana, Blok A, Jakarta Barat</p>
              <p>Telp: (+62) 877-6550-5935</p>
              <p>Email: bangunciptasolusi01@gmail.com</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <h4 className="text-[10px] uppercase tracking-[2px] text-[rgb(var(--color-muted))]">
              Konsultasi
            </h4>

            <Link
              href="/kontak"
              className="
                inline-block
                px-8 py-3
                text-[11px]
                uppercase
                tracking-[1.5px]
                font-medium
                border
                border-[rgb(var(--color-primary))]
                text-[rgb(var(--color-white))]
                hover:bg-[rgb(var(--color-primary))]
                transition-all
                duration-400
              "
            >
              Ajukan Konsultasi
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-[rgb(var(--color-surface))]" />

        {/* Bottom */}
        <div className="mt-8 text-[11px] tracking-[0.5px] text-[rgb(var(--color-muted))] text-center">
          © {new Date().getFullYear()} PT Bangun Cipta Solusi. Seluruh hak dilindungi.
        </div>

      </div>
    </footer>
  );
}