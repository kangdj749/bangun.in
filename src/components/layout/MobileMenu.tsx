"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronRight, FiX } from "react-icons/fi";
import { menuItems } from "@/data/menuItems";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible bg-black/30"
            : "opacity-0 invisible"
        }`}
      />

      {/* Floating Right Wrapper */}
      <div
        className={`fixed top-20 right-4 z-50 transition-all duration-300 ease-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-8 opacity-0 pointer-events-none"
        }`}
      >
        {/* Card Container */}
        <aside
          className="
            w-[255px]
            rounded-2xl
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]
            border
            border-[rgb(var(--color-secondary))]/20
            bg-[rgb(var(--color-white))]
            overflow-hidden
          "
        >
          {/* Header */}
          <div
            className="
              flex items-center justify-between
              px-4 py-3
              border-b
              border-[rgb(var(--color-secondary))]/20
            "
          >
            <span
              className="
                text-[11.5px]
                tracking-[1.2px]
                uppercase
                font-semibold
                text-[rgb(var(--color-primary))]
              "
            >
              Navigasi
            </span>

            <button
              onClick={onClose}
              className="
                p-1.5
                rounded-md
                hover:bg-[rgb(var(--color-secondary))]/10
                transition-colors
              "
            >
              <FiX size={16} />
            </button>
          </div>

          {/* Menu List */}
          <nav className="py-2">

            {menuItems.map((item, index) => (
              <div key={index} className="px-2">

                {/* Parent */}
                <div className="flex items-center justify-between">

                  <Link
                    href={item.href}
                    onClick={!item.children ? onClose : undefined}
                    className="
                      flex-1
                      px-3 py-2
                      text-[12.5px]
                      font-medium
                      text-[rgb(var(--color-primary))]
                      rounded-lg
                      hover:bg-[rgb(var(--color-secondary))]/10
                      transition-all duration-200
                    "
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="
                        p-1.5 mr-1
                        text-[rgb(var(--color-primary))]
                        transition-all duration-300
                      "
                    >
                      <FiChevronRight
                        size={14}
                        className={`
                          transition-transform duration-300 ease-out
                          ${openIndex === index ? "rotate-90" : ""}
                        `}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.children && (
                  <div
                    className={`
                      overflow-hidden
                      transition-all duration-300 ease-in-out
                      ${
                        openIndex === index
                          ? "max-h-40 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        ml-4
                        border-l
                        border-[rgb(var(--color-secondary))]/30
                        pl-3
                        py-1
                        space-y-1
                      "
                    >
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          onClick={onClose}
                          className="
                            block
                            px-2 py-1.5
                            text-[12px]
                            text-[rgb(var(--color-primary))]/80
                            rounded-md
                            hover:text-[rgb(var(--color-primary))]
                            hover:bg-[rgb(var(--color-secondary))]/10
                            transition-all duration-200
                          "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}

          </nav>
        </aside>
      </div>
    </>
  );
}