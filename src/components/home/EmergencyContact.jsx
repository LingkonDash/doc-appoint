import React from 'react';
import Image from 'next/image';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import helpLineImg from '@/images/helpline.png';

const checks = [
  "24/7 Contact Our Hospital",
  "24 Hours Open Our Hospital",
  "Emergency Contact Our Phone Number",
];

const EmergencyContact = () => {
  return (
    <section
      className="my-16 mx-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[24px] px-12 py-14"
      style={{ background: "rgba(197,222,230,0.2)" }}
    >
      {/* ── Left: text content ── */}
      <div>
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-0.75 h-3.5 rounded-full bg-primary block" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Emergency Helpline
          </span>
        </div>

        <h2 className="text-[30px] font-bold text-primary leading-tight mb-3">
          Need Emergency Contact
        </h2>

        <p
          className="text-[13px] leading-relaxed mb-6 max-w-100"
          style={{ color: "rgba(13,13,13,0.55)" }}
        >
          Our dedicated support team is available around the clock to assist you
          with urgent medical queries, appointment emergencies, and hospital
          information.
        </p>

        {/* Checklist */}
        <ul className="flex flex-col gap-3 mb-8">
          {checks.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#243B42" }}
              >
                <CheckCircle2 size={13} color="#C5DEE6" strokeWidth={2.5} />
              </span>
              <span className="text-[13px] font-medium text-primary">{item}</span>
            </li>
          ))}
        </ul>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-3">
          <div
            className="flex flex-wrap items-center gap-3 px-4 py-3.5 rounded-[14px] border"
            style={{ background: "#fff", borderColor: "rgba(36,59,66,0.08)" }}
          >
            <span
              className="w-10.5 h-10.5 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#243B42" }}
            >
              <Phone size={18} color="#C5DEE6" />
            </span>
            <div>
              <p className="text-[11px] mb-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>
                Phone Number
              </p>
              <p className="text-[13px] font-semibold text-primary">
                +880 13 2525 065
              </p>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-3 px-4 py-3.5 rounded-[14px] border"
            style={{ background: "#fff", borderColor: "rgba(36,59,66,0.08)" }}
          >
            <span
              className="w-10.5 h-10.5 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#243B42" }}
            >
              <Mail size={18} color="#C5DEE6" />
            </span>
            <div>
              <p className="text-[11px] mb-0.5" style={{ color: "rgba(13,13,13,0.45)" }}>
                Quick Email
              </p>
              <p className="text-[13px] font-semibold text-primary">
                help.info@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: helpline image ── */}
      <div
        className="flex items-center justify-center rounded-[20px] p-8"
        style={{ background: "rgba(197,222,230,0.35)" }}
      >
        <div className="relative w-full h-75">
          <Image
            src={helpLineImg}
            alt="Emergency helpline support"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

    </section>
  );
};

export default EmergencyContact;