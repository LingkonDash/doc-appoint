'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ href, children }) => {

  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ease-out ${isActive ? 'bg-linear-to-r from-secondary to-[#d8edf4]/90 text-primary shadow-[0_4px_25px_rgba(197,222,230,0.45)] backdrop-blur-md border border-white/40' : 'text-foreground/65 hover:text-primary hover:bg-secondary/60 hover:backdrop-blur-md border border-transparent hover:border-white/20 hover:shadow-[0_8px_20px_rgba(197,222,230,0.18)]'}`}
    >

      {/* Premium Glow */}
      <span className={`absolute inset-0 rounded-xl opacity-0 transition-all duration-500 bg-linear-to-r from-white/40 via-white/10 to-transparent group-hover:opacity-100 ${isActive && 'opacity-100'}`} />

      {/* Animated Background Blur */}
      <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${isActive ? 'bg-white/10' : 'group-hover:bg-white/3'}`} />

      {/* Bottom Active Indicator */}
      <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.75 rounded-full bg-linear-to-r from-primary to-[#2F4E57] shadow-[0_0_10px_rgba(197,222,230,0.6)] transition-all duration-300 ${isActive ? 'w-6 opacity-100' : 'w-0 opacity-0 group-hover:w-5 group-hover:opacity-60'}`} />

      {/* Text */}
      <span className="relative z-10">
        {children}
      </span>

    </Link>
  );
};

export default NavLinks;