import { useState, useEffect } from "react";
import type { ButtonProps } from "../types/button";

export function useButtonSize(): ButtonProps["size"] {
  const [buttonSize, setButtonSize] =
    useState<ButtonProps["size"]>("small-mobile");

  useEffect(() => {
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

  return buttonSize;
}
