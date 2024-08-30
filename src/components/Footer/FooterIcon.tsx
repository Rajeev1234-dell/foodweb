import React from "react";
import { footertype } from "@/typescript/type";
import Image from "next/image";
import Link from "next/link";

interface iconsprops {
  icons: footertype["icons"];
}

function FooterIcon({ icons }: iconsprops) {
  return (
    <div className="footer-icons">
      {icons?.map((icon) => (
        <Link href="/">
          <Image
            src={icon}
            width={100}
            height={100}
            alt=""
            className="footer-icons__logo"
          />
        </Link>
      ))}
    </div>
  );
}

export default FooterIcon;
