import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  href,
  children,
  className = "",
  ...props
}) => {

  const buttonStyle = `
    group
    relative
    overflow-hidden

    p-5

    rounded-2xl
    border border-white/10

    bg-gradient-to-r
    from-primary
    to-[#2F4E57]

    text-background
    font-semibold
    tracking-wide

    transition-all
    duration-800
    ease-out

    hover:shadow-[0_10px_30px_rgba(36,59,66,0.35)]

    active:scale-[0.98]

    before:absolute
    before:inset-0
    before:bg-white/10
    before:opacity-0
    before:transition-opacity
    before:duration-500
    hover:before:opacity-100
  `;

  const content = (
    <Button
      className={`${buttonStyle} ${className}`}
      {...props}
    >
      {/* Glow Effect */}
      <span
        className="
          absolute
          inset-0
          rounded-2xl
          opacity-0
          blur-2xl
          transition-all
          duration-500
          bg-secondary/30
          group-hover:opacity-100
        "
      />

      {/* Shine Sweep */}
      <span
        className="
          absolute
          top-0
          left-[-120%]
          h-full
          w-[120%]
          rotate-12
          bg-linear-to-r
          from-transparent
          via-white/25
          to-transparent

          transition-all
          duration-500

          group-hover:left-[120%]
        "
      />

      {/* Button Text */}
      <span className="relative z-10">
        {children}
      </span>
    </Button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default PrimaryButton;