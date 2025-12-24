import "./CartServiceList.css";
import type { Service } from "../types/service";
import CartServiceItem from "./CartServiceItem";

interface CartServiceListProps {
  services: Service[];
}

export default function CartServiceList({ services }: CartServiceListProps) {
  if (services.length === 0) {
    return (
      <p className="cart__service-list cart__service-list--empty">
        Услуги не выбраны
      </p>
    );
  }

  return (
    <div className="cart__service-list">
      {services.map((service) => (
        <CartServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}
