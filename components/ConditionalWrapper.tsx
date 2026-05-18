"use client";

import { usePathname } from "next/navigation";

interface ConditionalWrapperProps {
  children: React.ReactNode;
  excludedPaths?: string[];
}

export default function ConditionalWrapper({
  children,
  excludedPaths = ["/account/login"],
}: ConditionalWrapperProps) {
  const pathname = usePathname();
  const isExcluded = excludedPaths.includes(pathname);

  if (isExcluded) return null;

  return <>{children}</>;
}
