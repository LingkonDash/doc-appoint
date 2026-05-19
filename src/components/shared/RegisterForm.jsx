'use client'

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const RegisterForm = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    alert(`Logging in with: ${JSON.stringify(data)}`);
  };

  const handleGoogleLogin = () => {
    alert("Google authentication triggered");
  };

  // Shared utility classes to perfectly mirror your login page inputs
  const fieldClasses = "flex flex-col gap-1.5 w-full";
  const labelClasses = "text-[11px] font-bold uppercase tracking-wider text-slate-700 ml-1";
  const inputWrapperClasses = "[&_input]:bg-[#F4F8F9] [&_input]:border [&_input]:border-slate-200/60 [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-2.5 [&_input]:text-sm [&_input]:text-slate-800 [&_input]:placeholder-slate-400 [&_input]:w-full [&_input]:transition-all [&_input:focus]:border-[#1C353D] [&_input:focus]:bg-white [&_input:focus]:outline-none";

  return (
    <div className="flex flex-col w-full gap-5">
      
      {/* Main Registration Form */}
      <Form
        className="flex w-full flex-col gap-4"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        {/* Name Input */}
        <TextField
          isRequired
          name="name"
          className={fieldClasses}
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label className={labelClasses}>Name</Label>
          <div className={inputWrapperClasses}>
            <Input placeholder="Enter your full name" />
          </div>
          <FieldError className="text-xs text-red-500 mt-1 ml-1" />
        </TextField>

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

        {/* Photo URL Input */}
        <TextField
          isRequired
          name="photoUrl"
          type="url"
          className={fieldClasses}
        >
          <Label className={labelClasses}>Photo URL</Label>
          <div className={inputWrapperClasses}>
            <Input placeholder="https://example.com/photo.jpg" />
          </div>
          <FieldError className="text-xs text-red-500 mt-1 ml-1" />
        </TextField>

        {/* Password Input */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
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
          <Label className={labelClasses}>Password</Label>
          <div className={inputWrapperClasses}>
            <Input placeholder="••••••••" />
          </div>
          <Description className="text-[10px] text-slate-400 mt-1 ml-1 leading-normal">
            Must be at least 8 characters with 1 uppercase and 1 number.
          </Description>
          <FieldError className="text-xs text-red-500 mt-1 ml-1" />
        </TextField>

        {/* Submit Form Button */}
        <div className="pt-2 w-full">
          <Button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#1C353D] hover:bg-[#15282E] text-white font-bold rounded-xl py-3 transition-all cursor-pointer active:scale-[0.98]"
          >
            <Check className="w-4 h-4" />
            Sign Up
          </Button>
        </div>
      </Form>

      {/* Visual Separator */}
      <div className="flex items-center my-1">
        <div className="flex-1 border-t border-slate-200"></div>
        <span className="px-3 text-[10px] uppercase tracking-wider text-slate-400 font-bold">Or register with email</span>
        <div className="flex-1 border-t border-slate-200"></div>
      </div>

      {/* Google Provider Sign-In */}
      <Button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold rounded-xl py-2.5 shadow-sm transition-all cursor-pointer active:scale-[0.98]"
      >
        <FcGoogle />
        Continue with Google
      </Button>

      {/* Redirect Link */}
      <p className="text-center text-sm text-slate-500 mt-1">
        Already have an account?{' '}
        <Link 
          href="/login" 
          className="text-[#1C353D] font-bold hover:underline transition-all"
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;