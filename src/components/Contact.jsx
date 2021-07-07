import React, { useState } from "react";
import { send } from "emailjs-com";
import "../css/contact.css";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Ladislav Topoľský",
    message: "",
    reply_to: "",
    "g-recaptcha-response": "",
  });

  const setCaptcha = (captchaValue) => {
    setToSend((prevState) => ({
      ...prevState,
      "g-recaptcha-response": captchaValue,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      from_name: "",
      to_name: "Ladislav Topoľský",
      message: "",
      reply_to: "",
      "g-recaptcha-response": "",
    });
  };

  const handleChange = (e) => {
    setToSend((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="contact" id="contact">
      <h4 className="contact__heading">Contact Me</h4>
      <form onSubmit={onSubmit} className="contact__form">
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          className="contact__name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="contact__message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          className="contact__email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={setCaptcha}
        />
        <button type="submit" className="contact__btn">
          Submit
        </button>
      </form>
      <p className="contact__footer">
        Copyright © 2021 Ladislav Topoľský. All Rights Reserved
      </p>
    </div>
  );
};
