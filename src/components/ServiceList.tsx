import "./ServiceList.css";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

export default function ServiceList() {
  return (
    <div className="service-list">
      <div className="service-list__services-container">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            price={service.price}
            illustration={service.illustration}
          />
        ))}
      </div>
    </div>
  );
}
