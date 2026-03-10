import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/forms/contact-form";
import { featuredTechnologies, profile, spotlightCards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Bheberlyn O. Eugenio — Software Project Manager with 20+ systems delivered across web, mobile, and enterprise software.",
};

export default function Home() {
  const quickMetrics = [
    { label: "Systems Delivered", value: "20+", icon: Award },
    { label: "On-time Delivery Rate", value: "95%", icon: TrendingUp },
    { label: "Years of Experience", value: "2+", icon: Zap },
  ];

  return (
    <>
      <Section className="pt-10">
        <FadeIn className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <p className="eyebrow">Software Project Manager</p>
            <div className="space-y-5">
              <h1 className="text-gradient text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Bheberlyn O. Eugenio
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                {profile.tagline}
              </p>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4">
              {quickMetrics.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-purple-200 bg-white/80 px-5 py-3 shadow-sm shadow-violet-100/40 transition-all hover:border-violet-300 hover:shadow-violet-200/50"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-100">
                    <Icon size={14} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{value}</p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/services" className="gap-2">
                Explore Services <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right: Profile image */}
          <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-200 via-fuchsia-200 to-pink-200 opacity-60 blur-lg" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-purple-200/80 shadow-2xl shadow-violet-300/30">
                <Image
                  src="/berlyn.png"
                  alt="Bheberlyn O. Eugenio — Software Project Manager"
                  width={420}
                  height={520}
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-purple-200 bg-white px-4 py-2 shadow-lg shadow-violet-200/40">
                <p className="text-xs font-semibold text-violet-700">📍 {profile.location}</p>
              </div>
            </div>
          </FadeIn>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="space-y-8">
          <div>
            <p className="eyebrow">What I Do</p>
            <h2 className="section-title">End-to-end software delivery leadership</h2>
            <p className="section-subtitle">
              I manage the full project lifecycle — from requirements discovery and sprint planning to deployment and stakeholder handover.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {spotlightCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.1} className="card-surface p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100">
                    <Icon className="text-violet-600" size={20} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="space-y-8">
          <div>
            <p className="eyebrow">Technology Focus</p>
            <h2 className="section-title">Core technologies I work with</h2>
            <p className="section-subtitle">A selection of the tools and frameworks powering every delivery.</p>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {featuredTechnologies.map((item) => (
              <div
                key={item.name}
                className="card-surface flex flex-col items-center gap-3 p-5 text-center"
              >
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt={item.name} className="h-10 w-10 object-contain" loading="lazy" />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100">
                    <item.icon className="text-violet-600" size={24} />
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* CTA banner */}
      <Section>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 p-10 text-white shadow-2xl shadow-violet-400/30 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">Open for work</p>
                <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
                <p className="mt-2 max-w-md text-white/80">
                  Let's discuss your scope, timeline, and goals — I'll put together a clear delivery plan.
                </p>
              </div>
              <Button href="/contact" className="shrink-0 gap-2 bg-white text-violet-700 hover:bg-purple-50 hover:text-violet-800 shadow-xl">
                Start a Conversation <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section id="contact">
        <FadeIn className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-violet-600">
            <CheckCircle2 size={16} />
            <span>Available for project collaboration and consulting engagements</span>
          </div>
          <ContactForm />
        </FadeIn>
      </Section>
    </>
  );
}
