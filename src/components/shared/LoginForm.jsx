'use client'

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { LogIn, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import { handleGoogleLogin, onLoginSubmit } from '@/lib/formFunctions';
import { useRouter } from 'next/navigation';


const LoginForm = () => {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // Light clinical input class setups
  const fieldClasses = "flex flex-col gap-1.5 w-full";
  const labelClasses = "text-xs font-bold uppercase tracking-wider text-primary/80 ml-1";
  const inputWrapperClasses = "[&_input]:bg-[#F4F8F9] [&_input]:border [&_input]:border-secondary/40 [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-2.5 [&_input]:text-sm [&_input]:text-primary [&_input]:placeholder-primary/40 [&_input]:w-full [&_input]:transition-all [&_input:focus]:border-primary [&_input:focus]:bg-white [&_input:focus]:ring-2 [&_input:focus]:ring-secondary/50 [&_input:focus]:outline-none";

  return (
    <div className="flex flex-col w-full gap-5">

      {/* Main Login Form */}
      <Form
        className="flex w-full flex-col gap-5"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={(e) => onLoginSubmit(e, router)}
      >
        {/* Email Input */}
        <TextField
          isRequired
          name="email"
          type="email"
          className={fieldClasses}
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className={labelClasses}>Email Address</Label>
          <div className={inputWrapperClasses}>
            <Input placeholder="john@example.com" />
          </div>
          <FieldError className="text-xs text-red-500 mt-1 ml-1" />
        </TextField>

        {/* Password Input with Show/Hide Eye Toggle */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type={showPassword ? "text" : "password"}
          className={fieldClasses}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <div className="flex justify-between items-center w-full">
            <Label className={labelClasses}>Password</Label>
            <Link href="#" className="text-[11px] font-semibold text-primary/60 hover:text-blue-500 transition-all">
              Forgot Password?
            </Link>
          </div>
          
          <div className={`${inputWrapperClasses} relative flex items-center`}>
            <Input placeholder="••••••••" className="w-full pr-10" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-slate-400 hover:text-primary transition-colors focus:outline-none cursor-pointer z-10"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <Description className="text-[10px] text-slate-400 mt-1 ml-1 leading-normal">
            Must be at least 8 characters with 1 uppercase and 1 number.
          </Description>
          <FieldError className="text-xs text-red-500 mt-1 ml-1" />
        </TextField>

        {/* Submit Action */}
        <div className="pt-2 w-full">
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#2C4952] text-white font-bold rounded-xl py-3 shadow-md active:scale-[0.98] transition-all cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </Button>
        </div>
      </Form>

      {/* Visual Separator */}
      <div className="flex items-center my-1">
        <div className="flex-1 border-t border-secondary/40"></div>
        <span className="px-3 text-xs uppercase tracking-wider text-primary/40 font-bold">Or login with email</span>
        <div className="flex-1 border-t border-secondary/40"></div>
      </div>

      {/* Google Sign-In Button */}
      <Button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-surface text-primary border border-secondary/60 font-semibold rounded-xl py-3 shadow-sm transition-all cursor-pointer active:scale-[0.98]"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </Button>

      {/* Navigation Redirect Link */}
      <p className="text-center text-sm text-primary/70 mt-2">
        Don&apos;t have an account?{' '}
        <Link
          href="/register"
          className="text-primary font-bold hover:text-blue-500 underline underline-offset-4 transition-all"
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;