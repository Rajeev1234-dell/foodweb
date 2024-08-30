import React from "react";
import Carditem from "./CardItem";
import { fearuredtype } from "@/typescript/type";

type featuredprops = {
  featured_data: fearuredtype;
};

function Featured({ featured_data }: featuredprops) {
  return (
    <section className="container featured">
      <h2 className="featured__title">{featured_data.title}</h2>
      <Carditem cards={featured_data.image} />
    </section>
  );
}

export default Featured;
