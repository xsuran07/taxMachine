import MainTitle from "@/components/mainTitle/mainTitle";
import useSummaryForm from "./useSummaryForm";
import FormFieldSet from "@/components/formFieldSet/formFieldSet";
import Link from "next/link";

export default function SummaryForm() {
  const config = useSummaryForm();

  return (
    <div className="flex flex-col gap-4">
      <MainTitle text={config.title} />

      <div className="rounded-box w-xs border border-red-500 bg-red-400 p-4">
        <h3 className="mb-6 text-lg font-bold">Chyby nalezené ve formuláři</h3>

        <h4 className="text-md font-bold">Osobní údaje</h4>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <Link
              className="link link-hover"
              href="/services/naturalPersonFull/personalInfo"
            >
              Jméno
            </Link>
          </li>
          <li>
            <Link
              className="link link-hover"
              href="/services/naturalPersonFull/personalInfo"
            >
              Příjmení
            </Link>
          </li>
        </ul>

        <h4 className="text-md font-bold">Zdroje příjmů</h4>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <Link
              className="link link-hover"
              href="/services/naturalPersonFull/income"
            >
              Typ pracovního úvazku
            </Link>
          </li>
        </ul>

        <h4 className="text-md font-bold">Úlevy na dani</h4>
        <ul className="list-inside list-disc">
          <li>
            <Link
              className="link link-hover"
              href="/services/naturalPersonFull/taxRelief"
            >
              Jmého dítěte
            </Link>
          </li>
          <li>
            <Link
              className="link link-hover"
              href="/services/naturalPersonFull/taxRelief"
            >
              Příjmení dítěte
            </Link>
          </li>
          <li>
            <Link
              className="link link-hover"
              href="/services/naturalPersonFull/taxRelief"
            >
              Rodné číslo dítěte
            </Link>
          </li>
        </ul>
      </div>

      <FormFieldSet {...config.contactEmail} />

      <div className="flex justify-between">
        <span className="text-2xl font-bold">Cena</span>
        <span className="text-2xl">150 Kč</span>
      </div>
    </div>
  );
}
