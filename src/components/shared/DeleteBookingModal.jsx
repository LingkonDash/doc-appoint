"use client";

import { handleDeleteBooking } from '@/lib/formFunctions';
import { AlertDialog, Button } from '@heroui/react';
import { Trash2, AlertTriangle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteBookingModal = ({ booking }) => {
  const router = useRouter();
  const { _id, doctorName, patientName } = booking || {};

  return (
    <AlertDialog>
      
      <Button
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-medium transition-all cursor-pointer"
        style={{
          background: "rgba(220,38,38,0.08)",
          color: "#dc2626",
          border: "1px solid rgba(220,38,38,0.15)",
        }}
      >
        <Trash2 size={13} /> Cancel
      </Button>

      <AlertDialog.Backdrop
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(13,13,13,0.45)", backdropFilter: "blur(4px)" }}
      >
        <AlertDialog.Container placement="auto">
          <AlertDialog.Dialog className="w-full max-w-105 rounded-[24px] overflow-hidden shadow-2xl"
            style={{ background: "#fff", border: "1px solid rgba(36,59,66,0.1)" }}
          >
            {({ close }) => (
              <>
              
                <div
                  className="relative px-7 pt-7 pb-6"
                  style={{ background: "rgba(220,38,38,0.04)", borderBottom: "1px solid rgba(220,38,38,0.08)" }}
                >
                  
                  <button
                    onClick={close}
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    style={{ background: "rgba(36,59,66,0.07)", color: "#243B42" }}
                  >
                    <X size={15} />
                  </button>


                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(220,38,38,0.1)", color: "#dc2626" }}
                    >
                      <AlertTriangle size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <AlertDialog.Heading
                        className="text-[17px] font-bold leading-tight"
                        style={{ color: "#243B42" }}
                      >
                        Cancel Appointment
                      </AlertDialog.Heading>
                      <p className="text-[12px] mt-0.5" style={{ color: "rgba(36,59,66,0.5)" }}>
                        This action cannot be undone
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="px-7 py-6">
                  <AlertDialog.Body>
                    <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(13,13,13,0.6)" }}>
                      You are about to permanently delete the appointment for{" "}
                      <strong className="font-semibold text-primary">{patientName}</strong>{" "}
                      with{" "}
                      <span className="font-semibold" style={{ color: "#243B42" }}>{doctorName}</span>.
                    </p>


                    <div
                      className="rounded-[14px] px-4 py-3.5 flex flex-col gap-2"
                      style={{
                        background: "rgba(197,222,230,0.2)",
                        border: "1px solid rgba(36,59,66,0.08)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.06em]"
                          style={{ color: "rgba(36,59,66,0.45)" }}>
                          Patient
                        </span>
                        <span className="text-[12px] font-medium text-primary">{patientName}</span>
                      </div>
                      <div
                        className="h-px"
                        style={{ background: "rgba(36,59,66,0.07)" }}
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.06em]"
                          style={{ color: "rgba(36,59,66,0.45)" }}>
                          Doctor
                        </span>
                        <span className="text-[12px] font-medium text-primary">{doctorName}</span>
                      </div>
                    </div>
                  </AlertDialog.Body>
                </div>

                <div
                  className="px-7 pb-7 flex gap-3"
                  style={{ borderTop: "1px solid rgba(36,59,66,0.07)" }}
                >
                  <Button
                    onClick={close}
                    className="flex-1 py-2.5 rounded-xl text-[13px] font-medium transition-colors cursor-pointer mt-4"
                    style={{
                      background: "rgba(36,59,66,0.07)",
                      color: "#243B42",
                      border: "1px solid rgba(36,59,66,0.12)",
                    }}
                  >
                    Keep It
                  </Button>
                  <Button
                    onClick={() => handleDeleteBooking(close, _id, router)}
                    className="flex-1 py-2.5 rounded-xl text-[13px] font-semibold transition-opacity hover:opacity-90 cursor-pointer mt-4"
                    style={{ background: "#dc2626", color: "#fff" }}
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      <Trash2 size={13} /> Yes, Delete
                    </span>
                  </Button>
                </div>
              </>
            )}
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteBookingModal;