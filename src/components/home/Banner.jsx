"use client";

import React from "react";
import PrimaryButton from "../reusables/PrimaryButton";
import SecondaryButton from "../reusables/SecondaryButton";
import { CalendarCheck, Search } from "lucide-react";
import { Separator } from "@heroui/react";
import Image from "next/image";
import avatar from "@/images/avatar.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="pt-10 bg-linear-to-t from-secondary to-white text-primary px-5 md:px-10 lg:px-15 overflow-hidden">
      <div className="grid md:grid-cols-2 max-w-380 mx-auto">

        {/* Left Column */}
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
              <div className="flex justify-center items-center gap-2">
                <Search />
                Find A Doctor
              </div>
            </PrimaryButton>

            <SecondaryButton href={"/dashboard"} className="py-6">
              <div className="flex justify-center items-center gap-2">
                <CalendarCheck />
                My Bookings
              </div>
            </SecondaryButton>
          </div>

          <div className="flex lg:pr-20 justify-center md:justify-start items-center text-center gap-2 text-primary/90 [&_h2]:font-semibold [&_p]:text-primary/70 [&_p]:text-[14px]">
            <div>
              <h2>Free checkup</h2>
              <p>
                Comprehensive evaluation with no upfront cost. Limited time offer.
              </p>
            </div>

            <Separator orientation="vertical" variant="tertiary" />

            <div>
              <h2>Custom Treatment Plan</h2>
              <p>
                From Diagnosis to recovery, we map every step for your unique needs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
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
  );
};

export default Banner;