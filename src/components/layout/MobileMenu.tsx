"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronRight, FiX } from "react-icons/fi";
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
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[rgb(var(--color-secondary))]/40">
          <span className="text-[14px] font-semibold tracking-[0.3px]">
            Menu Navigasi
          </span>
          <button onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        {/* Menu List */}
        <nav className="px-4 py-6 space-y-2">

          {menuItems.map((item, index) => (
            <div key={index}>

              {/* Parent Item */}
              <div className="flex items-center justify-between">

                <Link
                  href={item.href}
                  onClick={!item.children ? onClose : undefined}
                  className="flex-1 px-3 py-3 text-[14px] font-medium rounded-md hover:bg-[rgb(var(--color-secondary))]/20 transition-colors duration-200"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="p-2"
                  >
                    {openIndex === index ? (
                      <FiChevronDown size={16} />
                    ) : (
                      <FiChevronRight size={16} />
                    )}
                  </button>
                )}
              </div>

              {/* Submenu */}
              {item.children && openIndex === index && (
                <div className="mt-1 ml-4 border-l border-[rgb(var(--color-secondary))]/40 pl-3 space-y-1">

                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-[13px] text-muted rounded-md hover:bg-[rgb(var(--color-secondary))]/15 transition-colors duration-200"
                    >
                      {child.label}
                    </Link>
                  ))}

                </div>
              )}

            </div>
          ))}

        </nav>
      </aside>
    </>
  );
}