import Image from 'next/image';
import logo from '@/images/docAppoint-logo.png';
import NavLinks from '../reusables/NavLinks';
import PrimaryButton from '../reusables/PrimaryButton';
import SecondaryButton from '../reusables/SecondaryButton';
import MobileNavigation from './MobileNavigation';
import LogoutButton from '../reusables/LogoutButton';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const navRoutes = [
  { path: '/', name: 'Home' },
  { path: '/appointments', name: 'All Appointments' },
  { path: '/dashboard', name: 'Dashboard' }
];

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  return (
    <nav className="relative flex justify-between items-center py-3 px-5 lg:px-8 max-w-400 mx-auto">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" height={40} width={40} />
        <h1 className="font-bold text-2xl text-primary">DocAppoint</h1>
      </div>

      {/* Nav links */}
      <ul className="hidden lg:flex items-center gap-6">
        {navRoutes.map((item, i) => (
          <li key={i}>
            <NavLinks href={item.path}>{item.name}</NavLinks>
          </li>
        ))}
      </ul>

      {/* Auth area */}
      <div className="flex items-center gap-3">
        {user ? (
          // ── Logged in ──
          <div className="hidden md:flex items-center gap-3">
            {/* Avatar */}
            <div className="flex items-center gap-2.5">
              <div
                className="relative w-9 h-9 rounded-full shrink-0"
                style={{ border: "2.5px solid #243B42", padding: "2px" }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User"}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  ) : (
                    // Fallback initials avatar
                    <div
                      className="w-full h-full flex items-center justify-center text-[12px] font-bold"
                      style={{ background: "#243B42", color: "#C5DEE6" }}
                    >
                      {user.name?.charAt(0).toUpperCase() ?? "U"}
                    </div>
                  )}
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col leading-tight">
                <span className="text-[12px] font-semibold text-primary truncate max-w-25">
                  {user.name}
                </span>
                <span
                  className="text-[10px] truncate max-w-25"
                  style={{ color: "rgba(36,59,66,0.5)" }}
                >
                  {user.email}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="w-px h-6"
              style={{ background: "rgba(36,59,66,0.15)" }}
            />

            <LogoutButton />
          </div>
        ) : (
          // ── Logged out ──
          <>
            <SecondaryButton href="/login" className="hidden md:flex">
              Login
            </SecondaryButton>
            <PrimaryButton href="/register" className="hidden md:flex">
              Register
            </PrimaryButton>
          </>
        )}

        {/* Mobile Navigation */}
        <MobileNavigation navRoutes={navRoutes} user={user} />
      </div>
    </nav>
  );
};

export default Navbar;