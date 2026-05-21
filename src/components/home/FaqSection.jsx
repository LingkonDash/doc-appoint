"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import faqImg from "@/images/faq-img.jpg";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="my-25 px-10 max-w-350 mx-auto overflow-hidden">

      {/* ── Header: Triggers when in view ── */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-0.75 h-3.5 rounded-full bg-primary block" />
          <span
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: "#243B42" }}
          >
            FAQ
          </span>
        </div>
        <h2 className="text-[30px] font-bold text-primary">
          Frequently Asked Questions
        </h2>
      </motion.div>

      {/* ── Body ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Accordion List: Triggers when in view */}
        <motion.div 
          className="flex flex-col gap-2.5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
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
                  <span
                    className="w-5.5 h-5.5 rounded-md flex items-center justify-center shrink-0"
                    style={{ background: "#243B42" }}
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex items-center justify-center"
                    >
                      <Plus size={13} color="#C5DEE6" strokeWidth={2.5} />
                    </motion.span>
                  </span>
                  
                  <span className="text-[13px] font-medium text-primary leading-snug">
                    {faq.q}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-[12px] leading-relaxed pb-4 pl-12.5 pr-4"
                        style={{ color: "rgba(13,13,13,0.6)" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Image: Triggers when in view (Staggered Arrival) */}
        <motion.div 
          className="relative rounded-[18px] overflow-hidden h-95"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
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
        </motion.div>

      </div>
    </section>
  );
};

export default FaqSection;