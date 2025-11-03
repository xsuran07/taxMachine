import InputLabel from "../inputLabel/inputLabel";
import { formFieldSetProps } from "./types";

export default function FormFieldSet(props: formFieldSetProps) {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs gap-3 border p-4">
      <legend className="fieldset-legend">{props.title}</legend>

      {props.textFields.map((textField) => (
        <div key={textField.id} className="flex flex-col gap-1">
          <InputLabel htmlFor={textField.id} required={textField.required}>
            {textField.label}
          </InputLabel>
          <input
            id={textField.id}
            type="text"
            className="input"
            required={textField.required}
            placeholder={textField.placeholder}
          />
        </div>
      ))}
    </fieldset>
  );
}
