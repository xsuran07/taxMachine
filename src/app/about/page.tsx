import MainTitle from "@/components/mainTitle/mainTitle";
import useAboutPage from "@/hooks/useAboutPage";

export default function AboutPage() {
  const config = useAboutPage();

  return (
    <div className="flex flex-col">
      <MainTitle text={config.title} />
    </div>
  );
}
