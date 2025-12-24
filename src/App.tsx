import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import Cart from "./components/Cart";
import type { Service } from "./types/service";

function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  // Добавление/удаление услуги
  const toggleService = (service: Service) => {
    setSelectedServices((prev) => {
      const isAlreadyAdded = prev.some((s) => s.id === service.id);

      if (isAlreadyAdded) {
        // Удалить услугу
        return prev.filter((s) => s.id !== service.id);
      } else {
        // Добавить услугу
        return [...prev, service];
      }
    });
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__main-title-container">
          <h2 className="app__main-title">
            Выберите услуги для комфортного полёта
          </h2>
        </div>
        <div className="app__main-services-container">
          <ServiceList
            selectedServices={selectedServices}
            onToggleService={toggleService}
          />
          <Cart selectedServices={selectedServices} />
        </div>
      </main>
    </div>
  );
}

export default App;
