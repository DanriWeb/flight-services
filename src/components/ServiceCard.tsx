import "./ServiceCard.css";
import type { Service } from "../types/service";
import Button from "./Button";
import { useButtonSize } from "../hooks/useButtonSize";

interface ServiceCardProps {
  service: Service;
  isAdded: boolean;
  onToggle: () => void;
}

export default function ServiceCard({
  service,
  isAdded,
  onToggle,
}: ServiceCardProps) {
  const buttonSize = useButtonSize();

  return (
    <div className="service-card">
      <div className="service-card__information-container">
        <div className="service-card__illustration-container">
          <img
            src={service.illustration}
            alt=""
            className="service-card__illustration"
          />
        </div>
        <div className="service-card__description-container">
          <h3 className="service-card__service-title">{service.title}</h3>
          <p className="service-card__service-price">{service.price}₽</p>
        </div>
      </div>
      <Button size={buttonSize} isAdded={isAdded} onClick={onToggle} />
    </div>
  );
}
