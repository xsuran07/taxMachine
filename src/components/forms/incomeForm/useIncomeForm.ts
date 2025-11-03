import { optionalFormFieldSetData } from "@/components/optionalFormFieldSet/types";

export interface incomeFormConfig {
  title: string;
  employmentData: optionalFormFieldSetData;
  rentingData: optionalFormFieldSetData;
  foreignIncomeData: optionalFormFieldSetData;
  otherIncomeData: optionalFormFieldSetData;
}

export default function useIncomeFormConfig(): incomeFormConfig {
  return {
    title: "Zdroje příjmů",
    employmentData: {
      name: "employment",
      question: "Mám příjmy ze zaměstnání v ČR",
      title: "Zaměstnání",
    },
    rentingData: {
      name: "renting",
      question: "Mám příjmy z pronájmu",
      title: "Pronájem",
    },
    foreignIncomeData: {
      name: "foreignIncome",
      question: "Mám příjmy ze zahraničí",
      title: "Příjmy ze zahranicí",
    },
    otherIncomeData: {
      name: "otherIncome",
      question: "Mám jiné příjmy (např. prodeje cenných papírů)",
      title: "Ostatní příjmy",
    },
  };
}
