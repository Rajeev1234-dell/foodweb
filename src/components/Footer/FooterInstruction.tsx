import Link from "next/link";
import React from "react";

function FooterInstruction({ options }: any) {
  return (
    <div className="footer__setting">
      {options?.map((item: any) => (
        <Link href={item.link}>{item.label}</Link>
      ))}
    </div>
  );
}

export default FooterInstruction;
