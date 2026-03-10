import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { processSteps, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore professional services offered by BHEBERLYN O. EUGENIO across web, mobile, systems, integrations, and project management.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-10">
        <FadeIn className="space-y-5">
          <p className="eyebrow">Services</p>
          <h1 className="section-title">Professional software delivery services</h1>
          <p className="section-subtitle">
            From web and mobile platforms to automation systems and project consulting — here is what I deliver.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.05} className="card-surface flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-violet-200/50">
                <Icon className="mb-4 text-violet-500" size={22} />
                <h2 className="mb-3 text-lg font-semibold text-gray-900">{service.title}</h2>
                <p className="mb-5 flex-1 text-sm text-gray-600">{service.description}</p>
                <Button href="/contact" variant="outline" className="w-full gap-2">
                  Request Service <ArrowRight size={14} />
                </Button>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section>
        <FadeIn className="space-y-8">
          <div>
            <p className="eyebrow">Process</p>
            <h2 className="section-title">How projects are delivered</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="card-surface p-6">
                <p className="mb-2 text-sm font-semibold text-violet-600">0{index + 1}</p>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="card-surface p-6 text-sm text-gray-600">
            <p className="font-medium text-gray-900">Flexible Engagement Models</p>
            <p className="mt-2">Available for fixed-scope contracts, retainer agreements, and milestone-based project engagements. Reach out to discuss the best structure for your needs.</p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="card-surface flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Ready to upgrade your project execution?</h2>
            <p className="mt-2 text-gray-600">
              Let’s map scope, priorities, and timelines for a clean, professional delivery.
            </p>
          </div>
          <Button href="/contact" className="gap-2">
            Start Planning <ArrowRight size={16} />
          </Button>
        </FadeIn>
      </Section>

      <Section id="contact">
        <FadeIn>
          <ContactForm narrow />
        </FadeIn>
      </Section>
    </>
  );
}
