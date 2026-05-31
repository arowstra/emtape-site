// EmTape Website Configuration
// Update all placeholders here before launching

export const CONFIG = {
  appName: "EmTape",
  tagline: "A smarter calculator with a paper tape memory.",
  
  // Placeholders — update before launch
  launchDate: "[Insert launch date]",
  supportEmail: "[Insert support email]",
  websiteUrl: "[Insert website URL]",
  governingJurisdiction: "[Insert governing jurisdiction]",
  companyLegalName: "[Insert company/developer legal name]",
  
  // App Store links — update when available
  appStoreUrl: "#",
  googlePlayUrl: "#",
  
  // Social / other links
  twitterUrl: "#",
} as const;

export type Config = typeof CONFIG;
