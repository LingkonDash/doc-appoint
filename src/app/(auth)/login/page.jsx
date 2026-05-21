import LoginForm from '@/components/shared/LoginForm';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import logo from '@/images/docAppoint-logo.png';

export const metadata = {
  title: "Login - Doc Appointment",
};

const LoginPage = () => {
  return (
    <div className="bg-linear-to-tr from-secondary/50 to-[#E9F2F5] min-h-screen w-full flex items-start justify-center p-4 pt-10 relative overflow-hidden">

      {/* Structured Clean White Card container that matches the home grid cards */}
      <Card className="w-full max-w-md bg-white border border-secondary/30 shadow-[0_20px_50px_-12px_rgba(36,59,66,0.08)] rounded-2xl p-6 sm:p-10 text-foreground relative z-10">

        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Image
            src={logo}
            alt="DocAppoint Logo"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="text-2xl font-extrabold tracking-tight text-[#1C353D]">
            Doc<span className="text-[#284B55] font-medium">Appoint</span>
          </span>
        </div>

        {/* Subheading with homepage text color styling */}
        <h2 className="text-xl mb-6 text-center font-bold text-primary">
          Welcome Back
        </h2>

        {/* Stylized Light Mode Login Form */}
        <div className="relative">
          <LoginForm />
        </div>

      </Card>
    </div>
  );
};

export default LoginPage;