import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { technologyGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Technology stack used by BHEBERLYN O. EUGENIO for modern software delivery, from programming languages to cloud deployment.",
};

export default function TechnologyPage() {
  return (
    <>
      <Section className="pt-10">
        <FadeIn className="space-y-5">
          <p className="eyebrow">Technology</p>
          <h1 className="section-title">Technology stack for modern software delivery</h1>
          <p className="section-subtitle">
            The tools, frameworks, and platforms I manage across web, mobile, cloud, and enterprise systems.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid gap-8">
          {technologyGroups.map((group, groupIndex) => (
            <FadeIn key={group.title} delay={groupIndex * 0.05} className="card-surface p-8">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">{group.title}</h2>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-3 rounded-xl border border-purple-200 bg-white/80 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-md hover:shadow-violet-200/50"
                  >
                    {item.logoUrl ? (
                      <img src={item.logoUrl} alt={item.name} className="h-10 w-10 object-contain" loading="lazy" />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100">
                        <item.icon className="text-violet-500" size={24} />
                      </div>
                    )}
                    <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}

        </div>
      </Section>

      <Section>
        <FadeIn className="card-surface flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Need the right stack for your project?</h2>
            <p className="mt-2 text-gray-600">
              Let’s choose technology that matches your timeline, budget, and growth goals.
            </p>
          </div>
          <Button href="/contact" className="gap-2">
            Discuss Stack Strategy <ArrowRight size={16} />
          </Button>
        </FadeIn>
      </Section>

      <Section id="contact">
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </Section>
    </>
  );
}
