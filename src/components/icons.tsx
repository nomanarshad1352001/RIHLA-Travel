import {
  MoonStar,
  Tent,
  Users,
  UsersRound,
  MapPin,
  FileCheck,
  Plane,
  PlaneTakeoff,
  Hotel,
  Bus,
  Headset,
  Compass,
  ClipboardCheck,
  HeartHandshake,
  Home,
  HandCoins,
  Eye,
  Sparkles,
  Moon,
  Luggage,
  CalendarDays,
  ScrollText,
  BookOpen,
  Building2,
  Wallet,
  HeartPulse,
  Accessibility,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  MoonStar,
  Tent,
  Users,
  UsersRound,
  MapPin,
  FileCheck,
  Plane,
  PlaneTakeoff,
  Hotel,
  Bus,
  Headset,
  Compass,
  ClipboardCheck,
  HeartHandshake,
  Home,
  HandCoins,
  Eye,
  Sparkles,
  Moon,
  Luggage,
  CalendarDays,
  ScrollText,
  BookOpen,
  Building2,
  Wallet,
  HeartPulse,
  Accessibility,
  ShieldCheck,
};

export function IconByName({
  name,
  className,
  strokeWidth,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Star;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
