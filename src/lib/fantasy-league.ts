import { fantasyLeagueConfig } from "@/config/fantasy-league.config";
import { isWithinDateWindow } from "@/lib/promo-window";

export function isFantasyLeagueWindowOpen(now = new Date()): boolean {
  return isWithinDateWindow(
    fantasyLeagueConfig.windowStart,
    fantasyLeagueConfig.windowEnd,
    now,
  );
}

export function isFantasyLeaguePopupEligible(): boolean {
  if (!isFantasyLeagueWindowOpen()) {
    return false;
  }

  if (typeof window === "undefined") {
    return false;
  }

  return !sessionStorage.getItem(fantasyLeagueConfig.sessionStorageKey);
}
