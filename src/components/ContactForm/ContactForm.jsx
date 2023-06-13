import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="stars__container">
        <img src="./star-6.svg" alt="star svg" className="img__star--left" />
        <img src="./star-3.svg" alt="star svg" className="img__star--center" />
        <img src="./star-7.svg" alt="star svg" className="img__star--right" />
      </div>
      <div className="contact__text ">
        <p className="contact__text--title">Want to work together?</p>
        <p className="contact__text--subtitle">Reach out to me</p>
      </div>
      <form onSubmit={handleSubmit} className="max-width">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="your message"
          value={data.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send message now</button>
      </form>
    </>
  );
};

export default ContactForm;
