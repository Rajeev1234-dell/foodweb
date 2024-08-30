import Link from "next/link";
import React, { useState } from "react";
import { herotype } from "@/typescript/type";
import Image from "next/image";
// import menu from "../../../public/HeroSection/menu_icon.svg";
import cross from "../../../public/HeroSection/cross5.webp";

interface itemsprops {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  clicked: boolean;
  items: herotype["links"];
}

function NavBarItem({ items, clicked, setClicked }: itemsprops) {
  const [close, setClosed] = useState(true);
  return (
    <div className={`navitems ${clicked ? "navitems--modifier" : ""}`}>
      <Image
        width={100}
        height={100}
        src={cross}
        alt=""
        className={`navitems__cross ${clicked ? "nav__visible" : ""}`}
        onClick={() => setClicked(false)}
      />
      <ul>
        {items?.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBarItem;
