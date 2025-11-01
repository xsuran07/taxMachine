import { FaqProps } from "@/components/faq/types";

export interface HomePageProps {
  title: string;
  introText: string[];
  introImageSrc: string;
  servicesSubtitle: string;
  faqSubtitle: string;
  faqData: FaqProps;
  reviewsSubtitle: string;
}

export default function useHomePage(): HomePageProps {
  return {
    title: "Elektronické daňové přiznání",
    introText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus faucibus eros at tempor. In bibendum accumsan purus in ornare. \
      Praesent congue hendrerit ante, vitae egestas massa gravida eget. Mauris faucibus luctus dolor a volutpat. Integer pretium euismod aliquam. \
      Quisque quis pharetra lacus.",
      "Donec tellus neque, luctus nec mauris vitae, fringilla sollicitudin turpis. Aliquam auctor quam vitae mauris pharetra tempor. \
      Fusce ante massa, suscipit sed scelerisque a, dapibus convallis libero. Duis tempus, magna ut rhoncus rutrum, dolor turpis varius lacus, \
      ut feugiat augue massa eget purus. Donec vestibulum fringilla euismod. Aliquam finibus risus felis, a lacinia lorem imperdiet at.",
    ],
    introImageSrc: "/images/home/intro.jpg",
    servicesSubtitle: "Co nabízíme",
    faqSubtitle: "Často kladené otázky",
    faqData: {
      faqItems: [
        {
          question:
            "Morbi sed sagittis ante, nec efficitur massa. Ut faucibus metus ut est vehicula tincidunt?",
          answer:
            "Mauris faucibus luctus dolor a volutpat. Integer pretium euismod aliquam. Quisque quis pharetra lacus. Curabitur neque sem, \
          tempus ac molestie vitae, pretium ut eros. Mauris blandit elit nec leo ornare pulvinar.",
        },
        {
          question:
            "Mauris faucibus, ipsum vitae maximus ultrices, magna ipsum varius erat, ut pharetra metus enim eu ipsum?",
          answer:
            "Morbi aliquet, ligula ut suscipit cursus, leo sapien sollicitudin nibh, at auctor turpis nunc non magna. Suspendisse potenti. \
          Donec tellus neque, luctus nec mauris vitae, fringilla sollicitudin turpis. Aliquam auctor quam vitae mauris pharetra tempor.",
        },
        {
          question:
            "Etiam pulvinar malesuada tempor. Mauris non finibus nisi, id aliquam massa?",
          answer:
            "Aliquam sit amet auctor risus, sed tincidunt neque. Fusce in eros ultricies turpis tincidunt suscipit. Phasellus sagittis mi \
          egestas ante varius, nec elementum est sodales. Nulla quis odio posuere, convallis ante vel, maximus purus. Maecenas vel posuere ex, \
          at ullamcorper ipsum.",
        },
        {
          question:
            "Ut sit amet vestibulum nisl. Nunc non purus pulvinar, pretium eros vel, pellentesque nunc?",
          answer:
            "Curabitur interdum non diam et condimentum. Vivamus ac diam dolor. Curabitur nibh massa, mollis eu volutpat id, ultrices vel \
          leo. Suspendisse tincidunt eleifend faucibus. Quisque nisi leo, hendrerit in enim sed, varius tempus risus.",
        },
        {
          question:
            "Maecenas dolor enim, tempor vestibulum ligula vel, lacinia volutpat odio?",
          answer:
            "Fusce molestie malesuada ultricies. Nullam sodales cursus nulla sit amet scelerisque. Integer id commodo tellus. Proin auctor diam \
          sed elit tempus porttitor. Curabitur aliquam vel dolor vulputate accumsan. Nunc efficitur posuere velit non faucibus. Curabitur gravida a \
          dolor ac feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          question:
            "Fusce luctus id nibh interdum fermentum. Morbi eget porta nibh?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus faucibus eros at tempor. In bibendum accumsan purus in \
          ornare. Praesent congue hendrerit ante, vitae egestas massa gravida eget. Mauris faucibus luctus dolor a volutpat. Integer pretium euismod \
          aliquam. Quisque quis pharetra lacus.",
        },
      ],
    },
    reviewsSubtitle: "Recenze našich klientů",
  };
}
