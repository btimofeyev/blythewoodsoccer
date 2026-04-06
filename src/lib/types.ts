export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  details?: { label: string; value: string }[];
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export type HeroAnnouncement = {
  id: string;
  status: string;
  label: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type ProgramFaq = {
  question: string;
  answer: string;
};

export type ProgramAgeGroup = {
  label: string;
  birthYears: string;
};

export type ProgramFeeRow = {
  format: string;
  ageGroups: string;
  fee: string;
  seasons: string;
};

export type ProgramPage = {
  slug: "junior-academy" | "select" | "recreational";
  title: string;
  ageBand: string;
  summary: string;
  heroImage: string;
  intro: string;
  forPlayers: string[];
  highlights: string[];
  developmentPoints: string[];
  scheduleDetails: string[];
  howToStart: string[];
  seasonLabel?: string;
  ageBreakdown?: ProgramAgeGroup[];
  feeRows?: ProgramFeeRow[];
  feeNotes?: string[];
  faq: ProgramFaq[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export type FieldLocation = {
  name: string;
  address: string[];
  mapsHref: string;
  statusHref?: string;
  image?: string;
  fieldMapLabel?: string;
  details?: string;
  matchdayNotes?: string[];
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  featured?: boolean;
  category?: string;
};

export type NewsPostWithBody = NewsPost & {
  content: React.ReactNode;
};
