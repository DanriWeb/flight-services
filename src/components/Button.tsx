import "./Button.css";
import type { ButtonProps } from "../types/button";
import CheckMarkIcon from "../assets/icons/Check Mark.svg?react";

export default function Button({
  size,
  isAdded,
  onClick,
  customLabel,
}: ButtonProps) {
  if (customLabel) {
    // для кастомного текста
    return (
      <button className={`button button--${size}`} onClick={onClick}>
        {customLabel}
      </button>
    );
  }

  // для стандартного текста
  return (
    <button
      className={`button button--${size} ${isAdded ? "button--added" : ""}`}
      onClick={onClick}
    >
      {isAdded ? (
        <>
          <CheckMarkIcon />
          Добавлено
        </>
      ) : (
        "Добавить"
      )}
    </button>
  );
}
