"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappNumber = "6281322817712";
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
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div
          className="
            relative
            bg-[rgb(var(--color-white))]
            border-t
            border-[rgb(var(--color-secondary))]/30
            px-4 py-3
            rounded-t-2xl
            shadow-[0_-15px_40px_-15px_rgba(var(--color-dark),0.4)]
            flex items-center justify-between
          "
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[rgb(var(--color-primary))]/60" />

          <span
            className="
              text-[11.5px]
              font-medium
              tracking-[0.6px]
              text-[rgb(var(--color-primary))]
            "
          >
            Konsultasi Profesional
          </span>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-2
              text-[12.5px]
              font-semibold
              rounded-lg
              bg-[rgb(var(--color-primary))]
              text-[rgb(var(--color-white))]
              transition-all duration-300
              hover:translate-y-[-2px]
              hover:shadow-[0_10px_25px_-5px_rgba(var(--color-primary),0.6)]
            "
          >
            WhatsApp
          </a>
        </div>
      </motion.div>

      {/* ================= DESKTOP FLOAT ================= */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-4"
      >
        {/* Floating Label */}
        <div
          className="
            bg-[rgb(var(--color-white))]
            text-[rgb(var(--color-primary))]
            text-[11.5px]
            font-medium
            px-4 py-2
            rounded-full
            border
            border-[rgb(var(--color-secondary))]/25
            shadow-[0_15px_35px_-15px_rgba(var(--color-dark),0.35)]
          "
        >
          Hubungi Konsultan
        </div>

        {/* Floating Button */}
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          className="relative"
        >
          {/* Soft Glow Halo */}
          <span
            className="
              absolute inset-0 rounded-full
              bg-[rgb(var(--color-primary))]/30
              blur-2xl
              opacity-70
            "
          />

          <div
            className="
              relative
              bg-[rgb(var(--color-primary))]
              text-[rgb(var(--color-white))]
              w-16 h-16
              rounded-full
              flex items-center justify-center
              border
              border-[rgb(var(--color-primary))]/40
              shadow-[0_15px_40px_-15px_rgba(var(--color-dark),0.5)]
              transition-all duration-300
              hover:shadow-[0_20px_50px_-10px_rgba(var(--color-primary),0.6)]
            "
          >
            <MessageCircle className="w-7 h-7" />
          </div>
        </motion.a>
      </motion.div>
    </>
  );
}