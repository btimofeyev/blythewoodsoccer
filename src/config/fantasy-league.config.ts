import { linksConfig } from "@/config/links.config";

export const fantasyLeagueConfig = {
  windowStart: "2026-06-10",
  windowEnd: "2026-07-19",
  leagueCode: "JG3WHC6O",
  sessionStorageKey: "blythewood-fantasy-league-popup-dismissed",
  popup: {
    eyebrow: "World Cup 2026 · BSC Families",
    title: "Pick your squad. Cheer together.",
    image: "/images/world-cup-fantasy-popup.jpg",
    body:
      "The biggest tournament on earth is here. Join the Blythewood Soccer Club World Cup Fantasy League—build your team, name your captain, and follow every match with families across the club.",
    details: [
      { label: "League code", value: "JG3WHC6O" },
      { label: "Your squad", value: "15 players · live subs & captain changes" },
      { label: "Who it's for", value: "Die-hard fans and casual cheerers alike" },
    ],
    tips: [
      "Hunt for value players—not just the biggest names.",
      "Watch the schedule and captain the right matchups.",
      "Back players from teams likely to go deep.",
    ],
    primaryCtaLabel: "Join the League",
    primaryCtaHref: linksConfig.worldCupFantasyJoin,
    secondaryCtaLabel: "Strategy Guide",
    secondaryCtaHref: linksConfig.worldCupFantasyStrategyGuide,
  },
} as const;
