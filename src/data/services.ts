import type { Service } from "../types/service";
import extraBaggage from "../assets/images/extra_baggage.png";
import seatSelection from "../assets/images/seat_selection.png";
import inflightMeal from "../assets/images/inflight_meal.png";

export const services: Service[] = [
  {
    id: "extra-baggage",
    title: "Багаж сверх нормы",
    price: 30,
    illustration: extraBaggage,
  },
  {
    id: "seat-selection",
    title: "Выбор места у окна",
    price: 10,
    illustration: seatSelection,
  },
  {
    id: "inflight-meal",
    title: "Питание на борту",
    price: 15,
    illustration: inflightMeal,
  },
];
