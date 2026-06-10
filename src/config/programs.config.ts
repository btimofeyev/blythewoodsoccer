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
      "Contact the club to share your player's age, experience, and program interest.",
      "Club staff will follow up with placement options and next steps.",
      "Complete team registration in PlayMetrics once a roster fit is confirmed.",
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
    primaryCtaLabel: "Contact the Club",
    primaryCtaHref: linksConfig.contact,
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
      "Contact the club to discuss your player's age group, experience, and team interest.",
      "Club staff will follow up about roster availability and the right team environment.",
      "Move into PlayMetrics registration once the club confirms the right team fit.",
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
    primaryCtaLabel: "Contact the Club",
    primaryCtaHref: linksConfig.contact,
    secondaryCtaLabel: "Log In",
    secondaryCtaHref: linksConfig.login,
  },
  {
    slug: "recreational",
    title: "Recreational Soccer",
    ageBand: "MLS GO",
    summary:
      "Fall 2026 MLS GO recreational soccer with official MLS gear, Coerver-led training, and Friday night games at Richland County Wellness Center.",
    heroImage: "/images/recreation-family.png",
    intro:
      "Blythewood MLS GO keeps recreational soccer affordable, organized, and fun. Families get one-hour Coerver practices focused on skills and technical ability, Friday night games, and official MLS team uniforms included with every registration—all at Richland County Wellness Center.",
    forPlayers: [
      "First-time players who want a positive introduction to the game.",
      "Returning families looking for a lower-pressure seasonal league with strong organization.",
      "Players of different experience levels who want to stay local and keep soccer fun.",
    ],
    highlights: [
      "Open to all skill levels, from first-time players to young athletes building confidence.",
      "Full MLS team uniform included with every registration: shirt, shorts, and socks from an MLS club.",
      "One Charlotte FC ticket per registered child, with discounted family ticket options when available.",
    ],
    developmentPoints: [
      "One-hour Coerver Carolinas practice sessions focused on skills, ball mastery, and technical ability.",
      "Practice times at 5, 6, or 7 PM on Tuesday, Wednesday, and Thursday.",
      "Friday night games keep the weekly rhythm family-friendly while players build confidence on the field.",
    ],
    scheduleDetails: [
      "Registration runs June 11 through August 10, 2026 at the regular $110 rate.",
      "Late registration is available August 10 through August 17, 2026 at $130.",
      "Practices and games begin the week of August 17, 2026, with the last game on October 2, 2026.",
      "All sessions are held at Richland County Wellness Center, 306 Flora Dr, Columbia, SC 29223.",
    ],
    howToStart: [
      "Register through the MLS GO PlayMetrics link while the current registration window is open.",
      "Watch for team, practice time, and calendar communication through PlayMetrics.",
      "Arrive at RCWC ready for Coerver-led practices and Friday night games.",
    ],
    seasonLabel: "Fall 2026",
    seasonTimeline: [
      { label: "Regular registration", value: "June 11 – August 10, 2026 · $110" },
      { label: "Late registration", value: "August 10 – August 17, 2026 · $130" },
      { label: "Practices & games begin", value: "Week of August 17, 2026" },
      { label: "Last game", value: "October 2, 2026" },
      { label: "Location", value: "Richland County Wellness Center, 306 Flora Dr, Columbia, SC 29223" },
      { label: "Practices", value: "Tue–Thu · 1-hour Coerver sessions at 5, 6, or 7 PM" },
      { label: "Games", value: "Friday nights" },
    ],
    feeRows: [
      {
        format: "Regular registration",
        ageGroups: "June 11 – August 10, 2026",
        fee: "$110",
        seasons: "Fall 2026",
      },
      {
        format: "Late registration",
        ageGroups: "August 10 – August 17, 2026",
        fee: "$130",
        seasons: "Fall 2026",
      },
    ],
    feeNotes: [
      "Regular registration for Fall 2026 is $110 through August 10, 2026.",
      "Registration includes the seasonal league experience and a full MLS team uniform: shirt, shorts, and socks.",
      "Each registered player receives one ticket to a Charlotte FC home match.",
      "Financial support may be available through the MLS GO Play Fund for qualifying families.",
    ],
    faq: [
      {
        question: "What are the registration fees?",
        answer:
          "Regular registration is $110 from June 11 through August 10, 2026. Late registration is $130 from August 10 through August 17, 2026.",
      },
      {
        question: "What does registration include?",
        answer:
          "Registration covers the Fall 2026 league experience, one-hour Coerver practice sessions, Friday night games, a full MLS team uniform (shirt, shorts, and socks), and one Charlotte FC ticket per registered child.",
      },
      {
        question: "When and where do practices and games happen?",
        answer:
          "Practices and games begin the week of August 17, 2026 at Richland County Wellness Center (306 Flora Dr, Columbia, SC 29223). Coerver practices run Tuesday through Thursday at 5, 6, or 7 PM, and games are played on Friday nights. The last game of the season is October 2, 2026.",
      },
      {
        question: "When can families register?",
        answer:
          "Regular registration runs June 11 through August 10, 2026 at $110. Late registration runs August 10 through August 17, 2026 at $130.",
      },
    ],
    primaryCtaLabel: "Register For MLS GO",
    primaryCtaHref: linksConfig.recreationalRegistration,
    secondaryCtaLabel: "View Location",
    secondaryCtaHref: "/fields/",
  },
];

export function getProgramBySlug(slug: string) {
  return programsConfig.find((program) => program.slug === slug);
}
