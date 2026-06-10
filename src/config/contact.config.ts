export const contactConfig = {
  email: "info@blythewoodsoccer.com",
  formHref: "#contact",
  defaultSubject: "Competitive Program Inquiry",
  openRolesSubject: "Open Role Inquiry",
} as const;

export function isContactFormHref(href: string) {
  return href === contactConfig.formHref;
}
