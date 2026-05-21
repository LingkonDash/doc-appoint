import DashboardClient from '@/components/shared/DashboardClient';
import { getBookings } from '@/lib/api/bookingApi';
import { auth } from '@/lib/auth';
import getJwtToken from '@/lib/getJwtToken';
import { headers } from 'next/headers';

export const metadata = {
  title: "Dashboard - Doc Appointment",
};

const DashboardPage = async () => {

  const session = await auth.api.getSession({ headers: await headers() })

  const token = await getJwtToken();

  const res = await getBookings(session?.user?.id, token);

  if (!res.success) {
    return <div className='my-20 text-center text-red-400 '>something went wrong! error message : <strong>{res.message}</strong></div>
  }

  const bookings = res?.data;

  const user = session?.user;


  return (
    <div className='bg-secondary/10'>
      <div className="max-w-250 mx-auto px-10 py-14">
        <div className="mb-8">
          <p
            className="text-[11px] font-bold uppercase tracking-widest mb-2"
            style={{ color: "rgba(36,59,66,0.5)" }}
          >
            Your account
          </p>
          <h1 className="text-[30px] font-bold text-primary">Dashboard</h1>
        </div>
        <DashboardClient bookings={bookings} user={user} token={token} />
      </div>
    </div>
  );
};

export default DashboardPage;