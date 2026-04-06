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
    secondaryCtaLabel: "Start Registration",
    secondaryCtaHref: linksConfig.clubRegistration,
  },
  {
    id: "evaluations",
    eyebrow: "Tryouts & Evaluations",
    title: "Player evaluations registration is open.",
    body: "Open to all competitive players.",
    image: "/images/evaluations-2026-team-huddle.jpg",
    ctaLabel: "Register Now",
    ctaHref: linksConfig.evaluations,
    details: [
      { label: "Date", value: "May 16th" },
      { label: "Time", value: "10:00 AM - 12:00 PM" },
      { label: "Who", value: "All competitive players" },
    ],
  },
  {
    id: "academy",
    eyebrow: "Junior Academy",
    title: "Junior Academy for U8 to U12 players ready for competitive development.",
    body:
      "Players train in a structured environment with strong coaching, league play, and year-round development.",
    image: "/images/select-action.jpg",
    ctaLabel: "View Evaluations",
    ctaHref: linksConfig.evaluations,
    secondaryCtaLabel: "Explore Junior Academy",
    secondaryCtaHref: "/programs/junior-academy/",
  },
  {
    id: "recreation",
    eyebrow: "MLS GO Recreation",
    title: "MLS GO Recreation for new and returning players.",
    body:
      "A local recreational program with official MLS GO gear, clear season dates, and a fun environment for families.",
    image: "/images/recreation-family.png",
    ctaLabel: "Register For Recreation",
    ctaHref: linksConfig.recreationalRegistration,
    secondaryCtaLabel: "See Current News",
    secondaryCtaHref: "/news/",
  },
];

export const heroAnnouncements: HeroAnnouncement[] = [
  {
    id: "evaluations-open",
    status: "Open now",
    label: "Player Evaluations",
    title: "May competitive evaluations are live.",
    description:
      "Register for the current evaluation window for Junior Academy and Select teams.",
    href: linksConfig.evaluations,
    ctaLabel: "View Evaluations",
  },
  {
    id: "recreation-live",
    status: "Registration live",
    label: "MLS GO Recreation",
    title: "Spring recreation registration is active.",
    description:
      "Recreation is open now with official MLS GO gear, a family-first setup, and a clear seasonal calendar.",
    href: linksConfig.recreationalRegistration,
    ctaLabel: "Register For Recreation",
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
