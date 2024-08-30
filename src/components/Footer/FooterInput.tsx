import React from "react";

function FooterInput({ footer_form }: any) {
  return (
    <div className="form">
      <h5 className="form__subscribe">{footer_form.subscribe}</h5>
      <form>
        <div className="form__sumbit">
          <input
            type="email"
            placeholder={footer_form.placeholder}
            className="form__email"
          />
          <input type="submit" value="Submit" className="form__btn" />
        </div>
      </form>
    </div>
  );
}

export default FooterInput;
