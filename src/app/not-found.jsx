import Link from "next/link";
import { Stethoscope, MoveLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-10 text-center">

      <div
        className="absolute text-[200px] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(197,222,230,0.35)", zIndex: 0 }}
      >
        404
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5">

        <div
          className="w-20 h-20 rounded-[22px] flex items-center justify-center mb-2"
          style={{ background: "rgba(197,222,230,0.25)", border: "1px solid rgba(36,59,66,0.1)" }}
        >
          <Stethoscope size={36} style={{ color: "#243B42" }} />
        </div>

        <p
          className="text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "rgba(36,59,66,0.45)" }}
        >
          Page not found
        </p>

        <h1 className="text-[32px] font-bold text-primary leading-tight max-w-95">
          This page does not exist
        </h1>

        <p
          className="text-[14px] leading-relaxed max-w-85"
          style={{ color: "rgba(13,13,13,0.5)" }}
        >
          The page you are looking for may have been moved, deleted, or never existed.
          Lets get you back on track.
        </p>

        <div
          className="w-12 h-px my-1"
          style={{ background: "rgba(36,59,66,0.15)" }}
        />

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#243B42", color: "#C5DEE6" }}
          >
            <MoveLeft size={15} /> Back to Home
          </Link>

          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-medium transition-colors"
            style={{
              background: "rgba(197,222,230,0.25)",
              color: "#243B42",
              border: "1px solid rgba(36,59,66,0.12)",
            }}
          >
            <Stethoscope size={15} /> Find Doctors
          </Link>
        </div>

      </div>
    </main>
  );
};

export default NotFound;