"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const RedirectHandler = ({ children }: { children: React.ReactNode }) => {
  const r = useRouter();
  const p = usePathname();
  if (p != "/" && !p.startsWith("/test")) r.replace("/");
  return <>{children}</>;
};

export default RedirectHandler;
