import { registrationConfig } from "@/config/registration.config";
import { isWithinDateWindow } from "@/lib/promo-window";

export function isRegistrationWindowOpen(now = new Date()): boolean {
  return isWithinDateWindow(
    registrationConfig.windowStart,
    registrationConfig.windowEnd,
    now,
  );
}
