import getAppointments from '@/lib/api/getAppointments';
import React from 'react';

const AppointmentsPage = async () => {

  const data = await getAppointments()

  console.log(data);

  return (
    <div>
      <h1>Appointments will be here</h1>

      <div>
        total appointments: {data.data.length}
      </div>
    </div>
  );
};

export default AppointmentsPage;