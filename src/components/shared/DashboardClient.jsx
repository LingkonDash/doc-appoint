"use client";

import React, { useState } from "react";
import { Stethoscope } from "lucide-react";
import BookingCards from "./BookingCards";
import Profile from "./Profile";

const TAB_BOOKINGS = "bookings";
const TAB_PROFILE = "profile";

const DashboardClient = ({ bookings, user }) => {
  const [tab, setTab] = useState(TAB_BOOKINGS);

  const tabToggles = [
    { key: TAB_BOOKINGS, label: "My Bookings" },
    { key: TAB_PROFILE, label: "My Profile" },
  ]

  return (
    <div>
      {/* Tabs */}
      <div className="inline-flex gap-2 p-1 rounded-xl mb-8"
        style={{ background: "rgba(197,222,230,0.2)", border: "1px solid rgba(36,59,66,0.08)" }}
      >
        {tabToggles.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 cursor-pointer border ${tab === t.key ? 'bg-primary text-secondary border-primary':'bg-transparent text-[rgba(36,59,66,0.55)] border-[rgba(36,59,66,0.15)]'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === TAB_BOOKINGS && (
        <div>
          {bookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-2">
              <Stethoscope size={32} style={{ color: "rgba(36,59,66,0.2)" }} />
              <p className="text-[14px] font-medium text-primary">No bookings yet</p>
              <p className="text-[12px]" style={{ color: "rgba(13,13,13,0.4)" }}>
                Your appointments will appear here after booking.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {bookings.map((b) => (
                <BookingCards key={b._id} booking={b} />
              ))}
            </div>
          )}
        </div>
      )}

      {tab === TAB_PROFILE && <Profile user={user} />}
    </div>
  );
};

export default DashboardClient;