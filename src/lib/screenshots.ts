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
    alt: "EmTape light calculator tape showing multiplication, running totals, toolbar actions, and the numeric keypad.",
  },
  createTemplate: {
    src: createTemplate,
    alt: "EmTape create template modal with title, category, description, and row controls.",
  },
  darkTapeWages: {
    src: darkTapeWages,
    alt: "EmTape dark mode calculator tape showing dollar entries, a total, toolbar controls, and the keypad.",
  },
  documentsHome: {
    src: documentsHome,
    alt: "EmTape documents workspace with new calculation, template, folder, search, and filter controls.",
  },
  documentsList: {
    src: documentsList,
    alt: "EmTape dark mode blank calculator tape with toolbar controls and keypad ready for input.",
  },
  financeTools: {
    src: financeTools,
    alt: "EmTape finance tools sheet with discount, tax, profit margin, markup, commission, percentage change, split payment, and loan shortcuts.",
  },
  settingsAppearance: {
    src: settingsAppearance,
    alt: "EmTape dark settings screen with appearance controls, currency settings, decimal places, and bottom navigation.",
  },
  settingsExport: {
    src: settingsExport,
    alt: "EmTape light settings screen showing calculation, keypad, and export preferences.",
  },
  settingsPlanLegal: {
    src: settingsPlanLegal,
    alt: "EmTape settings screen showing plan limits, manage plan, restore purchases, export tools, and product version.",
  },
  tapeDebtRepayment: {
    src: tapeDebtRepayment,
    alt: "EmTape debt repayment tape showing opening balance, payment made, interest, and the live calculator keypad.",
  },
  tapeNegativeTotal: {
    src: tapeNegativeTotal,
    alt: "EmTape debt repayment tape showing a percentage deduction, running balance, and calculator keypad.",
  },
  templatesList: {
    src: templatesList,
    alt: "EmTape currency selector sheet showing search and currency options including Nigerian Naira, US Dollar, Euro, and British Pound.",
  },
} satisfies Record<string, Screenshot>;
