import React from "react";
import { abouttype } from "@/typescript/type";
import Image from "next/image";
import Button from "../Button/Button";

type aboutprops = {
  about_data: abouttype;
};

function About({ about_data }: aboutprops) {
  return (
    <section
      className={`about ${
        about_data?.varation === "2" ? "about--modified" : ""
      }`}
      style={{ backgroundColor: `${about_data?.bgcolor}` }}
    >
      <div
        className={`about__wrapper container ${
          about_data?.varation === "2" ? "about__wrapper--modified" : ""
        }`}
      >
        <div className="about__image">
          <Image src={about_data.image} alt="" width={100} height={100} />
          <div className="about__btn2">
            <Button
              label={about_data.explore_btn.label}
              link={about_data.explore_btn.link}
              btnclass={about_data.explore_btn.styles}
            />
            <Button
              label={about_data.order_btn.label}
              link={about_data.order_btn.link}
              btnclass={about_data.order_btn.styles}
            />
          </div>
        </div>
        <div className="about__content">
          <h4>{about_data.headline}</h4>
          <h2>{about_data.sub_headline}</h2>
          <div className="about__details">
            <p className="about__desc">{about_data.desc}</p>
            <ul>
              {about_data.items?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <div className="about__btn">
              <Button
                label={about_data.explore_btn.label}
                link={about_data.explore_btn.link}
                btnclass={about_data.explore_btn.styles}
              />
              <Button
                label={about_data.order_btn.label}
                link={about_data.order_btn.link}
                btnclass={about_data.order_btn.styles}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
