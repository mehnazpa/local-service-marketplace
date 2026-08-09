import React from "react";

function ServiceCard({
  name,
  count,
  icon: Icon,
  color,
}) {
  return (
    <a href={`/services?category=${name}`} className="service-card">
      <div className={`service-icon ${color}`}>
        <Icon size={39} strokeWidth={2.2} />
      </div>

      <h3>{name}</h3>

      <p>{count}</p>
    </a>
  );
}

export default ServiceCard;