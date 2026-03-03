"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappNumber = "6281322817712"; // ganti jika perlu
  const [waLink, setWaLink] = useState<string>("");

  useEffect(() => {
    const defaultMessage = `
Assalamu'alaikum 🌙

Saya ingin berkonsultasi dengan PT Bangun Cipta Solusi (BANGUN.IN).

Mohon informasi lebih lanjut 🙏
    `.trim();

    setWaLink(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        defaultMessage
      )}`
    );
  }, []);

  if (!waLink) return null;

  return (
    <>
      {/* ================= MOBILE STICKY ================= */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="relative backdrop-blur-xl bg-white/90 border-t border-[rgb(var(--color-primary))]/20 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.25)] rounded-t-2xl flex items-center justify-between">
          
          {/* subtle glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[rgb(var(--color-primary))]/50 blur-sm" />

          <span className="text-xs font-medium tracking-wide text-[rgb(var(--color-primary))]">
            Konsultasi & Registrasi
          </span>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[rgb(var(--color-primary))] text-white font-semibold rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(128,0,0,0.5)]"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>

      {/* ================= DESKTOP FLOAT ================= */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3"
      >
        {/* Floating Label */}
        <div className="bg-white/90 backdrop-blur-md text-[rgb(var(--color-primary))] text-xs font-medium px-4 py-2 rounded-full shadow-lg border border-[rgb(var(--color-primary))]/10">
          Hubungi Kami
        </div>

        {/* Button with glow halo */}
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          {/* soft pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[rgb(var(--color-primary))]/40 blur-xl animate-pulse" />

          <div className="relative bg-[rgb(var(--color-primary))] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-[rgb(var(--color-primary))]/30 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <MessageCircle className="w-7 h-7" />
          </div>
        </motion.a>
      </motion.div>
    </>
  );
}