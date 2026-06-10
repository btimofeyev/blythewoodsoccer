import type { FieldLocation } from "@/lib/types";

export const fieldsConfig: FieldLocation[] = [
  {
    name: "Richland County Wellness Center",
    address: ["306 Flora Dr", "Columbia, SC 29223"],
    mapsHref: "https://maps.google.com?q=306%20Flora%20Dr,%20Columbia,%20SC%2029223",
    statusHref: "https://www.blythewoodsoccer.com/",
    image: "/images/night-field.png",
    fieldMapLabel: "Field map available at the complex",
    details:
      "RCWC is the main Blythewood Soccer Club location for practices, player evaluations, and club sessions.",
    matchdayNotes: [
      "Use this address for practices, evaluations, and scheduled club sessions.",
      "Save directions before you leave so arrival stays simple on busy club days.",
      "Check club updates if weather changes the schedule.",
    ],
  },
];
