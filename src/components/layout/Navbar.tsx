"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { menuItems } from "@/data/menuItems";
import MobileMenu from "@/components/layout/MobileMenu";
import { useCallback } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className="
          fixed top-0 w-full z-50
          bg-[rgb(var(--color-surface))]
          border-b
          border-[rgb(var(--color-secondary))]/20
        "
      >
        <div className="container-main flex items-center justify-between h-[56px] md:h-[64px]">

          {/* Brand */}
          <Link
            href="/"
            className="text-[15px] md:text-[16px] font-semibold tracking-[0.4px] text-[rgb(var(--color-primary))]"
          >
            BANGUN.IN
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[12px] font-medium text-[rgb(var(--color-text))]">

            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group">

                <Link
                  href={item.href}
                  className="
                    relative
                    py-2
                    transition-colors
                    duration-200
                    hover:text-[rgb(var(--color-primary))]
                  "
                >
                  {item.label}
                </Link>

                {/* Submenu */}
                {item.children && (
                  <ul
                    className="
                      absolute left-0 top-full mt-2 w-52
                      bg-[rgb(var(--color-surface))]
                      border
                      border-[rgb(var(--color-secondary))]/20
                      opacity-0 invisible
                      translate-y-1
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      transition-all duration-200
                    "
                  >
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link
                          href={child.href}
                          className="
                            block
                            px-4
                            py-2.5
                            text-[11.5px]
                            text-[rgb(var(--color-text))]
                            transition-colors
                            duration-200
                            hover:bg-[rgb(var(--color-secondary))]/10
                            hover:text-[rgb(var(--color-primary))]
                          "
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            ))}

            {/* CTA */}
            <li>
              <Link
                href="/kontak"
                className="
                  ml-4
                  px-4
                  py-2
                  text-[11px]
                  font-medium
                  rounded-[var(--radius-sm)]
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]
                  transition-all
                  duration-200
                  hover:bg-[rgb(var(--color-primary))]/90
                "
              >
                Konsultasi
              </Link>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="
              md:hidden
              text-[rgb(var(--color-text))]
              transition-colors
              duration-200
              hover:text-[rgb(var(--color-primary))]
            "
          >
            <FiMenu size={20} />
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={handleClose}
      />
    </>
  );
}



