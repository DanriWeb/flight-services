import { useState, useEffect } from "react";
import "./ServiceCard.css";
import type { Service } from "../types/service";
import Button from "./Button";
import type { ButtonProps } from "../types/button";

type ServiceCardProps = Pick<Service, "title" | "illustration" | "price">;

export default function ServiceCard({
  title,
  price,
  illustration,
}: ServiceCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [buttonSize, setButtonSize] =
    useState<ButtonProps["size"]>("small-mobile");

  useEffect(() => {
    // Обновление размера кнопки при изменении размера окна
    const updateButtonSize = () => {
      const width = window.innerWidth;
      let newSize: ButtonProps["size"];

      if (width <= 480) {
        newSize = "small-mobile";
      } else if (width <= 768) {
        newSize = "medium-tablet";
      } else {
        newSize = "medium-desktop";
      }

      // Отключить transition на всех кнопках
      const buttons = document.querySelectorAll(".button");
      buttons.forEach((btn) => btn.classList.add("no-transition"));

      setButtonSize(newSize);

      // Включить transition обратно после изменения
      requestAnimationFrame(() => {
        setTimeout(() => {
          buttons.forEach((btn) => btn.classList.remove("no-transition"));
        }, 50);
      });
    };

    // Установить размер при монтировании
    updateButtonSize();

    // Слушать изменения размера окна
    window.addEventListener("resize", updateButtonSize);

    // Очистка при размонтировании
    return () => window.removeEventListener("resize", updateButtonSize);
  }, []);

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
      <Button size={buttonSize} isAdded={isAdded} onClick={handleAddClick} />
    </div>
  );
}
