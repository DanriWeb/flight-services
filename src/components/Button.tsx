import "./Button.css";
import type { ButtonProps } from "../types/button";
import CheckMarkIcon from "../assets/icons/Check Mark.svg?react";

export default function Button({ size, isAdded, onClick }: ButtonProps) {
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
