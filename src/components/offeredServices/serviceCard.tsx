"use client";

import Image from "next/image";
import { serviceCardProps } from "./types";
import useServiceCard from "./useServiceCard";

export default function ServiceCard(props: serviceCardProps) {
  const config = useServiceCard(props.offeredServiceData.targetUrl);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          src={props.offeredServiceData.imageSrc}
          alt={`Image for ${props.offeredServiceData.title}`}
          width={384}
          height={256}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            {props.offeredServiceData.title}
          </h2>
        </div>
        <p>{props.offeredServiceData.description}</p>
        <div className="flex items-center justify-center">
          <span className="badge badge-warning badge-xl">
            {props.offeredServiceData.prize}
          </span>
        </div>
        <div className="mt-6">
          <button
            onClick={config.buttonClickedHandler}
            className="btn btn-primary btn-block"
          >
            {config.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
