import { formFieldSetProps } from "../../formFieldSet/types";

export interface personalInfoFormConfig {
  title: string;
  basicInfoData: formFieldSetProps;
  addressData: formFieldSetProps;
  contactInfoData: formFieldSetProps;
}

export default function usePersonalInfoForm(): personalInfoFormConfig {
  return {
    title: "Osobní údaje",
    basicInfoData: {
      title: "Základní údaje",
      textFields: [
        {
          id: "name",
          label: "Jméno",
          placeholder: "Jana",
          required: true,
        },
        {
          id: "surname",
          label: "Příjmení",
          placeholder: "Nováková",
          required: true,
        },
        {
          id: "birthSurname",
          label: "Rodné příjmení",
          placeholder: "Veselá",
        },
        {
          id: "degree",
          label: "Titul",
          placeholder: "Ing.",
        },
        {
          id: "birthNumber",
          label: "Rodné číslo",
          placeholder: "8801011234",
          required: true,
        },
        {
          id: "citizenship",
          label: "Státní příslušnost",
          placeholder: "Česká republika",
          required: true,
        },
      ],
    },
    addressData: {
      title: "Aktuální addresa místa pobytu",
      textFields: [
        {
          id: "streetNumber",
          label: "Číslo orientační",
          placeholder: "123",
        },
        {
          id: "houseNumber",
          label: "Číslo popisné",
          placeholder: "897",
          required: true,
        },
        {
          id: "municipality",
          label: "Obec",
          placeholder: "Praha",
          required: true,
        },
        {
          id: "county",
          label: "Stát",
          placeholder: "Česká republika",
          required: true,
        },
      ],
    },
    contactInfoData: {
      title: "Konktatní údaje",
      textFields: [
        {
          id: "phoneNumber",
          label: "Telefonní číslo",
          placeholder: "893 983 932",
          required: true,
        },
        {
          id: "email",
          label: "Email",
          placeholder: "jana.novakova@email.cz",
          required: true,
        },
      ],
    },
  };
}
