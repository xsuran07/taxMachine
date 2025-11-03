import FormControlButton from "@/components/formControlButtons/formControlButton";
import FormStepsIndicator from "@/components/formStepsIndicator/formStepsIndicator";
import TaxEvaluation from "@/components/taxEvaluation/taxEvaluation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row">
        <div className="flex h-full flex-col justify-start gap-4 md:sticky md:top-26">
          <FormStepsIndicator />
          <TaxEvaluation />
        </div>
        {children}
      </div>
      <FormControlButton />
    </div>
  );
}
