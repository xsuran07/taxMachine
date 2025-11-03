import FormFieldSet from "../../formFieldSet/formFieldSet";
import MainTitle from "../../mainTitle/mainTitle";
import usePersonalInfoForm from "./usePersonalInfoForm";

export default function PersonalInfoForm() {
  const config = usePersonalInfoForm();

  return (
    <div className="flex flex-col gap-4">
      <MainTitle text={config.title} />

      <FormFieldSet {...config.basicInfoData} />
      <FormFieldSet {...config.addressData} />
      <FormFieldSet {...config.contactInfoData} />
    </div>
  );
}
