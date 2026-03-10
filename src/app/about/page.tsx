import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { experienceTimeline, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BHEBERLYN O. EUGENIO, Project Manager leadership style, team experience, and delivery mindset.",
};

const leadershipStyle = [
  "Outcome-driven planning with realistic milestones",
  "Transparent communication between clients and developers",
  "Hands-on support for blockers, priorities, and delivery risks",
  "Collaborative leadership that keeps quality and velocity balanced",
];

const skillsSummary = [
  "Agile & Scrum Facilitation",
  "Project Scoping and Estimation",
  "Roadmap and Release Management",
  "Stakeholder Communication",
  "System Delivery Coordination",
  "Technical Documentation Oversight",
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10">
        <FadeIn className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="eyebrow">About Me</p>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Bridging strategy, people, and technology to deliver results
            </h1>
            <p className="text-lg text-gray-600">
              I am a {profile.role} with a track record of shipping 20+ software systems — on time, on scope, and built to last.
            </p>
            <p className="text-gray-600">
              Specializing in end-to-end software project delivery — managing scope, timelines, technical teams, and stakeholder expectations from kick-off to production.
            </p>
            <div className="card-surface p-5 text-sm text-gray-600">
              <p className="font-medium text-gray-900">Professional Biography</p>
              <p className="mt-2">I am a results-driven Software Project Manager based in Laguna, Philippines, with over 2 years of experience leading digital systems delivery across web, mobile, automation, and enterprise platforms. Known for clear communication, structured execution, and strong team leadership.</p>
            </div>
          </div>
          <FadeIn delay={0.15} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-200 via-fuchsia-200 to-pink-200 opacity-50 blur-lg" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-purple-200/80 shadow-xl shadow-violet-200/30">
                <Image
                  src="/berlyn.png"
                  alt="Bheberlyn O. Eugenio — Software Project Manager"
                  width={380}
                  height={480}
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">My Role as Project Manager</h2>
            <p className="text-gray-600">
              I manage the complete software project lifecycle: translating client requirements into structured delivery plans, coordinating technical teams, facilitating sprint execution, and ensuring every release meets quality and deadline standards.
            </p>
          </div>

          <div className="card-surface p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Leadership Style</h2>
            <ul className="space-y-3 text-gray-600">
              {leadershipStyle.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <BadgeCheck size={18} className="mt-0.5 text-violet-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="mb-10 text-3xl font-semibold text-gray-900">Experience Timeline</h2>
          <div className="relative space-y-6 border-l-2 border-violet-300 pl-6">
            {experienceTimeline.map((item) => (
              <div key={item.year} className="card-surface relative p-6">
                <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-sm shadow-violet-300" />
                <p className="text-sm font-semibold text-violet-600">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="card-surface p-8">
          <h2 className="mb-5 text-2xl font-semibold text-gray-900">Skills Summary</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillsSummary.map((item) => (
              <div key={item} className="rounded-xl border border-purple-200 bg-white/80 p-4 text-gray-700 transition hover:border-violet-400 hover:shadow-sm hover:shadow-violet-200/40">
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn className="card-surface flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Professional Achievements</h2>
            <p className="mt-2 text-gray-600">20+ systems shipped across web, mobile, automation, and enterprise platforms. Available for certifications, recognitions, and leadership milestones.</p>
          </div>
          <Button href="/contact" className="gap-2">
            Book a Consultation <ArrowRight size={16} />
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
