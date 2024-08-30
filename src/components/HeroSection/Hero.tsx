import React from "react";
import NavBar from "../Navbar/NavBar";
import { herotype } from "@/typescript/type";
import Button from "../Button/Button";

interface heroprops {
  data: herotype;
}

function Hero({ data }: heroprops) {
  console.log(data);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${data.background_image})` }}
    >
      <div className="hero__wrapper container">
        <NavBar
          logo={data.logo}
          nav_links={data.links}
          btn_label={data.nav_btn.label}
          btn_link={data.nav_btn.link}
          btn_class={data.nav_btn.styles}
          menu={data.menu_icon}
          cart={data.cart_icon}
        />
        <h4 className="hero__subheadline">{data.head_line}</h4>
        <div className="hero__title">
          <h1>{data.sub_headline}</h1>
        </div>
        <div className="hero__content">
          <p className="hero__desc">{data.desc}</p>
          <div className="hero__btn">
            <Button
              label={data.hero_btn.label}
              link={data.hero_btn.link}
              btnclass={data.hero_btn.styles}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
