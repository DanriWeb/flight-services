import "./App.css";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="title-container">
          <h2 className="title">
            Сервис дополнительных услуг для авиапассажиров
          </h2>
        </div>
        <ServiceList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
