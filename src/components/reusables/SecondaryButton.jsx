import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const SecondaryButton = ({
  href,
  children,
  className = "",
  ...props
}) => {

  const buttonStyle = `
    group
    relative
    overflow-hidden

    px-6
    py-5

    rounded-xl
    border
    border-primary/30

    bg-transparent

    text-primary
    font-semibold
    tracking-wide

    backdrop-blur-sm

    transition-all
    duration-500
    ease-out
    

    hover:border-primary
    hover:text-white

    hover:shadow-[0_15px_40px_rgba(36,59,66,0.25)]

    active:scale-[0.98]
  `;

  const content = (
    <Button
      className={`${buttonStyle} ${className}`}
      {...props}
    >
      {/* Animated Background Fill */}
      <span
        className="
          absolute
          inset-0
          scale-x-0
          origin-left
          rounded-xl

          bg-linear-to-r
          from-primary
          to-[#2F4E57]

          transition-transform
          duration-500
          ease-out

          group-hover:scale-x-100
        "
      />

      {/* Glow Effect */}
      <span
        className="
          absolute
          inset-0
          rounded-2xl

          opacity-0
          blur-2xl

          bg-secondary/20

          transition-all
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Shine Sweep */}
      <span
        className="
          absolute
          top-0
          left-[-130%]

          h-full
          w-[120%]

          rotate-12

          bg-linear-to-r
          from-transparent
          via-white/20
          to-transparent

          transition-all
          duration-800

          group-hover:left-[130%]
        "
      />

      {/* Text */}
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

export default SecondaryButton;