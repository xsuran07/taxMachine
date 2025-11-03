"use client";

import { useState } from "react";
import { optionalFormFieldSetProps } from "./types";
import InputLabel from "../inputLabel/inputLabel";

export default function OptionalFormFieldSet(props: optionalFormFieldSetProps) {
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border px-4">
      <legend className="fieldset-legend mb-2">{props.title}</legend>
      <InputLabel htmlFor={props.name}>{props.question}</InputLabel>

      <div className="mt-4 flex gap-4">
        <input
          type="radio"
          name={props.name}
          value={"yes"}
          aria-label="Ano"
          checked={contentVisible}
          onChange={() => setContentVisible(true)}
          className="btn w-20 rounded-3xl"
        />
        <input
          type="radio"
          name={props.name}
          value={"no"}
          aria-label="Ne"
          checked={!contentVisible}
          onChange={() => setContentVisible(false)}
          className="btn w-20 rounded-3xl"
        />
      </div>

      <div
        className={`flex flex-col items-stretch gap-2 overflow-hidden p-1 transition-all duration-300 ease-in-out ${
          contentVisible ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {props.children}
      </div>
    </fieldset>
  );
}
