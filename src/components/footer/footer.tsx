import { FooterProps } from "./types";
import ContactItem from "./contactItem";

export default function Footer(props: FooterProps) {
  return (
    <footer className="bg-base-300 align-center flex flex-col gap-8 px-26 py-6">
      <div className="footer sm:footer-horizontal text-base-content justify-center md:justify-between">
        <nav>
          <h6 className="footer-title">{props.documentsTitle}</h6>
          {props.documents.map((document, index) => (
            <a key={index} href={document.url} className="link link-hover">
              {document.label}
            </a>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">{props.billingInfoTitle}</h6>
          {props.billingInfo.map((billingInfoItem, index) => (
            <p key={index}>{billingInfoItem}</p>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">{props.contactItemsTitle}</h6>
          {props.contactItems.map((contactItem, index) => (
            <ContactItem key={index} contactItem={contactItem} />
          ))}
        </nav>
      </div>
      <aside>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
}
