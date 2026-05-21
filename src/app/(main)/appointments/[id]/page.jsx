import getAppointmentsById from '@/lib/api/getAppointmentsById';
import Image from 'next/image';
import { MapPin, Clock, Briefcase, Star, Building2, BanknoteIcon, ShieldCheck, GraduationCap, Phone } from 'lucide-react';
import BookAppointModal from '@/components/shared/BookAppointModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


export const metadata = {
  title: "Doctor Details - Doc Appointment",
};

const DocDetailsPage = async ({ params }) => {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  const res = await getAppointmentsById(id);

  // ── Error state ──
  if (!res.success) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center gap-3 px-10">
        <p className="text-[32px] font-bold text-primary">{res.status}</p>
        <p className="text-[15px] font-medium text-primary">Something went wrong</p>
        <p className="text-[13px]" style={{ color: "rgba(13,13,13,0.45)" }}>
          {res.message || "Unable to load doctor details. Please try again later."}
        </p>
      </main>
    );
  }

  const {
    name,
    specialty,
    image,
    experience,
    availability,
    description,
    hospital,
    location,
    fee,
    rating,
  } = res.data;

  return (
    <main className="max-w-280 mx-auto px-10 py-14">

      <div
        className="rounded-[24px] overflow-hidden mb-8"
        style={{ background: "rgba(197,222,230,0.2)", border: "1px solid rgba(36,59,66,0.08)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

          <div className="relative min-h-80 md:min-h-full">
            <Image
              src={image || "/fallback-doctor.jpg"}
              alt={name}
              fill
              className="object-cover object-top"
              sizes="280px"
            />

            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #243B42 0%, transparent 30%)" }}
            />

            <div
              className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold bg-primary text-white/80 blur-in-sm"
              style={{ border: "1px solid rgba(197,222,230,0.2)" }}
            >
              <Star size={12} fill="#f5c842" stroke="none" />
              {rating.average}
              <span>({rating.totalReviews} reviews)</span>
            </div>
          </div>


          <div className="p-8 flex flex-col justify-between">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-2"
                style={{ color: "rgba(36,59,66,0.45)" }}
              >
                {specialty}
              </p>
              <h1 className="text-[28px] font-bold text-primary leading-tight mb-4">
                {name}
              </h1>


              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(36,59,66,0.08)", color: "#243B42" }}>
                  <Briefcase size={13} /> {experience}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(36,59,66,0.08)", color: "#243B42" }}>
                  <BanknoteIcon size={13} /> ৳{fee} / visit
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(36,59,66,0.08)", color: "#243B42" }}>
                  <ShieldCheck size={13} /> Verified
                </span>
              </div>


              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-start gap-2">
                  <Building2 size={14} className="mt-0.5 shrink-0" style={{ color: "#243B42" }} />
                  <span className="text-[13px]" style={{ color: "rgba(13,13,13,0.65)" }}>{hospital}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#243B42" }} />
                  <span className="text-[13px]" style={{ color: "rgba(13,13,13,0.65)" }}>{location}</span>
                </div>
              </div>
            </div>

            {/* Book appoint modal */}
            <BookAppointModal doctorName={name} doctorId={id} userEmail={session?.user?.email} userID={session?.user?.id} />
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">


        <div className="flex flex-col gap-6">


          <div
            className="rounded-[20px] p-7"
            style={{ background: "rgba(197,222,230,0.15)", border: "1px solid rgba(36,59,66,0.07)" }}
          >
            <h2 className="text-[14px] font-bold uppercase tracking-[0.07em] text-primary mb-4">
              About
            </h2>
            <p className="text-[13px] leading-[1.85]" style={{ color: "rgba(13,13,13,0.65)" }}>
              {description}
            </p>
          </div>


          <div
            className="rounded-[20px] p-7"
            style={{ background: "rgba(197,222,230,0.15)", border: "1px solid rgba(36,59,66,0.07)" }}
          >
            <h2 className="text-[14px] font-bold uppercase tracking-[0.07em] text-primary mb-4">
              Available Slots
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {availability.map((slot, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-[12px] font-medium px-4 py-2 rounded-full"
                  style={{ background: "#243B42", color: "#C5DEE6" }}
                >
                  <Clock size={13} /> {slot}
                </span>
              ))}
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-4">

          <div
            className="rounded-[20px] p-6"
            style={{ background: "rgba(197,222,230,0.15)", border: "1px solid rgba(36,59,66,0.07)" }}
          >
            <h2 className="text-[14px] font-bold uppercase tracking-[0.07em] text-primary mb-4">
              Rating
            </h2>
            <div className="flex items-end gap-3 mb-3">
              <span className="text-[40px] font-bold text-primary leading-none">{rating.average}</span>
              <div className="mb-1">
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill={s <= Math.round(rating.average) ? "#f5c842" : "none"}
                      stroke={s <= Math.round(rating.average) ? "none" : "rgba(36,59,66,0.25)"}
                    />
                  ))}
                </div>
                <p className="text-[11px]" style={{ color: "rgba(13,13,13,0.45)" }}>
                  {rating.totalReviews} total reviews
                </p>
              </div>
            </div>
          </div>


          <div
            className="rounded-[20px] p-6 flex flex-col gap-4"
            style={{ background: "rgba(197,222,230,0.15)", border: "1px solid rgba(36,59,66,0.07)" }}
          >
            <h2 className="text-[14px] font-bold uppercase tracking-[0.07em] text-primary mb-0">
              Quick Info
            </h2>
            {[
              { icon: <GraduationCap size={15} />, label: "Experience", value: experience },
              { icon: <BanknoteIcon size={15} />, label: "Consult Fee", value: `৳${fee}` },
              { icon: <ShieldCheck size={15} />, label: "Status", value: "Verified Doctor" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "#243B42", color: "#C5DEE6" }}
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-[10px]" style={{ color: "rgba(13,13,13,0.4)" }}>{item.label}</p>
                  <p className="text-[13px] font-semibold text-primary">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DocDetailsPage;