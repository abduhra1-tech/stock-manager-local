import Link from "next/link";
import { siteConfig } from "@/lib/constants";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-gray-900";

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">L</span>
      </div>
      <span className={`text-xl font-bold ${textColor}`}>{siteConfig.name}</span>
    </Link>
  );
}
