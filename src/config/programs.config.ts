import { linksConfig } from "@/config/links.config";
import type { ProgramPage } from "@/lib/types";

export const programsConfig: ProgramPage[] = [
  {
    slug: "junior-academy",
    title: "Junior Academy",
    ageBand: "U8 to U12",
    summary:
      "Competitive development for younger players who are ready for structured training, league matches, and a year-round pathway.",
    heroImage: "/images/junior-academy-2026-action.jpg",
    intro:
      "The Junior Academy helps younger players build confidence, habits, and technical quality in a competitive environment.",
    forPlayers: [
      "Players moving from recreation into a more structured training environment.",
      "Families looking for clear coaching standards and a year-round development path.",
      "Younger athletes who are ready for more touches, more teaching, and balanced competition.",
    ],
    highlights: [
      "United Development League and other SCYSA competition built around age-appropriate matchups.",
      "Two to three weekly sessions led by licensed, background-checked coaches.",
      "Weekly technical work with Coerver Carolinas to reinforce ball mastery and decision-making.",
    ],
    developmentPoints: [
      "10 to 20 games per season with mostly local travel and selective regional events.",
      "Clear emphasis on individual skill-building, tactical understanding, and composure on the ball.",
      "Twice-yearly evaluations in May and December or January, offered free of charge.",
    ],
    scheduleDetails: [
      "Most travel stays within the Columbia metro area and nearby regions.",
      "Families receive club communication about placements, schedules, and team expectations.",
      "If a roster spot is not available, the club will help families find another option.",
    ],
    howToStart: [
      "Submit the current player evaluation form through PlayMetrics.",
      "Attend the evaluation window and watch for placement communication from the club.",
      "Complete team registration once a roster fit is confirmed.",
    ],
    seasonLabel: "2026-2027",
    ageBreakdown: [
      { label: "U8", birthYears: "Aug 2018 to Jul 2019" },
      { label: "U9", birthYears: "Aug 2017 to Jul 2018" },
      { label: "U10", birthYears: "Aug 2016 to Jul 2017" },
      { label: "U11", birthYears: "Aug 2015 to Jul 2016" },
      { label: "U12", birthYears: "Aug 2014 to Jul 2015" },
    ],
    feeRows: [
      {
        format: "7v7",
        ageGroups: "U8-U10",
        fee: "$950",
        seasons: "Fall/Spring",
      },
      {
        format: "9v9",
        ageGroups: "U11-U12",
        fee: "$950",
        seasons: "Fall/Spring",
      },
    ],
    feeNotes: [
      "Professional coaching and league registration are included.",
      "Uniform cost is separate.",
      "Tournaments are separate and depend on team decisions.",
    ],
    faq: [
      {
        question: "Do players need to attend evaluations before joining?",
        answer:
          "Evaluations are the clearest entry point for new players. They help coaches place each player in the right environment and do not require any commitment.",
      },
      {
        question: "How often does the team train?",
        answer:
          "Most academy teams train two to three times each week, with an added technical session cadence built into the season.",
      },
      {
        question: "Is Junior Academy a good fit for first-time competitive players?",
        answer:
          "Yes. The Academy is a good fit for players moving from recreation into a more structured competitive environment.",
      },
    ],
    primaryCtaLabel: "View Evaluations",
    primaryCtaHref: linksConfig.evaluations,
    secondaryCtaLabel: "Log In",
    secondaryCtaHref: linksConfig.login,
  },
  {
    slug: "select",
    title: "Select",
    ageBand: "U13 to U19",
    summary:
      "Higher-level team play for athletes pursuing stronger competition, promotion-based league placement, and a long-view development path.",
    heroImage: "/images/select-2026-match-action.jpg",
    intro:
      "Blythewood Select is for players ready for a more competitive team environment with stronger training and league play.",
    forPlayers: [
      "U13 to U19 players who want a more demanding team environment and stronger weekly competition.",
      "Families comfortable with a higher training standard and a more serious match rhythm.",
      "Athletes pursuing long-term development inside SCYSA league play.",
    ],
    highlights: [
      "Competitive programming for U13 to U19 players with multiple divisions that keep matches balanced.",
      "U13 and U14 teams can play in both fall and spring seasons depending on roster interest.",
      "U15 and older teams focus primarily on the fall season as most players move into high school soccer each spring.",
    ],
    developmentPoints: [
      "SCYSA league play with promotion and relegation to keep competition aligned with performance.",
      "Regional schedules that give players strong matchdays without excessive weekly travel.",
      "Clear expectation-setting for attendance, communication, and club-versus-school commitments.",
    ],
    scheduleDetails: [
      "Families can communicate spring school-soccer plans early so coaches can build rosters responsibly.",
      "Training sessions prioritize technical sharpness, speed of play, and tactical discipline.",
      "Select teams are built for players who want consistent competition and a higher training standard.",
    ],
    howToStart: [
      "Review the current evaluation path before expecting a roster opening.",
      "Attend the club evaluation window so coaches can assess fit and availability.",
      "Move into PlayMetrics registration once the club confirms the right team environment.",
    ],
    seasonLabel: "2026-2027",
    ageBreakdown: [
      { label: "U13", birthYears: "Aug 2013 to Jul 2014" },
      { label: "U14", birthYears: "Aug 2012 to Jul 2013" },
      { label: "U15", birthYears: "Aug 2011 to Jul 2012" },
      { label: "U16", birthYears: "Aug 2010 to Jul 2011" },
      { label: "U17", birthYears: "Aug 2009 to Jul 2010" },
      { label: "U18", birthYears: "Aug 2008 to Jul 2009" },
    ],
    feeRows: [
      {
        format: "11v11",
        ageGroups: "U13-U14",
        fee: "$950",
        seasons: "Fall/Spring",
      },
      {
        format: "11v11",
        ageGroups: "U13-U14",
        fee: "$650",
        seasons: "Fall Only",
      },
      {
        format: "11v11",
        ageGroups: "U15-U19",
        fee: "$650",
        seasons: "Fall Only",
      },
    ],
    feeNotes: [
      "Professional coaching and league registration are included.",
      "Uniform cost is separate.",
      "Tournaments are separate and depend on team decisions.",
    ],
    faq: [
      {
        question: "Can U13 and U14 players balance school and club soccer?",
        answer:
          "Yes. Those age groups have more flexibility, and the club asks families to communicate their plans early so team planning stays clear.",
      },
      {
        question: "What does league placement look like?",
        answer:
          "Teams compete in SCYSA structures that use promotion and relegation, helping the club find the right level as teams grow.",
      },
      {
        question: "How do I get started?",
        answer:
          "Use the Select registration path or come through the club evaluation process so coaches can assess fit and roster availability.",
      },
    ],
    primaryCtaLabel: "View Evaluations",
    primaryCtaHref: linksConfig.evaluations,
    secondaryCtaLabel: "Log In",
    secondaryCtaHref: linksConfig.login,
  },
  {
    slug: "recreational",
    title: "Recreational Soccer",
    ageBand: "MLS GO",
    summary:
      "A welcoming, professionally supported environment for players of all experience levels who want to learn, compete, and enjoy the game.",
    heroImage: "/images/recreation-family.png",
    intro:
      "Blythewood recreational soccer keeps the barrier to entry low and the experience high. Families get a fun, organized league environment with real coaching support, official MLS GO gear, and a clear seasonal rhythm.",
    forPlayers: [
      "First-time players who want a positive introduction to the game.",
      "Returning families looking for a lower-pressure seasonal league with strong organization.",
      "Players of different experience levels who want to stay local and keep soccer fun.",
    ],
    highlights: [
      "Open to all skill levels, from first-time players to young athletes building confidence.",
      "Official MLS GO uniforms and age-appropriate equipment supported by Major League Soccer’s youth rec platform.",
      "A Charlotte FC ticket benefit for registered players, with discounted family ticket access when available.",
    ],
    developmentPoints: [
      "Training support powered by Coerver Carolinas and a positive, engaging technical model.",
      "A strong emphasis on confidence, teamwork, and love of the game over pressure or early specialization.",
      "Financial support may be available through the MLS GO Play Fund for qualifying families.",
    ],
    scheduleDetails: [
      "Season timelines and registration windows are posted in the club news section.",
      "The program transitions from practices into game play once teams and coaches are formed.",
      "Families should register early because uniform and league deadlines create hard close dates.",
    ],
    howToStart: [
      "Use the current recreation registration link while the season window is open.",
      "Watch for coach, practice, and calendar communication through PlayMetrics.",
      "Arrive ready for a family-friendly season built around learning, confidence, and fun.",
    ],
    faq: [
      {
        question: "Is recreational soccer only for beginners?",
        answer:
          "No. The program is open to all skill levels and works well for both new players and returning families.",
      },
      {
        question: "What does registration include?",
        answer:
          "Registration covers the seasonal league experience and official MLS GO player gear. Specific seasonal pricing and timing can be updated through the content files.",
      },
      {
        question: "How do families know when seasons open?",
        answer:
          "The club posts registration dates and season updates on the homepage and news page.",
      },
    ],
    primaryCtaLabel: "Register For Recreation",
    primaryCtaHref: linksConfig.recreationalRegistration,
    secondaryCtaLabel: "See Current Updates",
    secondaryCtaHref: "/news/",
  },
];

export function getProgramBySlug(slug: string) {
  return programsConfig.find((program) => program.slug === slug);
}
