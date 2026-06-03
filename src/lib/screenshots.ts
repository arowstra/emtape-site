import type { StaticImageData } from "next/image";
import actionsMenu from "@/assets/screens/actions-menu.jpg";
import createTemplate from "@/assets/screens/create-template.jpg";
import darkTapeWages from "@/assets/screens/dark-tape-wages.jpg";
import documentsHome from "@/assets/screens/documents-home.jpg";
import documentsList from "@/assets/screens/documents-list.jpg";
import financeTools from "@/assets/screens/finance-tools.jpg";
import settingsAppearance from "@/assets/screens/settings-appearance.jpg";
import settingsExport from "@/assets/screens/settings-export.jpg";
import settingsPlanLegal from "@/assets/screens/settings-plan-legal.jpg";
import tapeDebtRepayment from "@/assets/screens/tape-debt-repayment.jpg";
import tapeNegativeTotal from "@/assets/screens/tape-negative-total.jpg";
import templatesList from "@/assets/screens/templates-list.jpg";

type Screenshot = {
  alt: string;
  src: StaticImageData;
};

export const SCREENSHOTS = {
  actionsMenu: {
    src: actionsMenu,
    alt: "EMTape calculation action menu with export, rename, duplicate, pin, folder, template, clear, and delete options.",
  },
  createTemplate: {
    src: createTemplate,
    alt: "EMTape create template modal with title, category, description, and row controls.",
  },
  darkTapeWages: {
    src: darkTapeWages,
    alt: "EMTape dark mode tape showing wages and a percentage deduction on the calculator keypad screen.",
  },
  documentsHome: {
    src: documentsHome,
    alt: "EMTape documents workspace with new calculation, template, folder, search, and filter controls.",
  },
  documentsList: {
    src: documentsList,
    alt: "EMTape document cards showing saved calculations, totals, timestamps, line counts, and folder status.",
  },
  financeTools: {
    src: financeTools,
    alt: "EMTape finance tools sheet with discount, tax, profit margin, markup, commission, percentage change, split payment, and loan shortcuts.",
  },
  settingsAppearance: {
    src: settingsAppearance,
    alt: "EMTape settings screen with theme, accent color, tape density, font style, and calculation preferences.",
  },
  settingsExport: {
    src: settingsExport,
    alt: "EMTape export settings showing PDF style, expressions, footer options, and local storage with backup and restore.",
  },
  settingsPlanLegal: {
    src: settingsPlanLegal,
    alt: "EMTape settings showing privacy and security, support and legal links, yearly plan, saved histories, tape rows, folders, and restore purchases.",
  },
  tapeDebtRepayment: {
    src: tapeDebtRepayment,
    alt: "EMTape debt repayment tape showing opening balance, payment made, interest, and the live calculator keypad.",
  },
  tapeNegativeTotal: {
    src: tapeNegativeTotal,
    alt: "EMTape tape with a red negative total after subtracting a larger amount from the running balance.",
  },
  templatesList: {
    src: templatesList,
    alt: "EMTape template library with reusable finance layouts like daily sales, loan calculation, and profit and margin.",
  },
} satisfies Record<string, Screenshot>;
