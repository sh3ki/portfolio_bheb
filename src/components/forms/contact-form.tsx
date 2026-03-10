"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContactFormValues = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  narrow?: boolean;
};

export const ContactForm = ({
  title = "Let's talk about your next project",
  subtitle = "Share your goals and I'll get back to you with a structured delivery plan.",
  narrow = false,
}: ContactFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      return;
    }

    setIsSubmitted(true);
    reset();
  };

  return (
    <div className={narrow ? "mx-auto w-full max-w-2xl" : undefined}>
      <div className="card-surface relative overflow-hidden p-8 md:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-violet-300/20 blur-2xl" />
        <div className="relative mb-8 space-y-3">
          <p className="eyebrow">Contact Form</p>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="max-w-2xl text-gray-500">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="relative grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                className="w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                placeholder="you@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && <p className="text-xs text-red-300">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              id="company"
              className="w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              placeholder="Company or organization"
              {...register("company")}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              placeholder="Tell me about your project goals, timeline, and requirements."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 20,
                  message: "Please provide at least 20 characters",
                },
              })}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={16} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {isSubmitted && (
            <p className="text-sm font-medium text-emerald-600">
              Thanks! Your message has been sent successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
