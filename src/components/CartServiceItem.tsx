import "./CartServiceItem.css";
import type { Service } from "../types/service";

interface CartServiceItemProps {
  service: Service;
}

export default function CartServiceItem({ service }: CartServiceItemProps) {
  return (
    <div className="cart__service-item">
      <span className="cart__service-item__name">{service.title}</span>
      <span className="cart__service-item__price">{service.price}₽</span>
    </div>
  );
}
