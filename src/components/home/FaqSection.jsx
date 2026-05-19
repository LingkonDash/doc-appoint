"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import faqImg from "@/images/faq-img.jpg";

const faqs = [
  {
    q: "How do I book an appointment with a doctor?",
    a: "Simply browse our doctor listings, select your preferred specialist, choose an available time slot, and confirm your booking. You'll receive a confirmation instantly.",
  },
  {
    q: "Can I cancel or reschedule my appointment?",
    a: "Yes, you can cancel or reschedule up to 2 hours before your appointment time through your account dashboard with no extra charge.",
  },
  {
    q: "What is the consultation fee and how do I pay?",
    a: "Each doctor sets their own fee, clearly shown on their profile before you book. Payment is accepted online via card or mobile banking at the time of booking.",
  },
  {
    q: "Are the doctors verified and qualified?",
    a: "All doctors on our platform are verified with valid medical registration, credentials, and hospital affiliations before being listed.",
  },
  {
    q: "Is my personal health information kept private?",
    a: "All personal and health data is encrypted and stored securely. We never share your information with third parties without your consent.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="my-25 px-10 max-w-350 mx-auto">

      {/* ── Header ── */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-[3px] h-[14px] rounded-full bg-primary block" />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "#243B42" }}
          >
            FAQ
          </span>
        </div>
        <h2 className="text-[30px] font-bold text-primary">
          Frequently Asked Questions
        </h2>
      </div>

      {/* ── Body: accordion + image ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Accordion */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden border transition-colors duration-200"
                style={{
                  background: isOpen
                    ? "rgba(197,222,230,0.45)"
                    : "rgba(197,222,230,0.2)",
                  borderColor: "rgba(36,59,66,0.08)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-left cursor-pointer"
                >
                  {/* Icon */}
                  <span
                    className="w-[22px] h-[22px] rounded-md flex items-center justify-center shrink-0 transition-transform duration-250"
                    style={{ background: "#243B42" }}
                  >
                    <Plus
                      size={13}
                      color="#C5DEE6"
                      strokeWidth={2.5}
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </span>
                  <span className="text-[13px] font-medium text-primary leading-snug">
                    {faq.q}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p
                    className="text-[12px] leading-relaxed pb-4 pl-[50px] pr-4"
                    style={{ color: "rgba(13,13,13,0.6)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image */}
        <div className="relative rounded-[18px] overflow-hidden h-[380px]">
          {/* Accent corners */}
          <div
            className="absolute -top-3 -left-3 w-14 h-14 rounded-xl z-0"
            style={{ background: "#243B42" }}
          />
          <div
            className="absolute -bottom-2.5 -right-2.5 w-12 h-5 rounded-md border-[3px] z-0"
            style={{ borderColor: "#C5DEE6" }}
          />

          <Image
            src={faqImg}
            alt="Doctors consulting"
            fill
            className="object-cover object-center relative z-10"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
};

export default FaqSection;