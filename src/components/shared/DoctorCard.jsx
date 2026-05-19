import Image from "next/image";
import Link from "next/link";
import { Clock, Star, Stethoscope, ReceiptText } from "lucide-react";
import PrimaryButton from "../reusables/PrimaryButton";

const DoctorCard = ({ data }) => {
  const { id, name, specialty, image, availability, description, fee, rating, experience } = data;

  return (
    <div className=" rounded-[22px] overflow-hidden shrink-0 shadow-md group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

      {/* ── Top: full-bleed image ── */}
      <div className="relative w-full h-65">
        <Image
          src={image || "/fallback-doctor.jpg"}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="260px"
        />
        {/* Rating badge */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 text-[12px] font-semibold px-2.5 py-1 rounded-full bg-primary/80"
          style={{
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
          }}
        >
          <Star size={11} fill="#f5c842" stroke="none" />
          {rating.average}
        </div>
      </div>

      {/* ── Bottom: data on secondary bg ── */}
      <div className="px-4 pb-4 pt-1.5" style={{ background: "#C5DEE650" }}>

        {/* Name & specialty */}
        <h2 className="text-[18px] font-semibold text-foreground leading-tight mb-0.5">
          {name}
        </h2>
        <p
          className="text-[11px] font-medium uppercase tracking-[0.06em] mb-2"
          style={{ color: "rgba(13,13,13,0.45)" }}
        >
          {specialty}
        </p>

        {/* 2-line description */}
        <p
          className="text-[12px] leading-relaxed line-clamp-2 mb-3"
          style={{ color: "rgba(13,13,13,0.6)" }}
        >
          {description}
        </p>

        {/* Divider */}
        <div className="h-px mb-3" style={{ background: "rgba(36,59,66,0.1)" }} />

        {/* Experience + Fee */}
        <div className="grid grid-cols-2 place-items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <Stethoscope size={15} style={{ color: "#243B42", flexShrink: 0 }} />
            <div>
              <span className="block text-[10px]" style={{ color: "rgba(13,13,13,0.45)" }}>
                Experience
              </span>
              <span className="block text-[12px] font-semibold" style={{ color: "#243B42" }}>
                {experience}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <ReceiptText size={15} style={{ color: "#243B42", flexShrink: 0 }} />
            <div>
              <span className="block text-[10px]" style={{ color: "rgba(13,13,13,0.45)" }}>
                Consult fee
              </span>
              <span className="block text-[12px] font-semibold" style={{ color: "#243B42" }}>
                ৳{fee}
              </span>
            </div>
          </div>
        </div>

        {/* Availability slots */}
        <div className="flex justify-around items-center flex-wrap gap-1.5 mb-3.5">
          {availability.map((slot, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(36,59,66,0.08)",
                border: "1px solid rgba(36,59,66,0.15)",
                color: "#243B42",
              }}
            >
              <Clock size={12} /> {slot}
            </span>
          ))}
        </div>

        <PrimaryButton href={'/'} className="w-full shadow-none">View Details</PrimaryButton>
      </div>
    </div>
  );
};

export default DoctorCard;