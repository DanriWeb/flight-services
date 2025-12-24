import "./App.css";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__main-title-container">
          <h2 className="app__main-title">
            Выберите услуги для комфортного полёта
          </h2>
        </div>
        <ServiceList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
