import Image from "next/image";
import React from "react";
import { fearuredtype } from "@/typescript/type";

type cardsprops = {
  cards: fearuredtype["image"];
};

function Carditem({ cards }: cardsprops) {
  return (
    <div className="card">
      {cards?.map((card, index) => (
        <div className="card__item" key={index}>
          <div className="card__image">
            <Image src={card.url} width={100} height={100} alt="" />
          </div>
          <h2 className="card__title">{card.label}</h2>
        </div>
      ))}
    </div>
  );
}

export default Carditem;
