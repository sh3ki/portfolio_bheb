"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "w-full max-w-7xl rounded-3xl border border-purple-200/70 bg-white/50 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "shadow-xl shadow-violet-200/40 border-purple-300/60"
            : "shadow-md shadow-violet-100/30",
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/" className="leading-tight group">
            <span className="block text-[10px] tracking-[0.22em] text-violet-500 transition-colors group-hover:text-fuchsia-600">PORTFOLIO</span>
            <span className="block text-sm font-bold text-gray-900">Bheberlyn O. Eugenio</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-purple-100 bg-purple-50/60 p-1 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md shadow-violet-300/40"
                    : "text-gray-600 hover:bg-white hover:text-violet-700 hover:shadow-sm",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            className="rounded-xl border border-purple-200 bg-white p-2 text-gray-700 transition-all hover:border-violet-300 hover:bg-purple-50 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <nav className="grid gap-1 border-t border-purple-100 px-4 py-3 md:hidden">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                  pathname === item.href
                    ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                    : "text-gray-600 hover:bg-purple-50 hover:text-violet-700",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
