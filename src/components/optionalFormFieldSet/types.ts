export interface optionalFormFieldSetData {
  title: string;
  question: string;
  name: string;
}

export interface optionalFormFieldSetProps extends optionalFormFieldSetData {
  children: React.ReactNode;
}
