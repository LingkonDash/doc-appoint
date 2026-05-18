import Image from 'next/image';

import logo from '@/images/docAppoint-logo.png';
import NavLinks from '../reusables/NavLinks';
import PrimaryButton from '../reusables/PrimaryButton';
import SecondaryButton from '../reusables/SecondaryButton';
import MobileNavigation from './MobileNavigation';

const navRoutes = [
  { path: '/', name: 'Home' },
  { path: '/appointments', name: 'All Appointments' },
  { path: '/dashboard', name: 'Dashboard' }
];

const Navbar = () => {

  return (
    <nav className="relative flex justify-between items-center py-3 px-5 max-w-6xl mx-auto">

      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" height={40} width={40} />
        <h1 className="font-bold text-2xl text-primary">DocAppoint</h1>
      </div>

      <ul className="hidden lg:flex items-center gap-6">
        {navRoutes.map((item, i) => (
          <li key={i}>
            <NavLinks href={item.path}>{item.name}</NavLinks>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <SecondaryButton href="/login" className='hidden md:flex'>Login</SecondaryButton>
        <PrimaryButton href="/register" className='hidden md:flex'>Register</PrimaryButton>
        
        {/* Mobile Navigation */}
        <MobileNavigation navRoutes={navRoutes} />
      </div>
    </nav>
  );
};

export default Navbar;