
const getAppointments = async () => {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`);

    if (!res.ok) {
      return {
        success: false,
        status: res.status,
        message: res.statusText,
      };
    }

    const data = await res.json();

    return {
      success: true,
      data,
    };

  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error.message,
    };
  }
};

export default getAppointments;