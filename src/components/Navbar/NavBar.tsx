"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import Button from "../Button/Button";
import { herotype } from "@/typescript/type";
import Link from "next/link";

interface navprops {
  logo: string;
  nav_links: herotype["links"];
  btn_label: string;
  btn_link: string;
  btn_class: string;
  menu: string;
  cart: string;
}

function NavBar({
  logo,
  nav_links,
  btn_label,
  btn_link,
  btn_class,
  menu,
  cart,
}: navprops) {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link href="/">
          <Image src={logo} width={100} height={100} alt="" />
        </Link>
      </div>
      <NavBarItem items={nav_links} clicked={show} setClicked={setShow} />
      <div className="nav__button">
        <Button label={btn_label} link={btn_link} btnclass={btn_class} />
      </div>
      <div className="nav__menu">
        <Image
          src={cart}
          alt=""
          width={100}
          height={100}
          className="nav__cart"
        />
        <Image
          src={menu}
          alt=""
          width={100}
          height={100}
          // className={`nav__menu-icon ${show ? "nav__visible" : ""}`}
          className="nav__menu-icon nav__visible"
          onClick={() => setShow(true)}
        />
      </div>
    </nav>
  );
}

export default NavBar;
