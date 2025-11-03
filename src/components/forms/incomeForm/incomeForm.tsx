import MainTitle from "@/components/mainTitle/mainTitle";
import useIncomeFormConfig from "./useIncomeForm";
import OptionalFormFieldSet from "@/components/optionalFormFieldSet/optionalFormFieldSet";

export default function IncomeForm() {
  const config = useIncomeFormConfig();

  return (
    <div className="flex flex-col gap-4">
      <MainTitle text={config.title} />

      <OptionalFormFieldSet {...config.employmentData}>
        Nothing there yet ;)
      </OptionalFormFieldSet>

      <OptionalFormFieldSet {...config.rentingData}>
        Nothing there yet ;)
      </OptionalFormFieldSet>

      <OptionalFormFieldSet {...config.foreignIncomeData}>
        Nothing there yet ;)
      </OptionalFormFieldSet>

      <OptionalFormFieldSet {...config.otherIncomeData}>
        Nothing there yet ;)
      </OptionalFormFieldSet>
    </div>
  );
}
