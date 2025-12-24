import { useState } from "react";
import "./ServiceCard.css";
import type { Service } from "../types/service";
import Button from "./Button";

type ServiceCardProps = Pick<Service, "title" | "illustration" | "price">;

export default function ServiceCard({
  title,
  price,
  illustration,
}: ServiceCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="service-card">
      <div className="service-card__information-container">
        <div className="service-card__illustration-container">
          <img
            src={illustration}
            alt=""
            className="service-card__illustration"
          />
        </div>
        <div className="service-card__description-container">
          <h3 className="service-card__service-title">{title}</h3>
          <p className="service-card__service-price">${price}</p>
        </div>
      </div>
      <Button size="small-mobile" isAdded={isAdded} onClick={handleAddClick} />
    </div>
  );
}
