"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface configItems {
  label: string;
  url: string;
}

const CONFIG: configItems[] = [
  {
    label: "Osobní údaje",
    url: "/services/naturalPersonFull/personalInfo",
  },
  {
    label: "Zdroje příjmů",
    url: "/services/naturalPersonFull/income",
  },
  {
    label: "Úlevy na dani",
    url: "/services/naturalPersonFull/taxRelief",
  },
  {
    label: "Rekapitulace",
    url: "/services/naturalPersonFull/summary",
  },
];

export default function FormStepsIndicator() {
  const pathname = usePathname();
  const currentIndex = CONFIG.map((item) => item.url).indexOf(pathname);

  return (
    <ul className="steps steps-horizontal md:steps-vertical rounded-box border-base-300 border p-2">
      {CONFIG.map((configItem, index) => (
        <Link
          className={`step link-hover ${index <= currentIndex ? "step-primary" : ""} ${index === currentIndex ? "font-bold" : ""}`}
          key={configItem.label}
          href={configItem.url}
        >
          <li>
            <div>{configItem.label}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
