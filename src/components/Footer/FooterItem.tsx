import React from "react";
import { footertype } from "@/typescript/type";
import Link from "next/link";

interface itemsprops {
  items: footertype["links"];
}
function FooterItem({ items }: itemsprops) {
  return (
    <div className="footer_items">
      {items?.map((item, index) => {
        return (
          <div className="footer_items__links" key={index}>
            <h5 className="footer_items__title">{item.title}</h5>
            <ul>
              {item.links?.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default FooterItem;
