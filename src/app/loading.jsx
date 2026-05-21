import { Stethoscope } from "lucide-react";

const Loading = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">

      <div className="relative flex items-center justify-center">
        
        <span
          className="absolute w-20 h-20 rounded-full animate-ping"
          style={{ background: "rgba(197,222,230,0.3)" }}
        />
        <span
          className="absolute w-28 h-28 rounded-full animate-ping"
          style={{ background: "rgba(197,222,230,0.15)", animationDelay: "0.3s" }}
        />

        <div
          className="relative w-16 h-16 rounded-[18px] flex items-center justify-center z-10"
          style={{
            background: "#243B42",
            boxShadow: "0 8px 32px rgba(36,59,66,0.25)",
          }}
        >
          <Stethoscope size={28} color="#C5DEE6" />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1.5">
        <p className="text-[15px] font-semibold text-primary">
          DocAppoint
        </p>
        <p
          className="text-[12px]"
          style={{ color: "rgba(36,59,66,0.45)" }}
        >
          Loading, please wait…
        </p>
      </div>

      <div
        className="w-40 h-1 rounded-full overflow-hidden"
        style={{ background: "rgba(197,222,230,0.3)" }}
      >
        <div
          className="h-full rounded-full animate-pulse"
          style={{ background: "#243B42", width: "60%" }}
        />
      </div>

    </main>
  );
};

export default Loading;