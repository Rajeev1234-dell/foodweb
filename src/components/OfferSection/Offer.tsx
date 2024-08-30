import React from "react";
import Button from "../Button/Button";

function Offer({ offer_data }: any) {
  return (
    <section className="offer">
      <h2 className="offer__title">{offer_data.headline}</h2>
      <p className="offer__desc">{offer_data.sub_headline}</p>
      <div className="offer__links">
        <Button
          label={offer_data.view_btn.label}
          link={offer_data.view_btn.link}
          btnclass="secondary"
        />

        <Button
          label={offer_data.follow_btn.label}
          link={offer_data.follow_btn.link}
          btnclass="secondary"
        />
      </div>
    </section>
  );
}

export default Offer;
