import { linksConfig } from "@/config/links.config";

export const registrationConfig = {
  windowStart: "2026-06-11",
  windowEnd: "2026-08-17",
  sessionStorageKey: "blythewood-fall-2026-registration-popup-dismissed-v2",
  popup: {
    eyebrow: "MLS GO Recreation",
    title: "Fall 2026 MLS GO registration is open.",
    body:
      "Register for Fall 2026 MLS GO recreational soccer. Practices and games begin the week of August 17 at Richland County Wellness Center with Coerver training and Friday night games.",
    details: [
      { label: "Regular registration", value: "June 11 – Aug 10 · $110" },
      { label: "Season begins", value: "Week of August 17, 2026" },
      { label: "Location", value: "Richland County Wellness Center" },
    ],
    primaryCtaLabel: "Register For MLS GO",
    primaryCtaHref: linksConfig.recreationalRegistration,
    secondaryCtaLabel: "Learn More",
    secondaryCtaHref: "/programs/recreational/",
  },
} as const;
