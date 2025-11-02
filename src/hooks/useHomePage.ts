import { FaqProps } from "@/components/faq/types";
import { reviewsProps } from "@/components/reviews/types";

export interface HomePageProps {
  title: string;
  introText: string[];
  introImageSrc: string;
  servicesSubtitle: string;
  faqSubtitle: string;
  faqData: FaqProps;
  reviewsSubtitle: string;
  reviewsData: reviewsProps;
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
    reviewsData: {
      reviews: [
        {
          name: "Petr K.",
          avatarImageSrc: "/images/home/avatar1.png",
          numberOfStars: 10,
          text: "Curabitur neque sem, tempus ac molestie vitae, pretium ut eros. Mauris blandit elit nec leo ornare pulvinar. Morbi aliquet, ligula \
          ut suscipit cursus, leo sapien sollicitudin nibh, at auctor turpis nunc non magna. Suspendisse potenti. Donec tellus neque, luctus nec mauris \
          vitae, fringilla sollicitudin turpis. Aliquam auctor quam vitae mauris pharetra tempor. Fusce ante massa, suscipit sed scelerisque a, dapibus \
          convallis libero.",
        },
        {
          name: "Martin. Š.",
          avatarImageSrc: "/images/home/avatar2.png",
          numberOfStars: 9,
          text: "Nam quam nunc, tempus at malesuada laoreet, laoreet et est. Aliquam sit amet auctor risus, sed tincidunt neque. Fusce in eros ultricies \
          turpis tincidunt suscipit. Phasellus sagittis mi egestas ante varius, nec elementum est sodales. Nulla quis odio posuere, convallis ante vel, \
          maximus purus. Maecenas vel posuere ex, at ullamcorper ipsum.",
        },
        {
          name: "Klára M.",
          avatarImageSrc: "/images/home/avatar3.png",
          numberOfStars: 8,
          text: "Fusce molestie malesuada ultricies. Nullam sodales cursus nulla sit amet scelerisque. Integer id commodo tellus. Proin auctor diam sed \
          elit tempus porttitor. Curabitur aliquam vel dolor vulputate accumsan. Nunc efficitur posuere velit non faucibus. Curabitur gravida a dolor ac \
          feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
        },
        {
          name: "Jan F.",
          avatarImageSrc: "/images/home/avatar4.png",
          numberOfStars: 9,
          text: "Nam vestibulum convallis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non feugiat erat. Proin blandit \
          ullamcorper est, vitae aliquet sapien iaculis ac. Fusce et aliquet est, nec imperdiet lorem. Nulla et magna et sem pretium dictum. Etiam \
          posuere est risus, a condimentum lorem mattis ut. Morbi consectetur magna sed augue ornare tincidunt. Praesent egestas auctor ultricies. \
          Fusce vitae vehicula lectus. Praesent iaculis dolor quis nulla lobortis aliquam. ",
        },
      ],
    },
  };
}
