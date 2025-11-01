import MainTitle from "@/components/mainTitle/mainTitle";
import useContactPage from "@/hooks/useContactPage";

export default function ContactPage() {
  const config = useContactPage();

  return (
    <div className="flex flex-col">
      <MainTitle text={config.title} />
    </div>
  );
}
