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

}

export const updateBookings = (id) => {
  console.log('update bookings by ',id);
}

export const deleteBookings = (id) => {
  console.log('update bookings by ',id);
}
