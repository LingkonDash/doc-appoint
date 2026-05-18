import Image from 'next/image';
import React from 'react';
import logo from '@/images/docAppoint-logo.png';
import NavLinks from '../reusables/NavLinks';
import Link from 'next/link';
import { Button } from '@heroui/react';
import PrimaryButton from '../reusables/PrimaryButton';
import SecondaryButton from '../reusables/SecondaryButton';

const navRoutes = [
  { path: '/', name: 'Home' },
  { path: '/appointments', name: 'All Appointments' },
  { path: '/dashboard', name: 'Dashboard' }
]

const Navbar = () => {


  return (
    <nav className='flex justify-between items-center py-3 px-5 max-w-400 mx-auto'>
      <div className='flex justify-center items-center gap-2'>
        <div>
          <Image src={logo} alt='Logo' height={40} width={40} />
        </div>
        <h1 className='font-bold text-2xl text-primary'>DocAppoint</h1>
      </div>

      <ul className='flex justify-center items-center gap-4'>
        {
          navRoutes.map((item, i) => <li key={i}><NavLinks href={item.path}>{item.name}</NavLinks></li>)
        }
      </ul>

      <div className='flex justify-center items-center gap-4'>
        <SecondaryButton href={'/login'}>Login</SecondaryButton>
        <PrimaryButton href={'/register'}>Register</PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;