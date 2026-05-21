// get bookings by userid
export const getBookings = async (uid) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${uid}`);

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

// add bookings 
export const postBookings = async (bookingData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    });

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

// update bookings
export const updateBookings = async (id, updatedBooking) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBooking)
    });

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

// delete bookings
export const deleteBookings = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`, {
      method: 'DELETE',
    });

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