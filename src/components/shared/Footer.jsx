import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, PhoneCall, Mail, Clock } from 'lucide-react';
import logo from '@/images/docAppoint-logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Find Doctors", href: "/appointments" },
  { label: "Appointments", href: "/appointments" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

const specialties = [
  "Cardiology", "Pediatrics", "Neurology", "Orthopedics", "Dermatology",
];

const socials = [
  { icon: <FaFacebook size={15} />, href: "#" },
  { icon: <FaInstagram size={15} />, href: "#" },
  { icon: <FaXTwitter size={15} />, href: "#" },
  { icon: <FaLinkedin size={15} />, href: "#" },
  { icon: <FaYoutube size={15} />, href: "#" },
];

const contacts = [
  { icon: <MapPin size={14} />, text: "Sher-e-Bangla Nagar, Dhaka, Bangladesh" },
  { icon: <PhoneCall size={14} />, text: "+880 13 2525 065" },
  { icon: <Mail size={14} />, text: "help.docappoint@gmail.com" },
  { icon: <Clock size={14} />, text: "Open 24 hours, 7 days a week" },
];

const Footer = () => {
  return (
    <footer style={{ background: "#243B42" }} className="px-10 pt-14">

      {/* ── Main grid ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
        style={{ borderBottom: "1px solid rgba(197,222,230,0.1)" }}
      >

        {/* Brand column */}
        <div className="lg:col-span-1">
          {/* Logo + name */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="relative w-8 h-8">
              <Image
                src={logo}
                alt="DocAppoint logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[20px] font-bold" style={{ color: "#C5DEE6" }}>
              DocAppoint
            </span>
          </div>

          <p
            className="text-[12px] leading-[1.75] mb-5 max-w-60"
            style={{ color: "rgba(197,222,230,0.55)" }}
          >
            Your trusted platform for connecting with verified doctors and booking
            appointments with ease — anytime, anywhere.
          </p>

          {/* Social icons */}
          <div className="flex gap-2">
            {socials.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="w-8.5 h-8.5 rounded-2xl flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(197,222,230,0.08)",
                  border: "1px solid rgba(197,222,230,0.12)",
                  color: "#C5DEE6",
                }}
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-4"
            style={{ color: "#C5DEE6" }}
          >
            Quick Links
          </p>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[13px] transition-colors"
                  style={{ color: "rgba(197,222,230,0.55)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-4"
            style={{ color: "#C5DEE6" }}
          >
            Specialties
          </p>
          <ul className="flex flex-col gap-2.5">
            {specialties.map((s) => (
              <li key={s}>
                <Link
                  href={`#`}
                  className="text-[13px] transition-colors"
                  style={{ color: "rgba(197,222,230,0.55)" }}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-4"
            style={{ color: "#C5DEE6" }}
          >
            Contact Us
          </p>
          <ul className="flex flex-col gap-3">
            {contacts.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 shrink-0"
                  style={{ color: "#C5DEE6" }}
                >
                  {c.icon}
                </span>
                <span
                  className="text-[12px] leading-relaxed"
                  style={{ color: "rgba(197,222,230,0.55)" }}
                >
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
        <p className="text-[12px]" style={{ color: "rgba(197,222,230,0.35)" }}>
          © {new Date().getFullYear()} DocAppoint. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
            <Link
              key={t}
              href="#"
              className="text-[12px] transition-colors"
              style={{ color: "rgba(197,222,230,0.35)" }}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;