import "./Button.css";
import type { ButtonProps } from "../types/button";

export default function Button({ size, isAdded, onClick }: ButtonProps) {
  return (
    <button
      className={`button button--${size} ${isAdded ? "button--added" : ""}`}
      onClick={onClick}
    >
      {isAdded ? "Добавлено" : "Добавить"}
    </button>
  );
}
