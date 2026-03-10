import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-10 overflow-hidden border-t border-purple-100">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-fuchsia-50/70 to-pink-50 opacity-80" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative container-width pt-10 pb-6">
        {/* Main footer grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="text-[10px] tracking-[0.22em] text-violet-500 uppercase">Portfolio</p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">Bheberlyn O. Eugenio</h3>
              <p className="mt-1 text-sm font-medium text-fuchsia-600">Software Project Manager</p>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-[260px]">
              Delivering professional software systems across web, mobile, and enterprise — from planning to production.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-violet-700"
                  >
                    <ArrowUpRight size={13} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={14} className="text-violet-500 shrink-0" />
                <span>{profile.email}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={14} className="text-violet-500 shrink-0" />
                <span>{profile.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Facebook size={14} className="text-violet-500 shrink-0" />
                <span>{profile.facebook}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Instagram size={14} className="text-violet-500 shrink-0" />
                <span>{profile.instagram}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={14} className="text-violet-500 shrink-0" />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-purple-100 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bheberlyn O. Eugenio. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">Software Project Manager &mdash; {profile.location}</p>
        </div>
      </div>
    </footer>
  );
};
