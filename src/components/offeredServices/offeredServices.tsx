import ServiceCard from "./serviceCard";
import { offeredServicesProps } from "./types";

export default function OfferedServices(props: offeredServicesProps) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-4">
      {props.offeredServices.map((offeredService, index) => (
        <ServiceCard key={index} offeredServiceData={offeredService} />
      ))}
    </div>
  );
}
