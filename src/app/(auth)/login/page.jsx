import LoginForm from '@/components/shared/LoginForm';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import logo from '@/images/docAppoint-logo.png';

const LoginPage = () => {
  return (
    <div className="bg-primary min-h-screen w-full flex items-center justify-center p-4">
      {/* Glassmorphic Container Overriding Whitish Vibe */}
      <Card className="w-full max-w-md bg-white/3 backdrop-blur-xl border border-secondary/15 shadow-[0_25px_50px_-12px_rgba(12,24,28,0.45)] rounded-2xl p-6 sm:p-10 text-white">

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
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Doc<span className="text-secondary font-medium">Appoint</span>
          </span>
        </div>

        {/* Subheading */}
        <h2 className="text-xl mb-4 text-center font-medium text-secondary/90">
          Welcome Back
        </h2>

        {/* Stylized Login Form */}
        <div className="relative">
          <LoginForm />
        </div>

      </Card>
    </div>
  );
};

export default LoginPage;