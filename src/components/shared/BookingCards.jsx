import { deleteBookings, updateBookings } from "@/lib/api/bookingApi";
import { Calendar, Clock, Droplets, FileText, Pencil, Phone, Trash2, User } from "lucide-react";



const BookingCards = ({ booking }) => {
  const { _id, doctorName, patientName, appointmentDate, appointmentTime, reason, gender, bloodGroup, phone } = booking;

  const detailsSteps = [
    { icon: <User size={13} />, label: "Patient", value: patientName },
    { icon: <Phone size={13} />, label: "Phone", value: phone },
    { icon: <Calendar size={13} />, label: "Date", value: appointmentDate },
    { icon: <Clock size={13} />, label: "Time", value: appointmentTime },
    { icon: <User size={13} />, label: "Gender", value: gender },
    { icon: <Droplets size={13} />, label: "Blood", value: bloodGroup },
  ]


  return (
    <div
      className="rounded-[20px] p-6 transition-shadow hover:shadow-md"
      style={{
        background: "#fff",
        border: "1px solid rgba(36,59,66,0.09)",
      }}
    >
      {/* Doctor name */}
      <h3 className="text-[16px] font-bold text-primary mb-4">{doctorName}</h3>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 mb-5">

        {detailsSteps.map((row, i) => (
          <div key={i} className="flex items-center gap-2">
            <span style={{ color: "rgba(36,59,66,0.4)" }}>{row.icon}</span>
            <span className="text-[12px]" style={{ color: "rgba(13,13,13,0.45)" }}>
              {row.label}:
            </span>
            <span className="text-[12px] font-medium text-primary">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Reason */}
      {reason && (
        <div
          className="flex items-start gap-2 px-3 py-2.5 rounded-xl mb-5 text-[12px]"
          style={{ background: "rgba(197,222,230,0.2)", color: "rgba(13,13,13,0.6)" }}
        >
          <FileText size={13} className="mt-px shrink-0" style={{ color: "#243B42" }} />
          {reason}
        </div>
      )}

      {/* Divider */}
      <div className="h-px mb-4" style={{ background: "rgba(36,59,66,0.07)" }} />

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => updateBookings(_id)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-medium transition-colors cursor-pointer"
          style={{
            background: "rgba(36,59,66,0.07)",
            color: "#243B42",
            border: "1px solid rgba(36,59,66,0.12)",
          }}
        >
          <Pencil size={13} /> Update
        </button>
        <button
          onClick={() => deleteBookings(_id)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-medium transition-colors cursor-pointer disabled:opacity-60"
          style={{
            background: "rgba(220,38,38,0.08)",
            color: "#dc2626",
            border: "1px solid rgba(220,38,38,0.15)",
          }}
        >
          <Trash2 size={13} /> Delete
        </button>
      </div>
    </div>
  );
};

export default BookingCards;