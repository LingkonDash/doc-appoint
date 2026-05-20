'use client'

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import NavLinks from '../reusables/NavLinks';
import SecondaryButton from '../reusables/SecondaryButton';
import PrimaryButton from '../reusables/PrimaryButton';
import LogoutButton from '../reusables/LogoutButton';
import Image from 'next/image';

const MobileNavigation = ({ navRoutes, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen
          ? <X size={26} className="text-primary" />
          : <Menu size={26} className="text-primary" />
        }
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col justify-center items-center gap-4 px-5 py-6 lg:hidden z-50">

          {/* Nav links */}
          {navRoutes.map((item, i) => (
            <div key={i} className="my-1" onClick={() => setIsOpen(false)}>
              <NavLinks href={item.path}>{item.name}</NavLinks>
            </div>
          ))}

          {/* Divider */}
          <div className="w-full md:hidden h-px my-1" style={{ background: "rgba(36,59,66,0.1)" }} />

          {/* Auth section */}
          <div className="flex md:hidden flex-col gap-3 w-full items-center">
            {user ? (
              <>
                {/* User info */}
                <div className="flex items-center gap-3 w-full justify-center py-1">
                  <div
                    className="relative w-10 h-10 rounded-full shrink-0"
                    style={{ border: "2.5px solid #243B42", padding: "2px" }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      {user.image ? (
                        <Image
                          src={user.image}
                          alt={user.name ?? "User"}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center text-[13px] font-bold"
                          style={{ background: "#243B42", color: "#C5DEE6" }}
                        >
                          {user.name?.charAt(0).toUpperCase() ?? "U"}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-semibold text-primary truncate max-w-35">
                      {user.name}
                    </span>
                    <span className="text-[11px] truncate max-w-35"
                      style={{ color: "rgba(36,59,66,0.5)" }}>
                      {user.email}
                    </span>
                  </div>
                </div>

                <div onClick={() => setIsOpen(false)} className="w-full flex justify-center">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <>
                <div onClick={() => setIsOpen(false)}>
                  <SecondaryButton href="/login">Login</SecondaryButton>
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <PrimaryButton href="/register">Register</PrimaryButton>
                </div>
              </>
            )}
          </div>

        </div>
      )}
    </>
  );
};

export default MobileNavigation;