import RegisterForm from '@/components/shared/RegisterForm';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import logo from '@/images/docAppoint-logo.png';

const RegisterPage = () => {
  return (
    <div className="bg-[#EBF3F6] min-h-screen w-full flex items-center justify-center p-4">
      {/* Crisp White Solid Card to match Login Page exactly */}
      <Card className="w-full max-w-md bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-2xl p-6 sm:p-10 text-slate-800">

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

        {/* Subheading */}
        <h2 className="text-xl mb-6 text-center font-bold text-[#1C353D]">
          Create a new Account
        </h2>

        {/* Registration Form Container */}
        <div className="relative">
          <RegisterForm />
        </div>

      </Card>
    </div>
  );
};

export default RegisterPage;