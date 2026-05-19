'use client'

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const RegisterForm = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  const handleGoogleLogin = () => {
    alert("Google authentication triggered");
    // Add your OAuth or NextAuth sign-in trigger here
  };

  // Shared classes for our frosted-glass text fields to keep it perfectly scannable
  const fieldClasses = "flex flex-col gap-1.5 w-full";
  const labelClasses = "text-xs font-semibold uppercase tracking-wider text-secondary/80 ml-1";
  const inputWrapperClasses = "[&_input]:bg-white/[0.04] [&_input]:border [&_input]:border-secondary/15 [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-2.5 [&_input]:text-sm [&_input]:text-white [&_input]:placeholder-secondary/40 [&_input]:w-full [&_input]:transition-all [&_input:focus]:border-secondary [&_input:focus]:ring-2 [&_input:focus]:ring-secondary/20 [&_input:focus]:outline-none [&_input]:backdrop-blur-sm";

  return (
    <div className="flex flex-col w-full gap-5">
      
      <Form
        className="flex w-full flex-col gap-5"
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
          <FieldError className="text-xs text-red-400 mt-1 ml-1" />
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
          <Label className={labelClasses}>Email</Label>
          <div className={inputWrapperClasses}>
            <Input placeholder="john@example.com" />
          </div>
          <FieldError className="text-xs text-red-400 mt-1 ml-1" />
        </TextField>

        {/* Photo URL Input */}
        <TextField
          isRequired
          name="photoUrl"
          type='url'
          className={fieldClasses}
        >
          <Label className={labelClasses}>Photo URL</Label>
          <div className={inputWrapperClasses}>
            <Input placeholder="https://example.com/photo.jpg" />
          </div>
          <FieldError className="text-xs text-red-400 mt-1 ml-1" />
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
          <Description className="text-[11px] text-secondary/50 mt-1 ml-1 leading-normal">
            Must be at least 8 characters with 1 uppercase and 1 number.
          </Description>
          <FieldError className="text-xs text-red-400 mt-1 ml-1" />
        </TextField>

        <div className="flex gap-3 pt-2 w-full">
          <Button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary text-primary font-bold rounded-xl py-3 shadow-lg shadow-secondary/10 hover:bg-white hover:text-primary hover:shadow-white/10 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" />
            Create Account
          </Button>
          <Button
            type="reset"
            className="px-5 border border-secondary/20 hover:border-secondary/40 text-secondary bg-transparent font-medium rounded-xl transition-all cursor-pointer active:scale-[0.98]"
          >
            Reset
          </Button>
        </div>
      </Form>

      {/* Separator */}
      <div className="flex items-center my-1">
        <div className="flex-1 border-t border-secondary/10"></div>
        <span className="px-3 text-xs uppercase tracking-wider text-secondary/40 font-medium">Or Sign in with google</span>
        <div className="flex-1 border-t border-secondary/10"></div>
      </div>

      {/* Google Sign-In Button */}
      <Button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white/3 hover:bg-white/8 text-white border border-secondary/20 hover:border-secondary/40 font-medium rounded-xl py-3 shadow-md transition-all cursor-pointer active:scale-[0.98]"
      >
        <FaGoogle /> Continue with Google
      </Button>



      {/* Already have an account link */}
      <p className="text-center text-sm text-secondary/70 mt-2">
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-white font-semibold hover:text-secondary underline underline-offset-4 transition-all"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;