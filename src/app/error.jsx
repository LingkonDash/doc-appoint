"use client";

import { useEffect } from "react";
import { MoveLeft, RefreshCw, TriangleAlert } from "lucide-react";
import Link from "next/link";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-10 text-center">

      <div
        className="absolute text-[180px] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(220,38,38,0.06)", zIndex: 0 }}
      >
        ERR
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5">

        <div
          className="w-20 h-20 rounded-[22px] flex items-center justify-center mb-2"
          style={{
            background: "rgba(220,38,38,0.07)",
            border: "1px solid rgba(220,38,38,0.12)",
          }}
        >
          <TriangleAlert size={36} style={{ color: "#dc2626" }} />
        </div>

        <p
          className="text-[11px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "rgba(36,59,66,0.45)" }}
        >
          Something went wrong
        </p>

        <h1 className="text-[30px] font-bold text-primary leading-tight max-w-95">
          An unexpected error occurred
        </h1>

        <p
          className="text-[14px] leading-relaxed max-w-90"
          style={{ color: "rgba(13,13,13,0.5)" }}
        >
          We are sorry — something on our end went wrong. You can try again or head
          back to the homepage.
        </p>


        {error?.message && (
          <div
            className="px-4 py-2.5 rounded-xl text-[12px] font-mono max-w-95 text-left"
            style={{
              background: "rgba(220,38,38,0.05)",
              border: "1px solid rgba(220,38,38,0.1)",
              color: "#dc2626",
            }}
          >
            {error.message}
          </div>
        )}

        <div
          className="w-12 h-px my-1"
          style={{ background: "rgba(36,59,66,0.15)" }}
        />

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold transition-opacity hover:opacity-90 cursor-pointer"
            style={{ background: "#243B42", color: "#C5DEE6" }}
          >
            <RefreshCw size={14} /> Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-medium transition-colors"
            style={{
              background: "rgba(197,222,230,0.25)",
              color: "#243B42",
              border: "1px solid rgba(36,59,66,0.12)",
            }}
          >
            <MoveLeft size={14} /> Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Error;