import { deleteBookings, postBookings, updateBookings } from "./api/bookingApi";
import { authClient } from "./auth-client";
import { toast } from "react-toastify";

// google login
export const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: process.env.NEXT_PUBLIC_BASE_URL,
  });
};

//login
export const onLoginSubmit = async (e, router) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const { email, password } = Object.fromEntries(formData.entries());

  const { data, error } = await authClient.signIn.email({
    email,
    password,
    callbackURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  if (error) {
    toast.error(error.message || "Login failed. Please try again.");
    return;
  }

  toast.success("Logged in successfully! Redirecting...");
  setTimeout(() => {
    router.push("/")
    router.refresh();
  }, 700);
};


// signup
export const onSignupSubmit = async (e, router) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const { name, email, password, image } = Object.fromEntries(formData.entries());

  const { data, error } = await authClient.signUp.email({
    name,
    email,
    password,
    image,
    callbackURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  if (error) {
    toast.error(error.message || "Signup failed. Please try again.");
    return;
  }

  toast.success("Registered successfully! Redirecting to login...");
  setTimeout(() => {
    router.push("/login")
    router.refresh()
  }, 700);
};

export const handleBookingSubmit = async (e, close, token) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const bookingData = Object.fromEntries(formData.entries());

  // calling api to post bookings
  const res = await postBookings(bookingData, token);

  if (!res.success) {
    toast.error(`${res.message || 'Something went wrong'}! please try again..`);
    return;
  }

  toast.success(`Appointment successfully booked with ${bookingData.doctorName}!`);
  close();
};

// booking update
export const handleUpdateBooking = async (e, close, id, router, token) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const updatedBooking = Object.fromEntries(formData.entries());


  // calling api to update bookings
  const res = await updateBookings(id, updatedBooking, token);

  if (!res.success) {
    toast.error(`${res.message || 'Failed to update'}! please try again..`);
    return;
  }

  if (router) router.refresh();

  toast.success(
    `${updatedBooking.doctorName ? `Appointment with ${updatedBooking.doctorName} updated successfully!` : "Appointment updated successfully!"}`
  );

  if (close) close();
};

// booking delete
export const handleDeleteBooking = async (close, id, router, token) => {
  // calling api to delete bookings
  const res = await deleteBookings(id, token);

  if (!res.success) {
    toast.error(`${res.message || 'Failed to cancel'}! please try again..`);
    return;
  }

  if (router) router.refresh();

  toast.success("Appointment canceled successfully!");

  if (close) close();
};


//profile update
export const handleUpdateProfile = async (e, router) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const updatedUserData = Object.fromEntries(formData.entries());

  console.log(updatedUserData);

  await authClient.updateUser(updatedUserData)

  router.refresh();

  toast.success('profile updated successfully')
}