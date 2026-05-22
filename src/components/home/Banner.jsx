"use client";

import React from "react";
import PrimaryButton from "../reusables/PrimaryButton";
import SecondaryButton from "../reusables/SecondaryButton";
import { CalendarCheck, Search, ShieldCheck, HeartPulse, Users, Stethoscope, Activity } from "lucide-react";
import { Separator } from "@heroui/react";
import Image from "next/image";
import avatar from "@/images/avatar.png";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  const slides = [
    {
      icon: <HeartPulse />,
      title: "Trusted Healthcare Network",
      desc: "Connect with verified specialists across multiple medical fields."
    },
    {
      icon: <ShieldCheck />,
      title: "Secure Medical Records",
      desc: "Your health data is encrypted and fully protected."
    },
    {
      icon: <Users />,
      title: "10,000+ Patients Served",
      desc: "Join thousands who improved their health with us."
    },
    {
      icon: <CalendarCheck />,
      title: "Instant Appointment Booking",
      desc: "Book doctors without waiting or complicated steps."
    },
    {
      icon: <Stethoscope />,
      title: "Expert Specialists",
      desc: "Find highly experienced doctors in every specialty."
    },
    {
      icon: <Activity />,
      title: "Real-time Health Tracking",
      desc: "Monitor your progress and stay updated anytime."
    }
  ];

  return (
    <div className="overflow-hidden">

      <div className="pt-10 bg-linear-to-t from-secondary to-white text-primary px-5 md:px-10 lg:px-15">
        <div className="grid md:grid-cols-2 max-w-380 mx-auto">

          <motion.div
            className="space-y-6 pb-5 place-self-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-5xl lg:text-6xl font-medium leading-none">
                Your Health <br />
                Deserves the right specialist
              </h1>

              <p className="text-lg lg:text-xl font-medium text-primary/70">
                Connect with top rated doctors who listen and prioritize your
                health journey
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4">
              <PrimaryButton href={"/appointments"} className="py-6">
                <div className="flex items-center gap-2">
                  <Search />
                  Find A Doctor
                </div>
              </PrimaryButton>

              <SecondaryButton href={"/dashboard"} className="py-6">
                <div className="flex items-center gap-2">
                  <CalendarCheck />
                  My Bookings
                </div>
              </SecondaryButton>
            </div>

            <div className="flex lg:pr-20 justify-center md:justify-start items-center text-center gap-2 text-primary/90 [&_h2]:font-semibold [&_p]:text-primary/70 [&_p]:text-[14px]">
              <div>
                <h2>Free checkup</h2>
                <p>Comprehensive evaluation with no upfront cost.</p>
              </div>

              <Separator orientation="vertical" variant="tertiary" />

              <div>
                <h2>Custom Treatment</h2>
                <p>Personalized care for your recovery journey.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto w-fit place-self-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <Image
              src={avatar}
              alt="Doctor Natasha"
              height={700}
              width={700}
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 px-5 md:px-10 lg:px-15 border-t border-primary/10">
        <div className="max-w-380 mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary">
              Why Choose Our Platform
            </h2>
            <p className="text-primary/60 mt-2">
              Everything you need for better healthcare in one place
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full p-6 rounded-2xl bg-secondary/30 border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 text-primary">
                    {item.icon}
                    <h3 className="font-semibold text-[16px]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-primary/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

    </div>
  );
};

export default Banner;