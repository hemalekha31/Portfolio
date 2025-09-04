import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_lo59ztd",   // Copy exact Service ID from EmailJS
        "template_uunbbbq",  // Copy exact Template ID from EmailJS
        form.current,
        "FMr3zbc0dlfsYy895"    // Copy exact Public Key from EmailJS
      )
      .then(
        (response) => {
          console.log("EmailJS success:", response);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000); // Clear status after 5s
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send message, please try again.");
          setTimeout(() => setStatus(""), 5000); // Clear status after 5s
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="contsd">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="title">Subject</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Subject"
          required
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Any Queries?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        />

        {/* Hidden field for time */}
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>

        {/* Status message */}
        {status && (
          <p className="status-msg" aria-live="polite">
            {status}
          </p>
        )}
      </form>

      {/* Optional: reCAPTCHA can be added here */}
    </div>
  );
};

export default Contact;
