import "./ServiceList.css";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import type { Service } from "../types/service";

interface ServiceListProps {
  selectedServices: Service[];
  onToggleService: (service: Service) => void;
}

export default function ServiceList({
  selectedServices,
  onToggleService,
}: ServiceListProps) {
  return (
    <div className="service-list">
      <div className="service-list__services-container">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isAdded={selectedServices.some((s) => s.id === service.id)}
            onToggle={() => onToggleService(service)}
          />
        ))}
      </div>
    </div>
  );
}
