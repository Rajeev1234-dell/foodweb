import Link from "next/link";
import React from "react";

function FooterInstruction({ options }: any) {
  return (
    <div className="footer__setting">
      {options?.map((item: any, index: number) => (
        <Link href={item.link} key={index}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default FooterInstruction;
