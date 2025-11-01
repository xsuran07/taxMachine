import MainTitle from "@/components/mainTitle/mainTitle";
import useServicesPage from "@/hooks/useServicesPage";

export default function ServicesPage() {
  const config = useServicesPage();

  return (
    <div className="flex flex-col">
      <MainTitle text={config.title} />
    </div>
  );
}
