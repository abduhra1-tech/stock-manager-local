import {
  Zap,
  BarChart3,
  Puzzle,
  Shield,
  Headphones,
  Rocket,
  Twitter,
  Github,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Zap,
  BarChart3,
  Puzzle,
  Shield,
  Headphones,
  Rocket,
  Twitter,
  Github,
  Linkedin,
};

export function getIcon(name: string, fallback: LucideIcon = Zap): LucideIcon {
  return iconMap[name] || fallback;
}
