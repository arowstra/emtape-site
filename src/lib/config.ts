// EmTape Website Configuration
// Update all placeholders here before launching

export const CONFIG = {
  appName: "EmTape",
  tagline: "A smarter calculator with a paper tape memory.",
  
  // Placeholders — update before launch
  launchDate: "1 June 2026",
  supportEmail: "arowoduyestrategy@gmail.com",
  websiteUrl: "[Insert website URL]",
  governingJurisdiction: "Nigeria",
  companyLegalName: "Arowoduye Prime Strategy LTD",
  
  // App Store links — update when available
  appStoreUrl: "#",
  googlePlayUrl: "#"
} as const;

export type Config = typeof CONFIG;
