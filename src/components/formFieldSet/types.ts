export interface inputField {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

export interface formFieldSetProps {
  title: string;
  textFields: inputField[];
}
