import { contactConfig } from "@/config/contact.config";

const recreationalRegistration =
  "https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xNDE1LTE3ODYyNzQyMTR8aDdjTTNRazFMVHVqTXM0OXZrcVhDSll6MUJJZVpLdXRicGgzY250Um1qRT0=&program_id=109147";

export const linksConfig = {
  contact: contactConfig.formHref,
  login: "https://playmetrics.com/login",
  recreationalRegistration,
  clubRegistration: recreationalRegistration,
  academyRegistration:
    "https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xNDE1LTE3NDcxNDk0NDB8Ykc5dWhLb0JEUVpwd2c4eUR4OEpxNzBqNGw5QkJKTzZLcjhxT1d3cnYyST0=&program_id=57399",
  selectRegistration:
    "https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xNDE1LTE3NDcxNDk0NDB8Ykc5dWhLb0JEUVpwd2c4eUR4OEpxNzBqNGw5QkJKTzZLcjhxT1d3cnYyST0=&program_id=57399",
  evaluations:
    "https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xNDE1LTE3Nzg5ODI3OTh8TWsvY1o3MVpmdVV6Zko4N1RvZWRuWGlsak5HQk5DVHh3RDAvTld2UTh0Zz0=",
  worldCupFantasyJoin: "https://play.fifa.com/fantasy/join-league/JG3WHC6O",
  worldCupFantasyHome: "https://play.fifa.com/fantasy/",
  worldCupFantasyStrategyGuide:
    "https://www.nytimes.com/athletic/7332295/2026/06/05/world-cup-fantasy-rules-points-strategies/",
} as const;
