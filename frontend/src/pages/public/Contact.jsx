import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="inner-page">

      <section className="page-hero contact-hero">
        <div>
          <p className="page-label">CONTACT US</p>

          <h1>
            We're Here to
            <span>Help You</span>
          </h1>

          <p>
            Have a question or need assistance?
            Get in touch with the NearHand team.
          </p>
        </div>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have questions about our services or need
            assistance? We'd love to hear from you.
          </p>

          <div className="contact-box">
            <div className="contact-box-icon">
              <MapPin size={24} />
            </div>

            <div>
              <h3>Our Location</h3>
              <p>Bangalore, India</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-box-icon">
              <Phone size={24} />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-box-icon">
              <Mail size={24} />
            </div>

            <div>
              <h3>Email</h3>
              <p>support@nearhand.com</p>
            </div>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>Send Us a Message</h2>

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Message</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="6"
            required
          />

          <button type="submit">
            Send Message
            <Send size={18} />
          </button>

        </form>

      </section>
    </div>
  );
}

export default Contact;