import "./App.css";
import "./Header.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <Home />
      <Product />
    </div>
  );
}

export default App;
