import { linksConfig } from "@/config/links.config";
import type { HeroAnnouncement, HeroSlide, NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "About", href: "/about/" },
  {
    label: "Programs",
    children: [
      { label: "Junior Academy", href: "/programs/junior-academy/" },
      { label: "Select", href: "/programs/select/" },
      { label: "Recreational", href: "/programs/recreational/" },
    ],
  },
  { label: "Fields", href: "/fields/" },
  { label: "News", href: "/news/" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "current-season",
    eyebrow: "Current Season",
    title: "Registration dates, evaluations, and club updates.",
    body:
      "Check current registration links, evaluation details, and the latest club news.",
    image: "/images/night-field.png",
    ctaLabel: "See Current Updates",
    ctaHref: "/news/",
    secondaryCtaLabel: "Register For MLS GO",
    secondaryCtaHref: linksConfig.recreationalRegistration,
  },
  {
    id: "evaluations",
    eyebrow: "Competitive Programs",
    title: "Interested in Junior Academy or Select?",
    body:
      "Reach out to the club for more information about competitive pathways, placement options, and how to get started.",
    image: "/images/evaluations-2026-team-huddle.jpg",
    ctaLabel: "Contact the Club",
    ctaHref: linksConfig.contact,
    details: [
      { label: "Programs", value: "Junior Academy & Select" },
      { label: "Next step", value: "Contact the club for details" },
    ],
    secondaryCtaLabel: "Learn More",
    secondaryCtaHref: "/programs/junior-academy/",
  },
  {
    id: "academy",
    eyebrow: "Junior Academy",
    title: "Junior Academy for U8 to U12 players ready for competitive development.",
    body:
      "Players train in a structured environment with strong coaching, league play, and year-round development.",
    image: "/images/select-action.jpg",
    ctaLabel: "Contact the Club",
    ctaHref: linksConfig.contact,
    secondaryCtaLabel: "Explore Junior Academy",
    secondaryCtaHref: "/programs/junior-academy/",
  },
  {
    id: "world-cup-fantasy",
    eyebrow: "World Cup 2026",
    title: "Pick your squad. Play with BSC.",
    body:
      "The FIFA World Cup is here. Join our club fantasy league—build your team, set your captain, and compete with Blythewood families all tournament long.",
    image: "/images/world-cup-fantasy-hero.jpg",
    ctaLabel: "Join the League",
    ctaHref: linksConfig.worldCupFantasyJoin,
    details: [
      { label: "League code", value: "JG3WHC6O" },
      { label: "Your squad", value: "15 players · live subs & captaincy" },
      { label: "Who it's for", value: "Fans and first-timers alike" },
    ],
    secondaryCtaLabel: "Strategy Guide",
    secondaryCtaHref: linksConfig.worldCupFantasyStrategyGuide,
  },
  {
    id: "recreation",
    eyebrow: "MLS GO Recreation",
    title: "Fall MLS GO registration is open.",
    body:
      "Register for Fall 2026 MLS GO recreational soccer. Practices and games begin the week of August 17 at Richland County Wellness Center with Coerver training and Friday night games.",
    image: "/images/recreation-family.png",
    ctaLabel: "Register For MLS GO",
    ctaHref: linksConfig.recreationalRegistration,
    details: [
      { label: "Regular registration", value: "June 11 – Aug 10 · $110" },
      { label: "Season begins", value: "Week of August 17, 2026" },
      { label: "Location", value: "Richland County Wellness Center" },
    ],
    secondaryCtaLabel: "Explore Recreation",
    secondaryCtaHref: "/programs/recreational/",
  },
  {
    id: "open-roles",
    eyebrow: "Open Roles",
    title: "We're looking for coaches and leaders.",
    body:
      "Blythewood is hiring coaches and welcoming volunteers who want to help lead the club. Open positions span recreation, academy, select, and club leadership.",
    image: "/images/evaluations-2026-team-huddle.jpg",
    ctaLabel: "Apply Now",
    ctaHref: linksConfig.contact,
    contactSubject: "Open Role Inquiry",
    details: [
      { label: "MLS GO Recreational Director", value: "Program leadership" },
      { label: "Academy Team Coaches", value: "Junior Academy teams" },
      { label: "Select Team Coaches", value: "Select-level teams" },
      { label: "Treasurer", value: "Finance & budget oversight" },
      { label: "Vice President", value: "Leadership & strategic support" },
    ],
  },
];

const heroCarouselSlideIds = [
  "world-cup-fantasy",
  "evaluations",
  "recreation",
  "open-roles",
] as const;

export const heroCarouselSlides: HeroSlide[] = heroCarouselSlideIds
  .map((id) => heroSlides.find((slide) => slide.id === id))
  .filter((slide): slide is HeroSlide => Boolean(slide));

export const heroAnnouncements: HeroAnnouncement[] = [
  {
    id: "world-cup-fantasy",
    status: "Join now",
    label: "World Cup Fantasy",
    title: "BSC World Cup Fantasy League is live.",
    description:
      "Build your squad, pick your captain, and follow the 2026 World Cup with Blythewood families. League code JG3WHC6O.",
    href: linksConfig.worldCupFantasyJoin,
    ctaLabel: "Join the League",
  },
  {
    id: "evaluations-info",
    status: "Learn more",
    label: "Competitive Programs",
    title: "Junior Academy and Select pathways.",
    description:
      "Contact the club for more information about competitive programs, placement options, and next steps.",
    href: linksConfig.contact,
    ctaLabel: "Contact the Club",
  },
  {
    id: "recreation-live",
    status: "Registration live",
    label: "MLS GO Recreation",
    title: "Fall 2026 MLS GO registration is open.",
    description:
      "Regular registration runs June 11 through August 10, with practices and games beginning the week of August 17 at RCWC.",
    href: linksConfig.recreationalRegistration,
    ctaLabel: "Register For MLS GO",
  },
  {
    id: "club-updates",
    status: "Latest info",
    label: "Club Updates",
    title: "News, dates, and season updates.",
    description:
      "Visit the news page for club announcements, registration dates, and season updates.",
    href: "/news/",
    ctaLabel: "Read Updates",
  },
];

export const siteConfig = {
  name: "Blythewood Soccer Club",
  shortName: "Blythewood SC",
  url: "https://www.blythewoodsoccer.com",
  description:
    "Modern youth soccer pathways for Blythewood-area families, with competitive and recreational programs powered by clear registration through PlayMetrics.",
  tagline: "Youth soccer for families who want a stronger local club experience.",
  defaultOgImage: "/images/evaluations-hero.jpg",
  phone: "803-402-3605",
  email: "info@blythewoodsoccer.com",
  addressLines: ["PO Box 983", "Blythewood, South Carolina 29016"],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/BlythewoodSoccer" },
    { label: "Instagram", href: "https://www.instagram.com/blythewoodsoccer/" },
    { label: "YouTube", href: "https://www.youtube.com/@blythewoodsoccer" },
  ],
  nav: mainNav,
  heroSlides,
  heroAnnouncements,
  homeProofPoints: [
    {
      title: "Local club community",
      body:
        "Blythewood Soccer Club serves families who want a strong local soccer environment built around consistency, care, and community.",
    },
    {
      title: "Development-focused coaching",
      body:
        "Players train in age-appropriate environments that build confidence, technique, and understanding of the game.",
    },
    {
      title: "Clear season communication",
      body:
        "Families can find registration links, evaluation details, and important club updates in one place.",
    },
  ],
  homeHighlights: [
    "Competitive and recreational pathways that make sense for real families.",
    "Training partnerships that raise the quality of the weekly environment.",
    "A local club identity rooted in Blythewood and the surrounding region.",
  ],
  aboutExpectations: [
    {
      title: "Clear communication",
      body:
        "Families should know registration dates, team expectations, and where club communication will come from.",
    },
    {
      title: "Age-appropriate standards",
      body:
        "Players should be challenged at the right level, with development and enjoyment staying central to the experience.",
    },
    {
      title: "Local club identity",
      body:
        "Blythewood should feel like a serious soccer environment that still stays connected to the families and community around it.",
    },
  ],
  aboutSections: [
    {
      title: "Our Mission",
      body:
        "Blythewood Soccer Club is committed to making the game accessible, enjoyable, and developmental for players of different backgrounds and ability levels. The club is built around quality coaching, confidence, teamwork, and a family-friendly environment.",
    },
    {
      title: "Who We Are",
      body:
        "The club was founded to create meaningful local opportunities for young athletes to learn, compete, and stay connected to the game close to home. Coaches, parents, and volunteers shape the culture together and keep the community at the center.",
    },
    {
      title: "Our Approach",
      body:
        "Blythewood believes soccer should be both aspirational and welcoming. Programs are structured around skill development, game understanding, character, and a supportive environment that helps every player keep growing.",
    },
  ],
} as const;
