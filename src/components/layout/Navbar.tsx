"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { menuItems } from "@/data/menuItems";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-[rgb(var(--color-secondary))]/40">

        <div className="container-main flex items-center justify-between py-4 md:py-5">

          {/* Brand */}
          <Link href="/" className="flex items-center">
            <span className="font-semibold tracking-[0.3px] text-[rgb(var(--color-primary))] text-[18px] md:text-[20px]">
              BANGUN.IN
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium">

            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group">

                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[rgb(var(--color-primary))]"
                >
                  {item.label}
                </Link>

                {/* Desktop Submenu */}
                {item.children && (
                  <ul className="absolute left-0 top-full mt-4 w-52 bg-white border border-[rgb(var(--color-secondary))]/40 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link
                          href={child.href}
                          className="block px-4 py-3 text-[13px] text-foreground hover:bg-[rgb(var(--color-secondary))]/20 transition-colors"
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
                className="ml-4 px-5 py-2 text-[12.5px] rounded-md bg-[rgb(var(--color-primary))] text-white transition-all duration-300 hover:opacity-90"
              >
                Konsultasi
              </Link>
            </li>

          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[rgb(var(--color-primary))]"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu size={22} />
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}