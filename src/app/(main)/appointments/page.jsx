import SearchDoctors from "@/components/home/SearchDoctors";
import getAppointments from "@/lib/api/getAppointments";

const AppointmentsPage = async () => {
  const data = await getAppointments();
  const appointments = data.data;

  return (
    <section className="min-h-screen">

      {/* ── Page hero banner ── */}
      <div className="py-14 px-10 text-center">
        <p
          className="text-[11px] font-bold uppercase tracking-widest mb-3"
          style={{ color: "rgba(36,59,66,0.5)" }}
        >
          Browse specialists
        </p>
        <h1 className="text-[32px] font-bold text-primary mb-3 leading-tight">
          All Appointments
        </h1>
        <p
          className="text-[14px] max-w-115 mx-auto leading-relaxed"
          style={{ color: "rgba(13,13,13,0.5)" }}
        >
          Search from our network of verified specialists and book an appointment
          that fits your schedule.
        </p>
      </div>

      {/* ── Search + grid ── */}
      {
        !data.success ? <div className='text-center py-10 text-red-400 '>Something went wrong while fetching featured data please contact support... <br /> error message: <span className='font-medium'>{`{ ${data.message} }`}</span></div>
          :
          <div className="px-10 max-w-350 mx-auto pb-20">
            <SearchDoctors initialData={appointments} />
          </div>
      }

    </section>
  );
};

export default AppointmentsPage;