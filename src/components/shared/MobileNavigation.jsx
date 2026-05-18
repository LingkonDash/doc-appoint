'use client'

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import NavLinks from '../reusables/NavLinks';
import SecondaryButton from '../reusables/SecondaryButton';
import PrimaryButton from '../reusables/PrimaryButton';

const MobileNavigation = ({navRoutes}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} className='text-primary'/> : <Menu className='text-primary' size={26} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col justify-center items-center gap-4 px-5 py-4 lg:hidden z-50">

          {navRoutes.map((item, i) => (
            <div key={i} className='my-2' onClick={() => setIsOpen(false)}>
              <NavLinks href={item.path}>
                {item.name}
              </NavLinks>
            </div>
          ))}

          <div className="flex md:hidden flex-col gap-3 pt-2 justify-center items-center">
            <div onClick={() => setIsOpen(false)}>
              <SecondaryButton href="/login">Login</SecondaryButton>
            </div>

            <div onClick={() => setIsOpen(false)}>
              <PrimaryButton href="/register">Register</PrimaryButton>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default MobileNavigation;