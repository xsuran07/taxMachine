export interface offeredServicesProps {
  offeredServices: offeredServiceData[];
}

export interface serviceCardProps {
  offeredServiceData: offeredServiceData;
}

export interface offeredServiceData {
  imageSrc: string;
  title: string;
  prize: string;
  description: string;
  targetUrl: string;
}
