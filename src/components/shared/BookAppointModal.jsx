"use client";

import { handleBookingSubmit } from "@/lib/formFunctions";
import { Button, Input, Label, Modal, TextField, Select, ListBox, FieldError } from "@heroui/react";
import { CalendarCheck, User, Mail, Phone, Calendar, Clock, FileText, ChevronDown, Droplets } from "lucide-react";
import React from "react";

export default function BookAppointModal({ doctorName, doctorId, userEmail, userID }) {

  const fieldClasses = "flex flex-col gap-1 w-full";
  const labelClasses = "text-[11px] font-bold uppercase tracking-wider text-primary/80 ml-1";
  const inputWrapperClasses = "[&_input]:bg-[#F4F8F9] [&_input]:border [&_input]:border-slate-200/80 [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-2.5 [&_input]:text-sm [&_input]:text-slate-800 [&_input]:placeholder-slate-400/70 [&_input]:w-full [&_input]:transition-all [&_input:focus]:border-primary [&_input:focus]:bg-white [&_input:focus]:outline-none";
  const readonlyWrapperClasses = "[&_input]:bg-[#EBF3F6] [&_input]:border [&_input]:border-slate-200/50 [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-2.5 [&_input]:text-sm [&_input]:text-primary/70 [&_input]:w-full [&_input]:cursor-not-allowed";

  return (
    <Modal>
      <Button
        className="w-full py-3.5 rounded-xl text-[14px] font-semibold transition-opacity hover:opacity-90 cursor-pointer bg-primary text-secondary"
      >
        <span className="flex items-center justify-center gap-2">
          <CalendarCheck size={16} /> Book Appointment
        </span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto" className="p-2 sm:p-4">
          <Modal.Dialog className="w-full max-h-[92vh] sm:max-w-xl bg-white rounded-2xl border border-slate-100 shadow-2xl text-slate-800 flex flex-col overflow-hidden">
            {({ close }) => (
              <>
                <Modal.CloseTrigger className="absolute right-4 top-4 text-slate-400 hover:text-primary transition-colors cursor-pointer z-50" />

                <Modal.Header className="pt-6 px-6 pb-2 shrink-0">
                  <Modal.Heading className="text-xl font-extrabold text-primary">Book Appointment</Modal.Heading>
                  <p className="mt-1 text-sm text-slate-500 font-medium">
                    With <span className="text-primary font-semibold underline underline-offset-2">{doctorName}</span>
                  </p>
                </Modal.Header>

                <form onSubmit={(e) => handleBookingSubmit(e, close)} className="flex flex-col flex-1 overflow-hidden">

                  <input type="hidden" name="doctorId" value={doctorId || ""} />
                  <input type="hidden" name="userID" value={userID || ""} />
                  <input type="hidden" name="doctorName" value={doctorName || ""} />
                  <input type="hidden" name="userEmail" value={userEmail || ""} />

                  {/* Body area takes dynamic main space with scroll capabilities */}
                  <Modal.Body className="px-6 py-4 flex flex-col gap-4 overflow-y-auto flex-1 base-scrollbar">

                    {/* ReadOnly Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <TextField isReadOnly className={fieldClasses}>
                        <div className="flex items-center gap-1 ml-1">
                          <Mail size={12} className="text-primary/60" />
                          <Label className={labelClasses}>User Email (Verified)</Label>
                        </div>
                        <div className={readonlyWrapperClasses}>
                          <Input value={userEmail || ""} />
                        </div>
                      </TextField>

                      <TextField isReadOnly className={fieldClasses}>
                        <div className="flex items-center gap-1 ml-1">
                          <User size={12} className="text-primary/60" />
                          <Label className={labelClasses}>Doctor Name</Label>
                        </div>
                        <div className={readonlyWrapperClasses}>
                          <Input value={doctorName || ""} />
                        </div>
                      </TextField>
                    </div>

                    {/* Patient Name input */}
                    <TextField isRequired name="patientName" className={fieldClasses}>
                      <Label className={labelClasses}>Patient Name *</Label>
                      <div className={inputWrapperClasses}>
                        <Input placeholder="Enter patient's full name" />
                      </div>
                      <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                    </TextField>

                    {/* Gender & Blood Group Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Select isRequired name="gender" className={fieldClasses} placeholder="Select gender">
                        <Label className={labelClasses}>Gender *</Label>
                        <Select.Trigger className="flex items-center justify-between bg-[#F4F8F9] border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-slate-800 transition-all text-left focus:border-primary focus:bg-white focus:outline-none">
                          <Select.Value />
                          <Select.Indicator>
                            <ChevronDown size={14} className="text-slate-400" />
                          </Select.Indicator>
                        </Select.Trigger>
                        <Select.Popover className="bg-white border border-slate-100 rounded-xl shadow-xl z-50">
                          <ListBox className="p-1 text-sm text-slate-700">
                            <ListBox.Item id="Male" textValue="Male" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">Male</ListBox.Item>
                            <ListBox.Item id="Female" textValue="Female" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">Female</ListBox.Item>
                            <ListBox.Item id="Other" textValue="Other" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">Other</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                        <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                      </Select>

                      <Select isRequired name="bloodGroup" className={fieldClasses} placeholder="Select blood group">
                        <div className="flex items-center gap-1 ml-1">
                          <Droplets size={12} className="text-primary/60" />
                          <Label className={labelClasses}>Blood Group *</Label>
                        </div>
                        <Select.Trigger className="flex items-center justify-between bg-[#F4F8F9] border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-slate-800 transition-all text-left focus:border-primary focus:bg-white focus:outline-none">
                          <Select.Value />
                          <Select.Indicator>
                            <ChevronDown size={14} className="text-slate-400" />
                          </Select.Indicator>
                        </Select.Trigger>
                        <Select.Popover className="bg-white border border-slate-100 rounded-xl shadow-xl z-50">
                          <ListBox className="p-1 text-sm text-slate-700">
                            <ListBox.Item id="A+" textValue="A+" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">A+</ListBox.Item>
                            <ListBox.Item id="A-" textValue="A-" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">A-</ListBox.Item>
                            <ListBox.Item id="B+" textValue="B+" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">B+</ListBox.Item>
                            <ListBox.Item id="B-" textValue="B-" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">B-</ListBox.Item>
                            <ListBox.Item id="O+" textValue="O+" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">O+</ListBox.Item>
                            <ListBox.Item id="O-" textValue="O-" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">O-</ListBox.Item>
                            <ListBox.Item id="AB+" textValue="AB+" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">AB+</ListBox.Item>
                            <ListBox.Item id="AB-" textValue="AB-" className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">AB-</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                        <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                      </Select>
                    </div>

                    {/* Phone Input Field */}
                    <TextField
                      isRequired
                      name="phone"
                      type="tel"
                      className={fieldClasses}
                      validate={(value) => {
                        const bdPhoneRegex = /^(?:\+88)?01[3-9]\d{8}$/;
                        if (!value) return "Phone number is required";
                        if (!bdPhoneRegex.test(value)) return "Enter a valid Bangladeshi phone number";
                        return null;
                      }}
                    >
                      <div className="flex items-center gap-1 ml-1">
                        <Phone size={12} className="text-primary/60" />
                        <Label className={labelClasses}>Phone Number *</Label>
                      </div>
                      <div className={inputWrapperClasses}>
                        <Input placeholder="01XXXXXXXXX" maxLength={14} />
                      </div>
                      <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                    </TextField>

                    {/* Appointment Date & Time Picker */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <TextField isRequired name="appointmentDate" type="date" className={fieldClasses}>
                        <div className="flex items-center gap-1 ml-1">
                          <Calendar size={12} className="text-primary/60" />
                          <Label className={labelClasses}>Preferred Date *</Label>
                        </div>
                        <div className={inputWrapperClasses}>
                          <Input />
                        </div>
                        <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                      </TextField>

                      <TextField isRequired name="appointmentTime" type="time" className={fieldClasses}>
                        <div className="flex items-center gap-1 ml-1">
                          <Clock size={12} className="text-primary/60" />
                          <Label className={labelClasses}>Preferred Time *</Label>
                        </div>
                        <div className={inputWrapperClasses}>
                          <Input />
                        </div>
                        <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                      </TextField>
                    </div>

                    {/* Reason Input field */}
                    <TextField name="reason" className={fieldClasses}>
                      <div className="flex items-center gap-1 ml-1">
                        <FileText size={12} className="text-primary/60" />
                        <Label className={labelClasses}>Reason (Optional)</Label>
                      </div>
                      <div className={inputWrapperClasses}>
                        <Input placeholder="Briefly describe your symptoms or visit reasons" />
                      </div>
                    </TextField>

                  </Modal.Body>

                  <Modal.Footer className="p-4 sm:p-5 bg-slate-50 rounded-b-2xl flex justify-end gap-3 border-t border-slate-100 shrink-0">
                    <Button
                      type="button"
                      onClick={close}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="py-2.5 px-5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 cursor-pointer bg-primary text-surface"
                    >
                      Confirm Booking
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