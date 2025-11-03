import { inputLabelProps } from "./types";

export default function InputLabel(props: inputLabelProps) {
  return (
    <div className="flex justify-between">
      <label htmlFor={props.htmlFor} className="label text-gray-600">
        {props.children}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <label
        htmlFor={props.htmlFor + "-modal"}
        className="btn btn-circle btn-xs border border-gray-600"
      >
        ?
      </label>

      <input
        type="checkbox"
        id={props.htmlFor + "-modal"}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Vysvětlení</h3>
          <p className="py-4 text-justify">
            Aenean maximus elit ac nunc convallis tristique. Fusce facilisis
            ante turpis, sed molestie dolor ornare eu. Duis tincidunt nibh vel
            sapien condimentum mattis. Aliquam auctor, lorem id blandit
            tincidunt, mauris nibh fringilla massa, id congue quam enim a felis.
            Donec tincidunt dui turpis, pulvinar faucibus erat pretium eget.
          </p>
        </div>
        <label className="modal-backdrop" htmlFor={props.htmlFor + "-modal"}>
          Close
        </label>
      </div>
    </div>
  );
}
