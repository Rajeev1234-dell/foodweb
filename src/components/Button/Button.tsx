import Link from "next/link";
import React from "react";

function Button({ label, link, btnclass }: any) {
  return (
    <Link href={link} className={`btn btn__${btnclass}`}>
      {label}
    </Link>
  );
}

export default Button;
