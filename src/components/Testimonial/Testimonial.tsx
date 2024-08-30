import React from "react";
import { testimonialtype } from "@/typescript/type";
import Image from "next/image";
import Link from "next/link";

type testimprops = {
  testimonial_data: testimonialtype;
};

function Testimonial({ testimonial_data }: testimprops) {
  return (
    <section className="testimonial">
      <h2 className="testimonial__title">{testimonial_data.title}</h2>
      <div className="testimonial__card">
        <div className="testimonial__header">
          <div className="testimonial__image">
            <Image
              src={testimonial_data.profile.image}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <h4>{testimonial_data.profile.name}</h4>
          <div className="testimonial__link">
            <Link href={testimonial_data.link.url}>
              {testimonial_data.link.label}
            </Link>
          </div>
        </div>
        {testimonial_data.rating?.map((star) => (
          <Image
            src={star}
            alt=""
            width={100}
            height={100}
            className="testimonial__star"
          />
        ))}
        <p className="testimonial__desc">{testimonial_data.desc}</p>
      </div>
    </section>
  );
}

export default Testimonial;
