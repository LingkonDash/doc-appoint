'use client'

import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    alert(`Logging in with: ${JSON.stringify(data)}`);
  };

  const handleGoogleLogin = () => {
    alert("Google authentication triggered");
  };

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
        onSubmit={onSubmit}
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

        {/* Password Input */}
        <TextField
          isRequired
          name="password"
          type="password"
          className={fieldClasses}
        >
          <div className="flex justify-between items-center w-full">
            <Label className={labelClasses}>Password</Label>
            <Link href="#" className="text-[11px] font-semibold text-primary/60 hover:text-blue-300 transition-all">
              Forgot Password?
            </Link>
          </div>
          <div className={inputWrapperClasses}>
            <Input placeholder="••••••••" />
          </div>
          <FieldError className="text-xs text-red-500 mt-1 ml-1" />
        </TextField>

        {/* Submit Action (Matches the prominent "Find A Doctor" / "Register" buttons from your home hero) */}
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

      {/* Google Sign-In button designed to feel clean against the white card */}
      <Button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-[#FAFAFA] text-primary border border-secondary/60 font-semibold rounded-xl py-3 shadow-sm transition-all cursor-pointer active:scale-[0.98]"
      >
        <FcGoogle />
        Continue with Google
      </Button>

      {/* Navigation Redirect Link */}
      <p className="text-center text-sm text-primary/70 mt-2">
        Don&apos;t have an account?{' '}
        <Link
          href="/register"
          className="text-primary font-bold hover:text-blue-300 underline underline-offset-4 transition-all"
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;