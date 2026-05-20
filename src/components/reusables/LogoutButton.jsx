"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!");
    router.push("/login");
    router.refresh();
  };

  const buttonStyle = `group relative overflow-hidden p-5 rounded-2xl border border-white/10 bg-gradient-to-r from-primary to-[#2F4E57] text-background font-semibold tracking-wide transition-all duration-800 ease-out hover:shadow-[0_10px_30px_rgba(36,59,66,0.35)] active:scale-[0.98] before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100`;

  return (
    <Button
      onPress={handleLogout}
      className={buttonStyle}
    >
      {/* Glow */}
      <span className="absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-all duration-500 bg-secondary/30 group-hover:opacity-100" />

      {/* Shine sweep */}
      <span className="absolute top-0 left-[-120%] h-full w-[120%] rotate-12 bg-linear-to-r from-transparent via-white/25 to-transparent transition-all duration-500 group-hover:left-[120%]" />

      {/* Label */}
      <span className="relative z-10">Logout</span>
    </Button>
  );
};

export default LogoutButton;