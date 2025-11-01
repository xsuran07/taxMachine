export interface HomePageProps {
  title: string;
  introText: string[];
  introImageSrc: string;
  servicesSubtitle: string;
  faqSubtitle: string;
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
    reviewsSubtitle: "Recenze našich klientů",
  };
}
