import MainTitle from "@/components/mainTitle/mainTitle";
import useTaxReliefForm from "./useTaxReliefForm";
import OptionalFormFieldSet from "@/components/optionalFormFieldSet/optionalFormFieldSet";
import InputLabel from "@/components/inputLabel/inputLabel";

export default function TaxReliefForm() {
  const config = useTaxReliefForm();

  return (
    <div className="flex flex-col gap-4">
      <MainTitle text={config.title} />

      <OptionalFormFieldSet {...config.partnerData}>
        <InputLabel htmlFor="partner-name" required>
          Jméno
        </InputLabel>
        <input
          id="partner-name"
          type="text"
          className="input"
          required
          placeholder="Jan"
        />

        <InputLabel htmlFor="partner-surname" required>
          Příjmení
        </InputLabel>
        <input
          id="partner-surname"
          type="text"
          className="input"
          required
          placeholder="Novák"
        />

        <InputLabel htmlFor="partner-birth-number" required>
          Rodné číslo
        </InputLabel>
        <input
          id="partner-birth-number"
          type="text"
          className="input"
          required
          placeholder="1253115123"
        />

        <InputLabel htmlFor="partner-income" required>
          Celkové příjmy manžela / manželky
        </InputLabel>
        <label className="input">
          <input type="text" placeholder="10000" />
          <span className="label">Kč</span>
        </label>

        <InputLabel htmlFor="partner-months" required>
          Počet měsíců uplatnění
        </InputLabel>
        <input
          id="partner-months"
          type="text"
          className="input"
          required
          placeholder="12"
        />
      </OptionalFormFieldSet>

      <OptionalFormFieldSet {...config.childrenData}>
        <InputLabel htmlFor="child-name" required>
          Jméno
        </InputLabel>
        <input
          id="child-name"
          type="text"
          className="input"
          required
          placeholder="Marek"
        />

        <InputLabel htmlFor="child-surname" required>
          Příjmení
        </InputLabel>
        <input
          id="child-surname"
          type="text"
          className="input"
          required
          placeholder="Sochor"
        />

        <InputLabel htmlFor="child-birth-number" required>
          Rodné číslo
        </InputLabel>
        <input
          id="child-birth-number"
          type="text"
          className="input"
          required
          placeholder="1253115123"
        />

        <InputLabel htmlFor="child-months" required>
          Počet měsíců uplatnění
        </InputLabel>
        <input
          id="child-months"
          type="text"
          className="input"
          required
          placeholder="12"
        />
      </OptionalFormFieldSet>

      <OptionalFormFieldSet {...config.pensionData}>
        <InputLabel htmlFor="pension-type" required>
          Typ odpočtu
        </InputLabel>
        <select
          id="pension-type"
          defaultValue="Pick a browser"
          className="select"
        >
          <option>DIP</option>
          <option>PP</option>
          <option>ŽP</option>
        </select>

        <InputLabel htmlFor="pension-amount" required>
          Zaplacená částka
        </InputLabel>
        <label className="input">
          <input id="pension-amount" type="text" placeholder="10000" />
          <span className="label">Kč</span>
        </label>
      </OptionalFormFieldSet>

      <OptionalFormFieldSet {...config.mortgageData}>
        <InputLabel htmlFor="mortgage-amount" required>
          Zaplacená částka
        </InputLabel>
        <label className="input">
          <input id="mortgage-amount" type="text" placeholder="10000" />
          <span className="label">Kč</span>
        </label>

        <InputLabel htmlFor="mortgage-agreement" required>
          Datum uzavření smlouvy
        </InputLabel>
        <input id="mortgage-agreement" type="date" className="input" />

        <InputLabel htmlFor="mortgage-start" required>
          Datum začátku splácení
        </InputLabel>
        <input id="mortgage-start" type="date" className="input" />

        <InputLabel htmlFor="mortgage-file">Smlouva o uzavření</InputLabel>
        <input id="mortgage-file" type="file" className="file-input" />
      </OptionalFormFieldSet>
    </div>
  );
}
