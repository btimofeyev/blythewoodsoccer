export const contactConfig = {
  email: "blythewoodsoccerclub@gmail.com",
  formHref: "#contact",
  defaultSubject: "Competitive Program Inquiry",
  openRolesSubject: "Open Role Inquiry",
} as const;

export function isContactFormHref(href: string) {
  return href === contactConfig.formHref;
}
