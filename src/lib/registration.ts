import { registrationConfig } from "@/config/registration.config";

function toStartOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseConfigDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function isRegistrationWindowOpen(now = new Date()): boolean {
  const today = toStartOfDay(now);
  const start = toStartOfDay(parseConfigDate(registrationConfig.windowStart));
  const end = toStartOfDay(parseConfigDate(registrationConfig.windowEnd));

  return today >= start && today <= end;
}
