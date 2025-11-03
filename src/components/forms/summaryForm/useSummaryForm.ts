import { formFieldSetProps } from "@/components/formFieldSet/types";

export interface summaryFormConfig {
  title: string;
  contactEmail: formFieldSetProps;
}

export default function useSummaryForm(): summaryFormConfig {
  return {
    title: "Rekapitulace",
    contactEmail: {
      title: "Email pro doručení výsledného přiznání",
      textFields: [
        {
          id: "emailForResultDelivery",
          label: "Email",
          placeholder: "jan.novak@email.cz",
          required: true,
        },
      ],
    },
  };
}
