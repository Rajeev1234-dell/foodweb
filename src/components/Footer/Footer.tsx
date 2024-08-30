import React from "react";
import { footertype } from "@/typescript/type";
import Image from "next/image";
import FooterItem from "./FooterItem";
import FooterInput from "./FooterInput";
import FooterIcon from "./FooterIcon";
import FooterInstruction from "./FooterInstruction";

interface footerprops {
  footer_data: footertype;
}

function Footer({ footer_data }: footerprops) {
  return (
    <footer className="footer container">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__logo">
            <Image src={footer_data.logo} width={100} height={100} alt="" />
          </div>
          <p className="footer__desc">{footer_data.desc}</p>
        </div>
        <FooterItem items={footer_data.links} />
        <FooterInput footer_form={footer_data} />
      </div>
      <div className="footer__copy-right">
        <p className="footer__claim">{footer_data.copyright}</p>
        <FooterInstruction options={footer_data.settings} />
        <FooterIcon icons={footer_data.icons} />
      </div>
    </footer>
  );
}

export default Footer;
