import "./Cart.css";
import type { Service } from "../types/service";
import Button from "./Button";
import { useButtonSize } from "../hooks/useButtonSize";
import CartServiceList from "./CartServiceList";

interface CartProps {
  selectedServices: Service[];
}

export default function Cart({ selectedServices }: CartProps) {
  const buttonSize = useButtonSize();
  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__summary">
          <div className="cart__total-price">
            <div className="cart__total-label">Итого к оплате:</div>
            <div className="cart__total-value">{totalPrice}₽</div>
          </div>
          <Button
            size={buttonSize}
            isAdded={false}
            onClick={() => console.log("Оформление заказа.")}
            customLabel="Оформить заказ"
          />
        </div>
      </div>
      <CartServiceList services={selectedServices} />
    </div>
  );
}
