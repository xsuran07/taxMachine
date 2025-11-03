import { optionalFormFieldSetData } from "@/components/optionalFormFieldSet/types";

export interface taxReliefFormConfig {
  title: string;
  partnerData: optionalFormFieldSetData;
  childrenData: optionalFormFieldSetData;
  pensionData: optionalFormFieldSetData;
  mortgageData: optionalFormFieldSetData;
}

export default function useTaxReliefForm(): taxReliefFormConfig {
  return {
    title: "Úlevy na dani",
    partnerData: {
      name: "partnerRelief",
      question: "Uplatňuji slevu na manželku / manžela",
      title: "Sleva na manželku / manžela",
    },
    childrenData: {
      name: "childrenRelief",
      question: "Uplatňuji slevu na děti",
      title: "Sleva na děti",
    },
    pensionData: {
      name: "pensionRelief",
      question: "Platím DIP / PP / ŽP",
      title: "DIP / PP / ŽP",
    },
    mortgageData: {
      name: "mortgageRelief",
      question: "Platím úroky z hypotéky / úvěru na bydlení",
      title: "Hypotéka / úvěr na bydlení",
    },
  };
}
