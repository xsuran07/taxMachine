import { useRouter } from "next/navigation";

export interface serviceCardConfig {
  buttonText: string;
  buttonClickedHandler: () => void;
}

export default function useServiceCard(targetUrl: string): serviceCardConfig {
  const router = useRouter();

  return {
    buttonText: "Vybrat",
    buttonClickedHandler: () => {
      router.push(targetUrl);
    },
  };
}
