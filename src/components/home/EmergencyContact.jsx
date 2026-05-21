"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import helpLineImg from '@/images/helpline.png';
import { motion } from 'framer-motion';

const checks = [
  "24/7 Contact Our Hospital",
  "24 Hours Open Our Hospital",
  "Emergency Contact Our Phone Number",
];

// Framer Motion configuration variants for orchestrating staggered card reveal entry drops
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Gap spacing timings between sequential element reveals
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EmergencyContact = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Triggers setup sequence when elements enter viewport screen lines
      className="my-12 md:my-16 mx-4 sm:mx-6 md:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-[24px] px-6 sm:px-10 md:px-12 py-10 md:py-14"
      style={{ background: "rgba(197,222,230,0.2)" }}
    >
      {/* ── Left Side Info Content Columns ── */}
      <div>
        {/* Eyebrow Label Text */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
          <span className="w-1 h-3.5 rounded-full bg-primary block" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Emergency Helpline
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-[28px] md:text-[34px] font-bold text-primary leading-tight mb-3">
          Need Emergency Contact?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[13.5px] leading-relaxed mb-6 max-w-xl"
          style={{ color: "rgba(13,13,13,0.55)" }}
        >
          Our dedicated support team is available around the clock to assist you
          with urgent medical queries, appointment emergencies, and hospital
          information.
        </motion.p>

        {/* Verification Checklists */}
        <motion.ul variants={itemVariants} className="flex flex-col gap-3 mb-8">
          {checks.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#243B42" }}
              >
                <CheckCircle2 size={13} color="#C5DEE6" strokeWidth={2.5} />
              </span>
              <span className="text-[13.5px] font-medium text-primary">{item}</span>
            </li>
          ))}
        </motion.ul>

        {/* Interactive Action Communication Cards Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Native Mobile Cellular Trigger Link */}
          <motion.a
            href="tel:+880132525065"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3.5 px-4 py-3.5 rounded-[14px] border transition-shadow duration-200 hover:shadow-lg group bg-white"
            style={{ borderColor: "rgba(36,59,66,0.08)" }}
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/90"
              style={{ background: "#243B42" }}
            >
              <Phone size={16} color="#C5DEE6" />
            </span>
            <div>
              <p className="text-[11px] mb-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>
                Phone Number
              </p>
              <p className="text-[13px] font-semibold text-primary tracking-wide">
                +880 13 2525 065
              </p>
            </div>
          </motion.a>

          {/* Mail Client Opener link */}
          <motion.a
            href="mailto:help.info@gmail.com?subject=Urgent%20Medical%20Assistance"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3.5 px-4 py-3.5 rounded-[14px] border transition-shadow duration-200 hover:shadow-lg group bg-white"
            style={{ borderColor: "rgba(36,59,66,0.08)" }}
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/90"
              style={{ background: "#243B42" }}
            >
              <Mail size={16} color="#C5DEE6" />
            </span>
            <div>
              <p className="text-[11px] mb-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>
                Quick Email
              </p>
              <p className="text-[13px] font-semibold text-primary break-all">
                help.info@gmail.com
              </p>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* ── Right Side Helpline Graphic Image Block ── */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center rounded-[20px] p-6 sm:p-8"
        style={{ background: "rgba(197,222,230,0.35)" }}
      >
        {/* Adds an elegant infinite floating animation loop effect to the graphic vector */}
        <motion.div 
          className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src={helpLineImg}
            alt="Emergency helpline support"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EmergencyContact;