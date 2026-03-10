import type { Metadata } from "next";
import { Mail, MapPin, Phone, Facebook, Instagram, ArrowRight, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bheberlyn O. Eugenio — Software Project Manager available for project consulting, systems planning, and software delivery engagements.",
};

const contactItems = [
  { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, icon: Phone, href: `tel:${profile.phone}` },
  { label: "Facebook", value: profile.facebook, icon: Facebook, href: `https://${profile.facebook}` },
  { label: "Instagram", value: profile.instagram, icon: Instagram, href: `https://instagram.com/${profile.instagram.replace("@", "")}` },
  { label: "Location", value: profile.location, icon: MapPin, href: null },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-10">
        <FadeIn className="space-y-5">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">{"Let's work on something great together"}</h1>
          <p className="section-subtitle">
            Reach out through any channel below or fill in the form — I respond within 24 hours with a clear, structured plan for your project.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <div key={item.label} className="card-surface flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 shrink-0">
                  <item.icon className="text-violet-600" size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-gray-900 transition-colors hover:text-violet-700">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="card-surface p-5">
              <div className="mb-2 flex items-center gap-2">
                <MessageCircle size={16} className="text-violet-500" />
                <p className="text-sm font-semibold text-gray-800">Response Time</p>
              </div>
              <p className="text-sm text-gray-500">
                I typically respond within <span className="font-semibold text-violet-700">24 hours</span> on business days. For urgent matters, reach out via phone or Facebook Messenger.
              </p>
            </div>
            <Button href="/services" variant="outline" className="w-full gap-2">
              View My Services <ArrowRight size={16} />
            </Button>
          </div>
          <ContactForm title="Send a direct message" subtitle="Share your project goals and I will respond with a structured delivery plan." />
        </FadeIn>
      </Section>
    </>
  );
}
