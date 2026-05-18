import Image from 'next/image';
import React from 'react';
import logo from '@/images/docAppoint-logo.png';

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center'>
      <div className='flex justify-center items-center gap-2'>
        <div>
          <Image src={logo} alt='Logo' height={40} width={40} />
        </div>
        <h1 className='font-bold text-2xl'>DocAppoint</h1>
      </div>
    </nav>
  );
};

export default Navbar;