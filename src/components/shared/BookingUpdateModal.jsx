"use client";

import { handleUpdateBooking } from "@/lib/formFunctions";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
  Select,
  ListBox,
  FieldError,
} from "@heroui/react";

import {
  Pencil,
  User,
  Mail,
  Calendar,
  Clock,
  FileText,
  ChevronDown,
  Droplets,
  HeartPulse,
} from "lucide-react";

import React from "react";

export default function BookingUpdateModal({ booking }) {
  const {
    _id,
    doctorName,
    userEmail,
    patientName,
    gender,
    bloodGroup,
    phone,
    appointmentDate,
    appointmentTime,
    reason,
  } = booking || {};

  const fieldClasses = "flex flex-col gap-1 w-full";

  const labelClasses =
    "text-[11px] font-bold uppercase tracking-wider text-primary/75 ml-0.5";

  const inputWrapperClasses =
    "[&_input]:bg-[#F4F8F9] [&_input]:border [&_input]:border-slate-200/80 [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-2.5 [&_input]:text-sm [&_input]:text-slate-800 [&_input]:placeholder-slate-400/70 [&_input]:w-full [&_input]:transition-all [&_input:focus]:border-primary [&_input:focus]:bg-white [&_input:focus]:outline-none";

  const handleFormSubmit = async (e, close) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedBooking = Object.fromEntries(formData.entries());

    console.log(booking)
    console.log(UpdatedBooking)

    // await handleUpdateBooking(_id, updatedBooking, close);
  };

  return (
    <Modal>
      <Button
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-medium transition-all cursor-pointer hover:bg-slate-100"
        style={{
          background: "rgba(36,59,66,0.07)",
          color: "#243B42",
          border: "1px solid rgba(36,59,66,0.12)",
        }}
      >
        <span className="flex items-center justify-center gap-1.5">
          <Pencil size={13} /> Update
        </span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto" className="p-2 sm:p-4">
          <Modal.Dialog className="w-full max-h-[92vh] sm:max-w-xl bg-white rounded-2xl border border-slate-100 shadow-2xl text-slate-800 flex flex-col overflow-hidden">
            {({ close }) => (
              <>
                <Modal.CloseTrigger className="absolute right-4 top-4 text-slate-400 hover:text-primary transition-colors cursor-pointer z-50" />

                <Modal.Header className="pt-6 px-6 pb-3 shrink-0 bg-linear-to-b from-slate-50/50 to-white">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                      <HeartPulse size={18} />
                    </div>

                    <Modal.Heading className="text-lg font-extrabold text-primary tracking-tight">
                      Review & Modify Details
                    </Modal.Heading>
                  </div>

                  <div className="mt-3 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-center text-slate-500 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="flex items-center gap-1">
                      <User size={13} className="text-slate-400" />
                      Doctor:{" "}
                      <strong className="text-primary">{doctorName}</strong>
                    </span>

                    <span className="hidden sm:inline text-slate-300">|</span>

                    <span className="flex items-center gap-1">
                      <Mail size={13} className="text-slate-400" />
                      Account:{" "}
                      <span className="text-slate-600 truncate max-w-45">
                        {userEmail}
                      </span>
                    </span>
                  </div>
                </Modal.Header>

                <form
                  onSubmit={(e) => handleFormSubmit(e, close)}
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  <Modal.Body className="px-6 py-3 flex flex-col gap-4 overflow-y-auto flex-1 base-scrollbar">

                    {/* Patient Name */}
                    <TextField
                      isRequired
                      name="patientName"
                      defaultValue={patientName || ""}
                      className={fieldClasses}
                    >
                      <Label className={labelClasses}>
                        Patient Name
                      </Label>

                      <div className={inputWrapperClasses}>
                        <Input placeholder="Enter patient's full name" />
                      </div>

                      <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                    </TextField>

                    {/* Gender + Blood */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      {/* Gender View Only */}
                      <TextField
                        isReadOnly
                        name="gender"
                        value={gender || ""}
                        className={`${fieldClasses} cursor-not-allowed`}
                      >
                        <Label className={labelClasses}>
                          Gender Identity
                        </Label>

                        <div className={inputWrapperClasses}>
                          <Input className="cursor-not-allowed" />
                        </div>
                        <p className="text-xs text-red-500 opacity-70 mt-1 ml-1 cursor-default select-none">
                          View-only information
                        </p>
                      </TextField>

                      {/* Blood Group View Only */}
                      <TextField
                        isReadOnly
                        name="bloodGroup"
                        value={bloodGroup || ""}
                        className={`${fieldClasses} cursor-not-allowed`}
                      >
                        <div className="flex items-center gap-1 ml-0.5">
                          <Droplets size={12} className="text-primary/60" />

                          <Label className={labelClasses}>
                            Blood Group
                          </Label>
                        </div>

                        <div className={inputWrapperClasses}>
                          <Input className="cursor-not-allowed" />
                        </div>
                        <p className="text-xs text-red-500 opacity-70 mt-1 ml-1 cursor-default select-none">
                          View-only information
                        </p>
                      </TextField>
                    </div>

                    {/* Phone */}
                    <TextField
                      isRequired
                      name="phone"
                      type="tel"
                      defaultValue={phone || ""}
                      className={fieldClasses}
                      validate={(value) => {
                        const bdPhoneRegex =
                          /^(?:\+88)?01[3-9]\d{8}$/;

                        if (!value) {
                          return "Phone number is required";
                        }

                        if (!bdPhoneRegex.test(value)) {
                          return "Enter a valid Bangladeshi phone number";
                        }

                        return null;
                      }}
                    >
                      <Label className={labelClasses}>
                        Contact Number
                      </Label>

                      <div className={inputWrapperClasses}>
                        <Input
                          placeholder="01XXXXXXXXX"
                          maxLength={14}
                        />
                      </div>

                      <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                    </TextField>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      <TextField
                        isRequired
                        name="appointmentDate"
                        type="date"
                        defaultValue={appointmentDate || ""}
                        className={fieldClasses}
                      >
                        <div className="flex items-center gap-1 ml-0.5">
                          <Calendar
                            size={12}
                            className="text-primary/60"
                          />

                          <Label className={labelClasses}>
                            Scheduled Date
                          </Label>
                        </div>

                        <div className={inputWrapperClasses}>
                          <Input />
                        </div>

                        <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                      </TextField>

                      <TextField
                        isRequired
                        name="appointmentTime"
                        type="time"
                        defaultValue={appointmentTime || ""}
                        className={fieldClasses}
                      >
                        <div className="flex items-center gap-1 ml-0.5">
                          <Clock
                            size={12}
                            className="text-primary/60"
                          />

                          <Label className={labelClasses}>
                            Scheduled Time
                          </Label>
                        </div>

                        <div className={inputWrapperClasses}>
                          <Input />
                        </div>

                        <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                      </TextField>
                    </div>

                    {/* Reason */}
                    <TextField
                      name="reason"
                      defaultValue={reason || ""}
                      className={fieldClasses}
                    >
                      <div className="flex items-center gap-1 ml-0.5">
                        <FileText
                          size={12}
                          className="text-primary/60"
                        />

                        <Label className={labelClasses}>
                          Reason for Visit / Symptoms
                        </Label>
                      </div>

                      <div className={inputWrapperClasses}>
                        <Input placeholder="Update symptoms or reason for visiting" />
                      </div>
                    </TextField>

                  </Modal.Body>

                  <Modal.Footer className="p-4 sm:p-5 bg-slate-50/80 rounded-b-2xl flex justify-end gap-3 border-t border-slate-100 shrink-0">

                    <Button
                      type="button"
                      onClick={close}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer"
                    >
                      Keep Current
                    </Button>

                    <Button
                      type="submit"
                      className="py-2.5 px-6 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer bg-primary text-white shadow-sm"
                    >
                      Apply Changes
                    </Button>

                  </Modal.Footer>
                </form>
              </>
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}