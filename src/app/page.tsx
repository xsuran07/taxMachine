import Faq from "@/components/faq/faq";
import MainTitle from "@/components/mainTitle/mainTitle";
import OfferedServices from "@/components/offeredServices/offeredServices";
import Reviews from "@/components/reviews/reviews";
import Subtitle from "@/components/subtitle/subtitle";
import useHomePage from "@/hooks/useHomePage";
import Image from "next/image";

export default function Home() {
  const config = useHomePage();

  return (
    <div className="flex flex-col">
      <MainTitle text={config.title} />

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Image
          src={config.introImageSrc}
          alt="Intro image"
          width={410}
          height={263}
          style={{ minWidth: 410 }}
        />
        <div className="text-justify">
          {config.introText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <Subtitle text={config.servicesSubtitle} />
      <OfferedServices {...config.servicesData} />

      <Subtitle text={config.faqSubtitle} />
      <Faq {...config.faqData} />

      <Subtitle text={config.reviewsSubtitle} />
      <Reviews {...config.reviewsData} />
    </div>
  );
}
