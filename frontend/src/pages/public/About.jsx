import React from "react";
import {
  ShieldCheck,
  Users,
  Target,
  HeartHandshake,
} from "lucide-react";

function About() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div>
          <p className="page-label">ABOUT NEARHAND</p>

          <h1>
            Your Trusted Local
            <span>Service Marketplace</span>
          </h1>

          <p>
            NearHand connects customers with trusted and
            verified local professionals for their everyday
            service needs.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Connecting You With Trusted Professionals</h2>

          <p>
            Finding a reliable electrician, plumber, cleaner,
            carpenter, tutor, mechanic or other local
            professional should be simple.
          </p>

          <p>
            NearHand brings customers and service providers
            together on one convenient platform. You can
            explore services, compare professionals, book
            appointments and review your experience.
          </p>

          <p>
            Our goal is to make local services easier to find,
            safer to book and more convenient for everyone.
          </p>
        </div>

        <div className="about-features">
          <div className="about-feature">
            <ShieldCheck size={30} />
            <div>
              <h3>Verified Professionals</h3>
              <p>Connect with trusted service providers.</p>
            </div>
          </div>

          <div className="about-feature">
            <Users size={30} />
            <div>
              <h3>Local Services</h3>
              <p>Find professionals near your location.</p>
            </div>
          </div>

          <div className="about-feature">
            <Target size={30} />
            <div>
              <h3>Easy Booking</h3>
              <p>Book the service you need with ease.</p>
            </div>
          </div>

          <div className="about-feature">
            <HeartHandshake size={30} />
            <div>
              <h3>Customer First</h3>
              <p>Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;