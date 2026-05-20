import { postBookings } from "./api/bookingApi";
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
  setTimeout(() => router.push("/"), 1000);
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
  setTimeout(() => router.push("/login"), 1000);
};


export const handleBookingSubmit = async (e, close) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const bookingData = Object.fromEntries(formData.entries());

  console.log("Finalized Booking Object Data:", bookingData);

  // calling api to post bookings

  const res = await postBookings(bookingData);

  console.log(res);

  if(!res.success) {
    toast.error(`${res.message}! please try again..`);
    return;
  }

  toast.success(`Appointment successfully booked with ${bookingData.doctorName}!`);
  close();
};
