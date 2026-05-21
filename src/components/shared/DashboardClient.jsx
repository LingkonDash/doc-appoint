"use client";

import React, { useState } from "react";
import { Stethoscope } from "lucide-react";
import BookingCards from "./BookingCards";
import Profile from "./Profile";
// Import motion and AnimatePresence
import { motion, AnimatePresence } from "framer-motion";

const TAB_BOOKINGS = "bookings";
const TAB_PROFILE = "profile";

const DashboardClient = ({ bookings, user }) => {
  const [tab, setTab] = useState(TAB_BOOKINGS);

  const tabToggles = [
    { key: TAB_BOOKINGS, label: "My Bookings" },
    { key: TAB_PROFILE, label: "My Profile" },
  ];

  return (
    <div>
      {/* ── Tabs Bar ── */}
      <div 
        className="inline-flex gap-2 p-1 rounded-xl mb-8 relative"
        style={{ background: "rgba(197,222,230,0.2)", border: "1px solid rgba(36,59,66,0.08)" }}
      >
        {tabToggles.map((t) => {
          const isActive = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="px-5 py-2 rounded-lg text-[13px] font-medium transition-colors duration-200 cursor-pointer relative"
              style={{
                color: isActive ? "#C5DEE6" : "rgba(36,59,66,0.55)",
              }}
            >
              {/* Text indicator wrapper to keep text sitting cleanly above the moving capsule background */}
              <span className="relative z-10">{t.label}</span>

              {/* The magical sliding background capsule */}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator" // Magic link: connects the items across re-renders
                  className="absolute inset-0 bg-primary rounded-lg z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Tab Content Container with Screen Cross-Fades ── */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {tab === TAB_BOOKINGS ? (
            <motion.div
              key="bookings-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="profile-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Profile user={user} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DashboardClient;