export const CONFIG = {
  appName: "EmTape",
  tagline: "Calculator documents, templates, and finance tools in one tape-first workspace.",
  launchDate: "June 1, 2026",
  supportEmail: "arowoduyestrategy@gmail.com",
  websiteUrl: "https://emtape.app",
  governingJurisdiction: "Nigeria",
  companyLegalName: "Arowoduye Prime Strategy LTD",
  trialDays: 15,
  featuredPlanName: "Yearly",
  appStoreUrl: "",
  googlePlayUrl: "",
} as const;

export type Config = typeof CONFIG;
