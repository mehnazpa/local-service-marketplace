import React from "react";
import {
  Zap,
  Droplets,
  Hammer,
  GraduationCap,
  Brush,
  Wrench,
  Car,
  PaintRoller,
} from "lucide-react";

import ServiceCard from "../../components/ServiceCard";

const services = [
  {
    name: "Electricians",
    count: "245 Professionals",
    icon: Zap,
    color: "yellow",
  },
  {
    name: "Plumbers",
    count: "192 Professionals",
    icon: Droplets,
    color: "blue",
  },
  {
    name: "Carpenters",
    count: "156 Professionals",
    icon: Hammer,
    color: "orange",
  },
  {
    name: "Tutors",
    count: "320 Professionals",
    icon: GraduationCap,
    color: "green",
  },
  {
    name: "Cleaners",
    count: "180 Professionals",
    icon: Brush,
    color: "purple",
  },
  {
    name: "AC Repair",
    count: "98 Professionals",
    icon: Wrench,
    color: "blue",
  },
  {
    name: "Mechanics",
    count: "134 Professionals",
    icon: Car,
    color: "red",
  },
  {
    name: "Painters",
    count: "117 Professionals",
    icon: PaintRoller,
    color: "teal",
  },
];

function Services() {
  return (
    <div className="inner-page">

      <section className="page-hero services-hero">
        <div>
          <p className="page-label">OUR SERVICES</p>

          <h1>
            Find the Right Service
            <span>Near You</span>
          </h1>

          <p>
            Explore trusted local professionals and choose
            the service that fits your needs.
          </p>
        </div>
      </section>

      <section className="services-page-content">

        <div className="services-heading">
          <h2>Popular Services</h2>

          <p>
            Choose from a wide range of professional services.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              count={service.count}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>

      </section>
    </div>
  );
}

export default Services;