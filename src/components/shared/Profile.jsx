import { Mail, ShieldCheck, User } from "lucide-react";
import Image from "next/image";
import UpdateProfileModal from "./UpdateProfileModal";

const Profile = ({ user }) => {
  if (!user) return (
    <div className="text-center py-16 text-[13px]" style={{ color: "rgba(13,13,13,0.4)" }}>
      No user session found.
    </div>
  );

  const infoRows = [
    { icon: <User size={15} />, label: "Full Name", value: user.name },
    { icon: <Mail size={15} />, label: "Email", value: user.email },
    { icon: <ShieldCheck size={15} />, label: "Role", value: "Patient" },
  ]

  return (
    <div className="flex flex-col gap-5 w-full max-w-full overflow-hidden">
      {/* Avatar + name hero */}
      <div
        className="rounded-[20px] p-5 sm:p-7 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 transition-all"
        style={{ background: "rgba(197,222,230,0.2)", border: "1px solid rgba(36,59,66,0.08)" }}
      >
        {/* Left side: Avatar and Info wrapper */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6 w-full md:w-auto">
          {/* Avatar Container */}
          <div
            className="relative w-20 h-20 rounded-full shrink-0"
            style={{ border: "3px solid #243B42", padding: "3px" }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              {user.image ? (
                <Image src={user.image} alt={user.name} fill className="object-cover" sizes="80px" />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-[24px] font-bold"
                  style={{ background: "#243B42", color: "#C5DEE6" }}
                >
                  {user.name?.charAt(0).toUpperCase() ?? "U"}
                </div>
              )}
            </div>
          </div>

          {/* User Meta Text */}
          <div className="flex flex-col items-center sm:items-start min-w-0 w-full">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-primary mb-1 wrap-break-words max-w-full line-clamp-1">
              {user.name}
            </h2>
            <p className="text-[13px] break-all max-w-full" style={{ color: "rgba(36,59,66,0.5)" }}>
              {user.email}
            </p>
            <span
              className="inline-flex items-center gap-1 mt-2 text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0"
              style={{ background: "rgba(36,59,66,0.08)", color: "#243B42" }}
            >
              <ShieldCheck size={11} /> Verified account
            </span>
          </div>
        </div>

        {/* Right side / Bottom centered: Edit Modal Trigger Button */}
        <div className="shrink-0 mt-2 md:mt-0">
          <UpdateProfileModal user={user}/>
        </div>
      </div>

      {/* Account Details Box */}
      <div
        className="rounded-[20px] p-5 sm:p-7"
        style={{ background: "#fff", border: "1px solid rgba(36,59,66,0.08)" }}
      >
        <h3 className="text-[13px] font-bold uppercase tracking-[0.07em] text-primary mb-5">
          Account Details
        </h3>
        <div className="flex flex-col gap-4">
          {infoRows.map((row, i) => (
            <div key={i} className="flex items-center gap-4 min-w-0">
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(36,59,66,0.07)", color: "#243B42" }}
              >
                {row.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px]" style={{ color: "rgba(13,13,13,0.4)" }}>{row.label}</p>
                <p className="text-[13px] font-medium text-primary break-all sm:break-normal truncate hover:text-clip">
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;