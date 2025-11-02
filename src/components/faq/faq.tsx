import { FaqProps } from "./types";

export default function Faq(props: FaqProps) {
  return (
    <div className="join join-vertical bg-base-100">
      {props.faqItems.map((faqItem, index) => (
        <div
          key={index}
          className="collapse-arrow join-item border-base-300 collapse border"
        >
          <input type="checkbox" name="my-accordion-4" />
          <div className="collapse-title font-semibold">{faqItem.question}</div>
          <div className="collapse-content text-sm">{faqItem.answer}</div>
        </div>
      ))}
    </div>
  );
}
