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
      <nav
        className="
          fixed top-0 w-full z-50
          bg-[rgb(var(--color-white))]
          border-b
          border-[rgb(var(--color-secondary))]/30
          backdrop-blur-md
        "
      >
        <div className="container-main flex items-center justify-between py-4 md:py-5">

          {/* Brand */}
          <Link href="/" className="flex items-center group">
            <span
              className="
                font-semibold
                tracking-[0.4px]
                text-[rgb(var(--color-primary))]
                text-[18px] md:text-[20px]
                transition-all duration-300
                group-hover:opacity-80
              "
            >
              BANGUN.IN
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[13px] font-medium">

            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group">

                {/* Parent Link */}
                <Link
                  href={item.href}
                  className="
                    relative
                    text-[rgb(var(--color-primary))]
                    transition-all duration-300
                    hover:opacity-80
                  "
                >
                  {item.label}

                  {/* Premium Underline */}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0
                      bg-[rgb(var(--color-primary))]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>

                {/* Desktop Submenu */}
                {item.children && (
                  <ul
                    className="
                      absolute left-0 top-full mt-6 w-56
                      bg-[rgb(var(--color-white))]
                      border
                      border-[rgb(var(--color-secondary))]/25
                      rounded-xl
                      shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]
                      opacity-0 invisible
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      transition-all duration-300 ease-out
                    "
                  >
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link
                          href={child.href}
                          className="
                            block
                            px-5 py-3
                            text-[12.8px]
                            text-[rgb(var(--color-primary))]
                            transition-all duration-200
                            hover:bg-[rgb(var(--color-secondary))]/15
                            hover:pl-6
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
                  ml-6
                  px-6 py-2.5
                  text-[12.5px]
                  font-medium
                  rounded-md
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]
                  shadow-[0_8px_25px_-8px_rgba(var(--color-primary),0.6)]
                  transition-all duration-300
                  hover:translate-y-[-2px]
                  hover:shadow-[0_12px_35px_-10px_rgba(var(--color-primary),0.7)]
                "
              >
                Konsultasi
              </Link>
            </li>

          </ul>

          {/* Mobile Button */}
          <button
            className="
              md:hidden
              text-[rgb(var(--color-primary))]
              transition-all duration-300
              hover:opacity-80
            "
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